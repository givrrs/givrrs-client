'use client';
import { useEffect, useRef } from 'react';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $generateNodesFromDOM } from '@lexical/html';
import { $getRoot } from 'lexical';

export default function InitializeContentPlugin({ htmlContent }: { htmlContent?: string }) {
  const [editor] = useLexicalComposerContext();
  const initValueRef = useRef<string | undefined>(undefined);
  const hasInitialized = useRef(false);

  useEffect(() => {
    if (htmlContent && !hasInitialized.current) {
      initValueRef.current = htmlContent;
      hasInitialized.current = true;

      editor.update(() => {
        const parser = new DOMParser();
        const dom = parser.parseFromString(htmlContent, 'text/html');
        const nodes = $generateNodesFromDOM(editor, dom);

        const root = $getRoot();
        root.clear();
        root.append(...nodes);
      });
    }
  }, [editor]);

  return null;
}
