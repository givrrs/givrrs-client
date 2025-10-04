'use client';

import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { $generateHtmlFromNodes } from '@lexical/html';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $getRoot } from 'lexical';

interface Props {
  onChange?: (html: string) => void;
  onCharCountChange?: (count: number) => void;
}

export default function MyOnChangePlugin({ onChange, onCharCountChange }: Props) {
  const [editor] = useLexicalComposerContext();

  return (
    <OnChangePlugin
      onChange={(editorState) => {
        editorState.read(() => {
          const htmlString = $generateHtmlFromNodes(editor, null);
          const text = $getRoot().getTextContent().trim();

          onCharCountChange?.(text.length);
          onChange?.(text.length === 0 ? '' : htmlString);
        });
      }}
    />
  );
}
