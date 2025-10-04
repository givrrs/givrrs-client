import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator
} from '@/components/ui/dropdown-menu';
import {
  ElementFormatType,
  FORMAT_ELEMENT_COMMAND,
  INDENT_CONTENT_COMMAND,
  LexicalEditor,
  OUTDENT_CONTENT_COMMAND
} from 'lexical';
import { SHORTCUTS } from '../ShortcutsPlugin/shortcuts';
import {
  AlignCenterIcon,
  AlignEndHorizontalIcon,
  AlignEndVertical,
  AlignEndVerticalIcon,
  AlignJustifyIcon,
  AlignLeftIcon,
  AlignRightIcon,
  AlignStartHorizontalIcon,
  AlignStartVertical,
  AlignStartVerticalIcon,
  ChevronDown,
  LucideIcon
} from 'lucide-react';
import ShortCutFormat from './ShortCutFormat';
import { Button } from '@/components/ui/button';

const ELEMENT_FORMAT_OPTIONS: {
  [key in Exclude<ElementFormatType, ''>]: {
    icon: LucideIcon;
    iconRTL: LucideIcon;
    name: string;
  };
} = {
  center: {
    icon: AlignCenterIcon,
    iconRTL: AlignCenterIcon,
    name: 'Center Align'
  },
  right: {
    icon: AlignRightIcon,
    iconRTL: AlignRightIcon,
    name: 'Right Align'
  },
  justify: {
    icon: AlignJustifyIcon,
    iconRTL: AlignJustifyIcon,
    name: 'Justify Align'
  },
  left: {
    icon: AlignLeftIcon,
    iconRTL: AlignLeftIcon,
    name: 'Left Align'
  },
  end: {
    icon: AlignEndVertical,
    iconRTL: AlignEndVertical,
    name: 'End Align'
  },
  start: {
    icon: AlignStartVertical,
    iconRTL: AlignStartVertical,
    name: 'Start Align'
  }
};

export default function ElementFormat({
  editor,
  value,
  isRTL,
  disabled = false
}: {
  editor: LexicalEditor;
  value: ElementFormatType;
  isRTL: boolean;
  disabled: boolean;
}) {
  const formatOption = ELEMENT_FORMAT_OPTIONS[value || 'left'];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger disabled={disabled} asChild>
        <Button variant="ghost" className="text-xs">
          {isRTL ? <formatOption.iconRTL size={16} /> : <formatOption.icon size={16} />}
          {formatOption.name}
          <ChevronDown size={14} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => {
            editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'left');
          }}
          className="flex items-center justify-between"
        >
          <div className="flex items-center justify-start space-x-2">
            <AlignLeftIcon className="text-neutral-300" size={16} />
            <span className="text">Left Align</span>
          </div>
          <ShortCutFormat text={SHORTCUTS.LEFT_ALIGN} />
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'center');
          }}
          className="flex items-center justify-between"
        >
          <div className="flex items-center justify-start space-x-2">
            <AlignCenterIcon className="text-neutral-300" size={16} />
            <span className="text">Center Align</span>
          </div>
          <ShortCutFormat text={SHORTCUTS.CENTER_ALIGN} />
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'right');
          }}
          className="flex items-center justify-between"
        >
          <div className="flex items-center justify-start space-x-2">
            <AlignRightIcon className="text-neutral-300" size={16} />
            <span className="text">Right Align</span>
          </div>
          <ShortCutFormat text={SHORTCUTS.RIGHT_ALIGN} />
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'justify');
          }}
          className="flex items-center justify-between"
        >
          <div className="flex items-center justify-start space-x-2">
            <AlignJustifyIcon className="text-neutral-300" size={16} />
            <span className="text">Justify Align</span>
          </div>
          <ShortCutFormat text={SHORTCUTS.JUSTIFY_ALIGN} />
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'start');
          }}
          className="flex items-center justify-between"
        >
          <div className="flex items-center justify-start space-x-2">
            <AlignStartVerticalIcon className="text-neutral-300" size={16} />
            <span className="text">Start Align</span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'end');
          }}
          className="flex items-center justify-between"
        >
          <div className="flex items-center justify-start space-x-2">
            <AlignEndVerticalIcon className="text-neutral-300" size={16} />
            <span className="text">End Align</span>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
