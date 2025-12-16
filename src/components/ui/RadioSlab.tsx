import { RadioGroupItem } from '@radix-ui/react-radio-group';
import { LucideIcon } from 'lucide-react';

export type TRadioOption = { value: string; label: string; disable?: boolean; icon?: LucideIcon };

const RadioSlabItem = ({ option }: { option: TRadioOption }) => {
  return (
    <RadioGroupItem
      key={option.value}
      value={option.value}
      className="ring-border flex w-full items-center justify-center gap-2 rounded-md bg-neutral-100 p-3 ring-[1px] data-[state=checked]:bg-green-100 data-[state=checked]:ring-2 data-[state=checked]:ring-green-600"
    >
      {option?.icon && <option.icon className="size-5" />}
      <span className="tracking-tight">{option.label}</span>
    </RadioGroupItem>
  );
};

export default RadioSlabItem;
