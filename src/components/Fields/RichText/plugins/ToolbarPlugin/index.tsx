import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import {
  $findMatchingParent,
  $getNearestNodeOfType,
  $isEditorIsNestedEditor,
  mergeRegister
} from '@lexical/utils';
import {
  $getSelection,
  $isElementNode,
  $isRangeSelection,
  $isRootOrShadowRoot,
  CAN_REDO_COMMAND,
  CAN_UNDO_COMMAND,
  COMMAND_PRIORITY_LOW,
  FORMAT_ELEMENT_COMMAND,
  FORMAT_TEXT_COMMAND,
  LexicalEditor,
  REDO_COMMAND,
  SELECTION_CHANGE_COMMAND,
  UNDO_COMMAND,
  NodeKey
} from 'lexical';
import { $isLinkNode, $toggleLink } from '@lexical/link';
import {
  AlignCenterIcon,
  AlignLeftIcon,
  AlignRightIcon,
  Bold,
  ItalicIcon,
  RotateCcwIcon,
  RotateCwIcon,
  Strikethrough,
  Underline
} from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import InsertLink from '../InsertLink';
import { blockTypeToBlockName, useToolbarState } from './ToolbarContext';
import BlockFormat from './BlockFormat';
import { $getSelectionStyleValueForProperty, $isParentElementRTL } from '@lexical/selection';
import { getSelectedNode } from '../../utils/getSelectedNode';
import { $isTableNode } from '@lexical/table';
import { $isListNode, ListNode } from '@lexical/list';
import { $isHeadingNode } from '@lexical/rich-text';
import ElementFormat from './ElementFormat';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

function Divider() {
  return <div className="divider" />;
}

