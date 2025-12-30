'use client';
import { InputHTMLAttributes, forwardRef } from 'react';
import { Plus, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { FormControl, FormItem, FormLabel } from '../ui/form';
import { Input } from '../ui/input';

interface IInputCapsuleCheckProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const InputCapsuleCheck = forwardRef<HTMLInputElement, IInputCapsuleCheckProps>((props, ref) => {
  return (
    <FormItem>
      <FormControl>
        <Input type="checkbox" ref={ref} {...props} className="hidden" />
      </FormControl>
      <FormLabel
        htmlFor={props.id}
        className={cn(
          'font-grotesk flex w-full cursor-pointer items-center gap-1 rounded-lg px-3 py-2 text-xs transition-all duration-200 hover:shadow-md',
          props.checked ? 'bg-black text-white' : 'bg-neutral-200'
        )}
      >
        {props.checked ? (
          <Check className="h-4 w-4 align-middle" />
        ) : (
          <Plus className="h-4 w-4 align-middle" />
        )}
        <p>{props.label}</p>
      </FormLabel>
    </FormItem>
  );
});

InputCapsuleCheck.displayName = 'InputCapsuleCheck';
export default InputCapsuleCheck;
