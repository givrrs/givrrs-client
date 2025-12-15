import { FormControl, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { MultiSelect, MultiSelectProps, MultiSelectRef } from '@/components/ui/multi-select';
import { forwardRef } from 'react';

interface IInputMultiSelectProps extends MultiSelectProps {
  label: string;
  isLoading: boolean;
  required?: boolean;
}

const InputMultiSelect = forwardRef<MultiSelectRef, IInputMultiSelectProps>(
  ({ label, required, ...props }, ref) => {
    return (
      <FormItem className="w-full">
        <FormLabel className="flex items-center justify-start space-x-1">
          <p>{label}</p>
          {required && <small className="text-error">*</small>}
        </FormLabel>
        <FormControl className="w-full">
          <MultiSelect {...{ ref }} {...props} />
        </FormControl>
        <FormMessage />
      </FormItem>
    );
  }
);

InputMultiSelect.displayName = 'InputMultiSelect';
export default InputMultiSelect;
