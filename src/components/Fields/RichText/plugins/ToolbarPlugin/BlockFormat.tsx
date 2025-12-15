import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from '@/components/ui/dropdown-menu';
import { blockTypeToBlockName } from './ToolbarContext';
import { SHORTCUTS } from '../ShortcutsPlugin/shortcuts';
import {
  formatBulletList,
  formatCheckList,
  formatHeading,
  formatNumberedList,
  formatParagraph,
  formatQuote
} from './utils';
import { LexicalEditor } from 'lexical';
import {
  ChevronDown,
  Heading1,
  Heading2,
  Heading3,
  LetterText,
  List,
  ListCheck,
  ListOrdered,
  Quote
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import ShortCutFormat from './ShortCutFormat';
import { JSX } from 'react';

const rootTypeToRootName = {
  root: 'Root',
  table: 'Table'
};

function dropDownActiveClass(active: boolean) {
  if (active) {
    return 'active dropdown-item-active';
  } else {
    return '';
  }
}

export default function BlockFormat({
  blockType,
  rootType,
  disabled = false,
  editor
}: {
  blockType: keyof typeof blockTypeToBlockName;
  rootType: keyof typeof rootTypeToRootName;
  editor: LexicalEditor;
  disabled?: boolean;
}): JSX.Element {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger disabled={disabled} asChild>
        <Button variant="ghost" className="text-xs">
          {blockTypeToBlockName[blockType]}
          <ChevronDown size={14} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center">
        <DropdownMenuItem
          className={
            'flex w-full items-center justify-between' +
            dropDownActiveClass(blockType === 'paragraph')
          }
          onClick={() => formatParagraph(editor)}
        >
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center justify-start space-x-2">
              <LetterText className="text-neutral-300" size={15} />
              <span className="text">Normal</span>
            </div>
            <ShortCutFormat text={SHORTCUTS.NORMAL} />
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem
          className={'flex items-center justify-between' + dropDownActiveClass(blockType === 'h1')}
          onClick={() => formatHeading(editor, blockType, 'h1')}
        >
          <div className="flex items-center justify-start space-x-2">
            <Heading1 className="text-neutral-300" size={15} />
            <span className="text">Heading 1</span>
          </div>
          <ShortCutFormat text={SHORTCUTS.HEADING1} />
        </DropdownMenuItem>
        <DropdownMenuItem
          className={'flex items-center justify-between' + dropDownActiveClass(blockType === 'h2')}
          onClick={() => formatHeading(editor, blockType, 'h2')}
        >
          <div className="flex items-center justify-start space-x-2">
            <Heading2 className="text-neutral-300" size={15} />
            <span className="text">Heading 2</span>
          </div>
          <ShortCutFormat text={SHORTCUTS.HEADING2} />
        </DropdownMenuItem>
        <DropdownMenuItem
          className={'flex items-center justify-between' + dropDownActiveClass(blockType === 'h3')}
          onClick={() => formatHeading(editor, blockType, 'h3')}
        >
          <div className="flex items-center justify-start space-x-2">
            <Heading3 className="text-neutral-300" size={15} />
            <span className="text">Heading 3</span>
          </div>
          <ShortCutFormat text={SHORTCUTS.HEADING3} />
        </DropdownMenuItem>
        <DropdownMenuItem
          className={
            'flex items-center justify-between' + dropDownActiveClass(blockType === 'bullet')
          }
          onClick={() => formatBulletList(editor, blockType)}
        >
          <div className="flex items-center justify-start space-x-2">
            <List className="text-neutral-300" size={15} />
            <span className="text">Bullet List</span>
          </div>
          <ShortCutFormat text={SHORTCUTS.BULLET_LIST} />
        </DropdownMenuItem>
        <DropdownMenuItem
          className={
            'flex items-center justify-between' + dropDownActiveClass(blockType === 'number')
          }
          onClick={() => formatNumberedList(editor, blockType)}
        >
          <div className="flex items-center justify-start space-x-2">
            <ListOrdered className="text-neutral-300" size={15} />
            <span className="text">Numbered List</span>
          </div>
          <ShortCutFormat text={SHORTCUTS.NUMBERED_LIST} />
        </DropdownMenuItem>
        <DropdownMenuItem
          className={
            'flex items-center justify-between' + dropDownActiveClass(blockType === 'check')
          }
          onClick={() => formatCheckList(editor, blockType)}
        >
          <div className="flex items-center justify-start space-x-2">
            <ListCheck className="text-neutral-300" size={15} />
            <span className="text">Check List</span>
          </div>
          <ShortCutFormat text={SHORTCUTS.CHECK_LIST} />
        </DropdownMenuItem>
        <DropdownMenuItem
          className={
            'flex items-center justify-between' + dropDownActiveClass(blockType === 'quote')
          }
          onClick={() => formatQuote(editor, blockType)}
        >
          <div className="flex items-center justify-start space-x-2">
            <Quote className="text-neutral-300" size={15} />
            <span className="text">Quote</span>
          </div>
          <ShortCutFormat text={SHORTCUTS.QUOTE} />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
