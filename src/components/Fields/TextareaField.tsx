'use client';
import { forwardRef, type ReactNode } from 'react';
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';

interface IInputProps extends React.ComponentProps<'textarea'> {
  label: string;
  description?: ReactNode;
}

const TextareaField = forwardRef<HTMLTextAreaElement, IInputProps>(
  ({ description, label, ...props }, ref) => {
    return (
      <FormItem className="w-full">
        {label && (
          <FormLabel className="flex items-center justify-start space-x-1">
            <p>{label}</p>
            {props.required && <small className="text-error">*</small>}
          </FormLabel>
        )}
        <FormControl>
          <Textarea {...{ ref }} {...props} />
        </FormControl>
        <FormDescription>{description}</FormDescription>
        <FormMessage />
      </FormItem>
    );
  }
);

TextareaField.displayName = 'TextareaField';

export default TextareaField;
