'use client';
import { forwardRef, ReactNode, useState } from 'react';
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';

import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import { LinkPlugin } from '@lexical/react/LexicalLinkPlugin';
import { AutoLinkPlugin } from '@lexical/react/LexicalAutoLinkPlugin';

import ToolbarPlugin from './plugins/ToolbarPlugin';
import MyOnChangePlugin from './plugins/MyOnChangePlugin';
import InitializeContentPlugin from './plugins/InitialContentPlugin';
import { editorConfig } from './utils/config';
import { MATCHERS, validateUrl } from './utils/url';
import { ListPlugin } from '@lexical/react/LexicalListPlugin';
import { CheckListPlugin } from '@lexical/react/LexicalCheckListPlugin';
import EmojiPickerPlugin from './plugins/EmojisPickerPlugin';
import EmojisPlugin from './plugins/EmojisPlugin';
import MaxLengthPlugin from './plugins/MaxLengthPlugin';
import { ToolbarContext } from './plugins/ToolbarPlugin/ToolbarContext';

interface RichTextFieldProps {
  label: string;
  description?: ReactNode;
  required?: boolean;
  placeholder: string;
  maxLength?: number;
  value?: string;
  onChange?: (html: string) => void;
}

const RichTextField = forwardRef<HTMLDivElement, RichTextFieldProps>(
  ({ label, value, description, maxLength, required, placeholder, onChange }, _ref) => {
    const [charCount, setCharCount] = useState(0);
    return (
      <FormItem>
        <div className="w-full overflow-clip rounded-xl bg-neutral-50">
          <FormControl>
            <LexicalComposer initialConfig={editorConfig}>
              <ToolbarContext>
                <div className="relative w-full overflow-clip leading-5 font-normal text-black">
                  <FormLabel className="flex items-center justify-start space-x-2 bg-neutral-100 p-4">
                    <p>{label}</p>
                    {required && <small className="text-error p-1">*</small>}
                  </FormLabel>
                  <div className="sticky top-0 left-0 z-10 w-full">
                    <ToolbarPlugin />
                  </div>
                  <div className="relative w-full rounded-md p-2">
                    <RichTextPlugin
                      contentEditable={
                        <ContentEditable
                          className="relative min-h-40 w-full resize-none text-sm caret-black outline-none"
                          aria-placeholder={placeholder}
                          placeholder={
                            <div className="text-typeGray pointer-events-none absolute top-2 left-2 overflow-hidden text-xs select-none">
                              {placeholder}
                            </div>
                          }
                        />
                      }
                      ErrorBoundary={LexicalErrorBoundary}
                    />
                    <InitializeContentPlugin htmlContent={value} />
                    <EmojiPickerPlugin />
                    <EmojisPlugin />
                    <HistoryPlugin />
                    <AutoFocusPlugin />
                    <LinkPlugin validateUrl={validateUrl} />
                    <AutoLinkPlugin matchers={MATCHERS} />
                    <ListPlugin />
                    <CheckListPlugin />
                    {maxLength && <MaxLengthPlugin maxLength={maxLength} />}
                    {onChange && (
                      <MyOnChangePlugin onChange={onChange} onCharCountChange={setCharCount} />
                    )}
                  </div>
                </div>
              </ToolbarContext>
            </LexicalComposer>
          </FormControl>
        </div>

        <div className="flex w-full items-center justify-between">
          <FormMessage />
          <FormDescription>
            {description}
            {maxLength && (
              <p className="text-muted-foreground text-right text-sm">
                {charCount}/{maxLength}
              </p>
            )}
          </FormDescription>
        </div>
      </FormItem>
    );
  }
);

RichTextField.displayName = 'RichTextField';
export default RichTextField;
