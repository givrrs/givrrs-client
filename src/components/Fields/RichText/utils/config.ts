import { InitialConfigType } from '@lexical/react/LexicalComposer';
import { LinkNode, AutoLinkNode } from '@lexical/link';

import {
  $isTextNode,
  Klass,
  LexicalEditor,
  LexicalNode,
  ParagraphNode,
  TextNode,
  DOMExportOutput,
  DOMExportOutputMap,
  DOMConversionMap,
  isHTMLElement
} from 'lexical';

import Theme from '../Theme';
import { parseAllowedColor, parseAllowedFontSize } from '../StyleConfig';
import { createLinkMatcherWithRegExp } from '@lexical/react/LexicalAutoLinkPlugin';
import PlaygroundNodes from '../nodes/PlayGroundNodes';

export const removeStylesExportDOM = (
  editor: LexicalEditor,
  target: LexicalNode
): DOMExportOutput => {
  const output = target.exportDOM(editor);
  if (output && isHTMLElement(output.element)) {
    for (const el of [
      output.element,
      ...output.element.querySelectorAll('[style],[class],[dir="ltr"]')
    ]) {
      el.removeAttribute('class');
      el.removeAttribute('style');
      if (el.getAttribute('dir') === 'ltr') {
        el.removeAttribute('dir');
      }
    }
  }
  return output;
};

export const exportMap: DOMExportOutputMap = new Map<
  Klass<LexicalNode>,
  (editor: LexicalEditor, target: LexicalNode) => DOMExportOutput
>([
  [ParagraphNode, removeStylesExportDOM],
  [TextNode, removeStylesExportDOM]
]);

export const getExtraStyles = (element: HTMLElement): string => {
  let extraStyles = '';
  const fontSize = parseAllowedFontSize(element.style.fontSize);
  const backgroundColor = parseAllowedColor(element.style.backgroundColor);
  const color = parseAllowedColor(element.style.color);
  if (fontSize && fontSize !== '15px') extraStyles += `font-size: ${fontSize};`;
  if (backgroundColor && backgroundColor !== 'rgb(255, 255, 255)')
    extraStyles += `background-color: ${backgroundColor};`;
  if (color && color !== 'rgb(0, 0, 0)') extraStyles += `color: ${color};`;
  return extraStyles;
};

export const constructImportMap = (): DOMConversionMap => {
  const importMap: DOMConversionMap = {};
  for (const [tag, fn] of Object.entries(TextNode.importDOM() || {})) {
    importMap[tag] = (importNode) => {
      const importer = fn(importNode);
      if (!importer) return null;
      return {
        ...importer,
        conversion: (element) => {
          const output = importer.conversion(element);
          if (
            output === null ||
            output.forChild === undefined ||
            output.after !== undefined ||
            output.node !== null
          )
            return output;
          const extraStyles = getExtraStyles(element);
          if (extraStyles) {
            const { forChild } = output;
            return {
              ...output,
              forChild: (child, parent) => {
                const textNode = forChild(child, parent);
                if ($isTextNode(textNode)) {
                  textNode.setStyle(textNode.getStyle() + extraStyles);
                }
                return textNode;
              }
            };
          }
          return output;
        }
      };
    };
  }
  return importMap;
};

export const editorConfig: InitialConfigType = {
  namespace: 'RichTextEditor',
  theme: Theme,
  onError: (error) => {
    throw error;
  },
  nodes: [...PlaygroundNodes],
  html: {
    import: constructImportMap()
  }
};
