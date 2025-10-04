import { forwardRef, type ReactNode } from 'react';
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { OTPInput } from 'input-otp';

interface TInputProps {
  label: string;
  description?: ReactNode;
  required?: boolean;
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  maxLength?: number;
  className?: string;
  containerClassName?: string;
  textAlign?: 'left' | 'center' | 'right';
  onComplete?: (value: string) => void;
  pushPasswordManagerStrategy?: 'increase-width' | 'none';
  pasteTransformer?: (pasted: string) => string;
  noScriptCSSFallback?: string | null;
}

const InputOTPField = forwardRef<React.ElementRef<typeof OTPInput>, TInputProps>(
  ({ description, label, required, maxLength = 6, ...props }, ref) => {
    return (
      <FormItem className="w-full">
        {label && (
          <FormLabel className="flex items-center justify-start space-x-1">
            <p>{label}</p>
            {required && <small className="text-error">*</small>}
          </FormLabel>
        )}
        <FormControl className="w-full">
          <div className="mx-auto w-full max-w-fit">
            <InputOTP ref={ref} maxLength={maxLength} {...props}>
              <InputOTPGroup className="space-x-2">
                <InputOTPSlot index={0} className="rounded-md border-l" />
                <InputOTPSlot index={1} className="rounded-md border-l" />
                <InputOTPSlot index={2} className="rounded-md border-l" />
                <InputOTPSlot index={3} className="rounded-md border-l" />
                <InputOTPSlot index={4} className="rounded-md border-l" />
                <InputOTPSlot index={5} className="rounded-md border-l" />
              </InputOTPGroup>
            </InputOTP>
          </div>
        </FormControl>
        <FormDescription className="mx-auto w-full max-w-fit">{description}</FormDescription>
        <FormMessage className="mx-auto w-full max-w-fit" />
      </FormItem>
    );
  }
);

InputOTPField.displayName = 'InputOTPField';
export default InputOTPField;
