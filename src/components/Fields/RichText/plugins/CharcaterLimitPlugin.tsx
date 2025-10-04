import { useEffect } from 'react';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $createTextNode, $getRoot } from 'lexical';

interface CharacterLimitPluginProps {
  maxLength: number;
  onCharCountChange?: (count: number) => void;
}

export default function CharacterLimitPlugin({
  maxLength,
  onCharCountChange
}: CharacterLimitPluginProps) {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    return editor.registerUpdateListener(({ editorState }) => {
      editorState.read(() => {
        const rootText = $getRoot().getTextContent();
        const currentLength = rootText.length;

        if (onCharCountChange) onCharCountChange(currentLength);

        if (currentLength > maxLength) {
          editor.update(() => {
            const root = $getRoot();
            const trimmedText = rootText.slice(0, maxLength);
            root.clear();
            root.append($createTextNode(trimmedText));
          });
        }
      });
    });
  }, [editor, maxLength, onCharCountChange]);

  return null;
}