export default function ToolbarPlugin() {
  const [, setSelectedElementKey] = useState<NodeKey | null>(null);
  const [editor] = useLexicalComposerContext();
  const [activeEditor] = useState(editor);
  const [isEditable] = useState(() => editor.isEditable());
  const { toolbarState, updateToolbarState } = useToolbarState();
  const toolbarRef = useRef(null);

  const $updateToolbar = useCallback(() => {
    const selection = $getSelection();
    if ($isRangeSelection(selection)) {
      if (activeEditor !== editor && $isEditorIsNestedEditor(activeEditor)) {
        const rootElement = activeEditor.getRootElement();
        updateToolbarState(
          'isImageCaption',
          !!rootElement?.parentElement?.classList.contains('image-caption-container')
        );
      } else {
        updateToolbarState('isImageCaption', false);
      }

      const anchorNode = selection.anchor.getNode();
      let element =
        anchorNode.getKey() === 'root'
          ? anchorNode
          : $findMatchingParent(anchorNode, (e) => {
              const parent = e.getParent();
              return parent !== null && $isRootOrShadowRoot(parent);
            });

      if (element === null) {
        element = anchorNode.getTopLevelElementOrThrow();
      }

      const elementKey = element.getKey();
      const elementDOM = activeEditor.getElementByKey(elementKey);

      updateToolbarState('isRTL', $isParentElementRTL(selection));

      // Update links
      const node = getSelectedNode(selection);
      const parent = node.getParent();
      const isLink = $isLinkNode(parent) || $isLinkNode(node);
      updateToolbarState('isLink', isLink);

      const tableNode = $findMatchingParent(node, $isTableNode);
      if ($isTableNode(tableNode)) {
        updateToolbarState('rootType', 'table');
      } else {
        updateToolbarState('rootType', 'root');
      }

      if (elementDOM !== null) {
        setSelectedElementKey(elementKey);
        if ($isListNode(element)) {
          const parentList = $getNearestNodeOfType<ListNode>(anchorNode, ListNode);
          const type = parentList ? parentList.getListType() : element.getListType();

          updateToolbarState('blockType', type);
        } else {
          const type = $isHeadingNode(element) ? element.getTag() : element.getType();
          if (type in blockTypeToBlockName) {
            updateToolbarState('blockType', type as keyof typeof blockTypeToBlockName);
          }
        }
      }
      // Handle buttons
      updateToolbarState(
        'fontColor',
        $getSelectionStyleValueForProperty(selection, 'color', '#000')
      );
      updateToolbarState(
        'bgColor',
        $getSelectionStyleValueForProperty(selection, 'background-color', '#fff')
      );
      updateToolbarState(
        'fontFamily',
        $getSelectionStyleValueForProperty(selection, 'font-family', 'Arial')
      );
      let matchingParent;
      if ($isLinkNode(parent)) {
        matchingParent = $findMatchingParent(
          node,
          (parentNode) => $isElementNode(parentNode) && !parentNode.isInline()
        );
      }

      updateToolbarState(
        'elementFormat',
        $isElementNode(matchingParent)
          ? matchingParent.getFormatType()
          : $isElementNode(node)
            ? node.getFormatType()
            : parent?.getFormatType() || 'left'
      );
    }
    if ($isRangeSelection(selection)) {
      // Update text format
      updateToolbarState('isBold', selection.hasFormat('bold'));
      updateToolbarState('isItalic', selection.hasFormat('italic'));
      updateToolbarState('isUnderline', selection.hasFormat('underline'));
      updateToolbarState('isStrikethrough', selection.hasFormat('strikethrough'));
      updateToolbarState('isSubscript', selection.hasFormat('subscript'));
      updateToolbarState('isSuperscript', selection.hasFormat('superscript'));
      updateToolbarState('isHighlight', selection.hasFormat('highlight'));
      updateToolbarState('isCode', selection.hasFormat('code'));
      updateToolbarState(
        'fontSize',
        $getSelectionStyleValueForProperty(selection, 'font-size', '15px')
      );
      updateToolbarState('isLowercase', selection.hasFormat('lowercase'));
      updateToolbarState('isUppercase', selection.hasFormat('uppercase'));
      updateToolbarState('isCapitalize', selection.hasFormat('capitalize'));
    }
  }, [activeEditor, editor, updateToolbarState]);

  const insertLink = (text: string, link: string) => {
    editor.update(() => {
      const selection = $getSelection();

      if ($isRangeSelection(selection)) {
        if (text && link) {
          const { anchor, focus } = selection;
          selection.insertText(text);

          anchor.offset -= text.length;
          focus.offset = anchor.offset + text.length;

          $toggleLink(link, { target: '_blank' });
        }
      }
    });
  };

  useEffect(() => {
    return mergeRegister(
      editor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
          $updateToolbar();
        });
      }),
      editor.registerCommand(
        SELECTION_CHANGE_COMMAND,
        (_payload, _newEditor) => {
          $updateToolbar();
          return false;
        },
        COMMAND_PRIORITY_LOW
      ),
      editor.registerCommand(
        CAN_UNDO_COMMAND,
        (payload) => {
          updateToolbarState('canUndo', payload);
          return false;
        },
        COMMAND_PRIORITY_LOW
      ),
      editor.registerCommand(
        CAN_REDO_COMMAND,
        (payload) => {
          updateToolbarState('canRedo', payload);
          return false;
        },
        COMMAND_PRIORITY_LOW
      )
    );
  }, [editor, $updateToolbar]);

  return (
    <div
      className="max-w-auto w-full overflow-x-scroll border-b bg-neutral-50 p-1"
      ref={toolbarRef}
    >
      <div className="flex w-full">
        <button
          type="button"
          disabled={!toolbarState.canUndo}
          onClick={() => {
            editor.dispatchCommand(UNDO_COMMAND, undefined);
          }}
          className="toolbar-item spaced"
          aria-label="Undo"
        >
          <RotateCcwIcon size={16} />
        </button>
        <button
          type="button"
          disabled={!toolbarState.canRedo}
          onClick={() => {
            editor.dispatchCommand(REDO_COMMAND, undefined);
          }}
          className="toolbar-item"
          aria-label="Redo"
        >
          <RotateCwIcon size={16} />
        </button>
        <Divider />
        {toolbarState.blockType in blockTypeToBlockName && editor && (
          <>
            <BlockFormat
              disabled={!isEditable}
              blockType={toolbarState.blockType}
              rootType={toolbarState.rootType}
              editor={activeEditor}
            />
            <Divider />
          </>
        )}
        <button
          type="button"
          onClick={() => {
            editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold');
          }}
          className={'toolbar-item spaced ' + (toolbarState.isBold ? 'active' : '')}
          aria-label="Format Bold"
        >
          <Bold size={16} />
        </button>
        <button
          type="button"
          onClick={() => {
            editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic');
          }}
          className={'toolbar-item spaced ' + (toolbarState.isItalic ? 'active' : '')}
          aria-label="Format Italics"
        >
          <ItalicIcon size={16} />
        </button>
        <button
          type="button"
          onClick={() => {
            editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'underline');
          }}
          className={'toolbar-item spaced ' + (toolbarState.isUnderline ? 'active' : '')}
          aria-label="Format Underline"
        >
          <Underline size={16} />
        </button>
        <button
          type="button"
          onClick={() => {
            editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'strikethrough');
          }}
          className={'toolbar-item spaced ' + (toolbarState.isStrikethrough ? 'active' : '')}
          aria-label="Format Strikethrough"
        >
          <Strikethrough size={16} />
        </button>
        <Divider />
        <InsertLink handlerFn={insertLink} />
        <Divider />
        <ElementFormat
          disabled={!isEditable}
          value={toolbarState.elementFormat}
          editor={activeEditor}
          isRTL={toolbarState.isRTL}
        />
      </div>
    </div>
  );
}
