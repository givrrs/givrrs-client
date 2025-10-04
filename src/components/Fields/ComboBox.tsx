'use client';
import { forwardRef, useState } from 'react';
import { BoxIcon, ChevronDown, CircleCheck } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from '@/components/ui/command';
import {
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage
} from '@/components/ui/form';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

interface IInputComboProps extends React.HTMLAttributes<HTMLInputElement> {
  isLoading: boolean;
  data: Array<TOption>;
  placeholder: string;
  empty: string;
  description?: string;
  value: string;
  label: string;
  setValue: (arg: string) => void;
  required?: boolean;
}

const InputCombo = forwardRef<HTMLInputElement, IInputComboProps>(
  ({ placeholder, data, required, empty, description, label, value, setValue }, ref) => {
    const [open, setOpen] = useState(false);
    return (
      <FormItem className="flex w-full flex-col">
        <FormLabel className="flex w-full items-center justify-start space-x-1">
          <p>{label}</p>
          {required && <small className="text-error">*</small>}
        </FormLabel>
        <DropdownMenu open={open} onOpenChange={setOpen}>
          <DropdownMenuTrigger asChild>
            <FormControl>
              <button
                role="combobox"
                aria-expanded={open}
                className={`flex h-11 w-full items-center justify-between rounded-md bg-white px-2 font-grotesk text-sm font-normal ring-1 ring-borderLine hover:!bg-none ${!value && 'text-neutral-300'}`}
              >
                {value ? data.find((datum) => datum.value === value)?.label : placeholder}
                <ChevronDown size={16} className="text-neutral-200" />
              </button>
            </FormControl>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[var(--radix-dropdown-menu-trigger-width)] min-w-60">
            <Command className="w-full">
              <CommandInput placeholder={placeholder} className="h-11 w-full" />
              <CommandList className="w-full">
                <CommandEmpty className="flex h-24 w-full flex-col items-center justify-center space-y-2">
                  <BoxIcon size={40} className="text-primary-500" />
                  <small className="text-neutral-400">{empty}</small>
                </CommandEmpty>
                <CommandGroup className="w-full">
                  {data.map((datum) => (
                    <CommandItem
                      value={datum.label}
                      key={datum.value}
                      onSelect={() => {
                        setValue(datum.value);
                        setOpen(false);
                      }}
                    >
                      {datum.label}
                      <CircleCheck
                        className={cn(
                          'ml-auto',
                          datum.value === value ? 'text-primary-500 opacity-100' : 'opacity-0'
                        )}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </DropdownMenuContent>
        </DropdownMenu>
        <FormDescription>{description}</FormDescription>
        <FormMessage />
      </FormItem>
    );
  }
);

InputCombo.displayName = 'InputCombo';
export default InputCombo;
