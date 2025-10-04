import { FormControl, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import MultipleSelector, {
  MultipleSelectorProps,
  MultipleSelectorRef
} from '@/components/ui/multi-select';
import { forwardRef } from 'react';

interface IInputMultiSelectProps extends MultipleSelectorProps {
  label: string;
  isLoading: boolean;
  required?: boolean;
}

const InputMultiSelect = forwardRef<MultipleSelectorRef, IInputMultiSelectProps>(
  ({ label, required, ...props }, ref) => {
    return (
      <FormItem className="w-full">
        <FormLabel className="flex items-center justify-start space-x-1">
          <p>{label}</p>
          {required && <small className="text-error">*</small>}
        </FormLabel>
        <FormControl className="w-full">
          <MultipleSelector
            {...{ ref }}
            {...props}
            loadingIndicator={<p className="flex w-full items-center justify-center">loading</p>}
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    );
  }
);

InputMultiSelect.displayName = 'InputMultiSelect';
export default InputMultiSelect;
