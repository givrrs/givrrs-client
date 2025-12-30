'use client';
import { forwardRef, type ReactNode } from 'react';
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { PhoneInput, PhoneInputProps } from '../ui/input-phonenumber';

interface IInputProps extends PhoneInputProps {
  label: string;
  description?: ReactNode;
  required?: boolean;
}

const InputPhoneField = forwardRef<HTMLInputElement, IInputProps>(
  ({ description, label, ...props }, ref) => {
    return (
      <FormItem className="w-full">
        {label && (
          <FormLabel className="flex items-center justify-start">
            <p>
              {label} {props.required && <small className="text-red-600">*</small>}
            </p>
          </FormLabel>
        )}
        <FormControl className="w-full">
          <PhoneInput {...{ ref }} {...props} />
        </FormControl>
        <FormDescription>{description}</FormDescription>
        <FormMessage />
      </FormItem>
    );
  }
);

InputPhoneField.displayName = 'InputPhoneField';

export default InputPhoneField;
