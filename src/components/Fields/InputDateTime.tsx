import { forwardRef, useState } from 'react';
import { FormControl, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { DateTimePickerProps, DateTimePickerRef } from '@/components/ui/datetime-picker';
import { Calendar } from 'react-date-range';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Calendar1Icon } from 'lucide-react';
import { format } from 'date-fns';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { DialogModal } from '../modals';
import { DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

interface IInputDateFieldProps extends DateTimePickerProps {
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  handleDateSelect: (name: string, date: Date | undefined) => void;
  handleTimeChange?: (name: string, type: 'hour' | 'minute' | 'ampm', value: string) => void;
  min?: Date;
  max?: Date;
  timeInterval?: number;
}

const InputDateField = forwardRef<DateTimePickerRef, IInputDateFieldProps>(
  (
    {
      handleDateSelect,
      name,
      label,
      required,
      placeholder,
      handleTimeChange,
      min,
      max,
      timeInterval = 10,
      ...props
    },
    ref
  ) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const onSelect = (date: Date | undefined) => {
      handleDateSelect(name, date);

      if (!props.showTime) {
        setIsModalOpen(false);
      }
    };

    const generateTimeOptions = () => {
      const times = [];
      const totalMinutes = 12 * 60;

      for (let i = 0; i < totalMinutes; i += timeInterval) {
        const hour = Math.floor(i / 60);
        const minute = i % 60;
        const displayHour = hour === 0 ? 12 : hour;
        const timeString = `${displayHour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        times.push({
          value: timeString,
          hour: hour,
          minute: minute
        });
      }

      return times;
    };

    const timeOptions = generateTimeOptions();

    const getCurrentTimeString = () => {
      if (!props.value) return null;

      const currentHour = props.value.getHours();
      const currentMinute = props.value.getMinutes();
      const displayHour =
        currentHour === 0 ? 12 : currentHour > 12 ? currentHour - 12 : currentHour;

      const matchingTime = timeOptions.find((time) => {
        const timeHour = time.hour === 0 ? 12 : time.hour;
        return timeHour === displayHour && time.minute === currentMinute;
      });

      return matchingTime ? matchingTime.value : null;
    };

    const currentTimeString = getCurrentTimeString();

    const handleDoneClick = () => {
      setIsModalOpen(false);
    };

    return (
      <FormItem className="flex w-full flex-col">
        {label && (
          <FormLabel className="flex items-center justify-start space-x-1">
            <p>{label}</p>
            {required && <small className="text-error">*</small>}
          </FormLabel>
        )}

        <FormControl className="w-full">
          <Button
            type="button"
            variant="ghost"
            className={cn(
              'flex h-11 w-full items-center justify-start rounded-lg bg-white text-left font-grotesk font-normal shadow-none ring-1 ring-borderLine hover:bg-white',
              !props.value && 'text-neutral-300'
            )}
            onClick={() => setIsModalOpen(true)}
          >
            <Calendar1Icon size={25} className="text-neutral-300" />
            {props.value ? (
              format(props.value, `MMM-dd-yy ${props.showTime ? 'HH:mm' : ''}`)
            ) : (
              <p className="w-11/12">
                {placeholder ?? `MMM-dd-yy ${props.showTime ? 'HH:mm' : ''}`}
              </p>
            )}
          </Button>
        </FormControl>

        <DialogModal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)}>
          <DialogContent className="max-w-fit">
            <DialogHeader>
              <DialogTitle>{`Select ${props.showTime ? 'Date & Time' : 'Date'}`}</DialogTitle>
            </DialogHeader>
            <div className="w-full">
              <div className="md:flex">
                <Calendar
                  className="w-full"
                  editableDateInputs={true}
                  direction="vertical"
                  color="#FC7901"
                  onChange={onSelect}
                  date={props.value}
                  minDate={min}
                  maxDate={max}
                />
                {props.showTime && (
                  <div className="flex flex-col divide-y md:h-[330px] md:flex-row md:divide-x md:divide-y-0">
                    <ScrollArea className="w-[300px] max-w-fit">
                      <div className="flex space-x-3 p-1 md:flex-col md:space-x-0">
                        {timeOptions.map((time) => (
                          <Button
                            key={time.value}
                            variant={currentTimeString === time.value ? 'default' : 'ghost'}
                            className="p-2 sm:w-full"
                            onClick={() => {
                              handleTimeChange?.(name, 'hour', time.hour.toString());
                              handleTimeChange?.(name, 'minute', time.minute.toString());
                            }}
                          >
                            {time.value}
                          </Button>
                        ))}
                      </div>
                      <ScrollBar orientation="horizontal" className="sm:hidden" />
                    </ScrollArea>
                    <ScrollArea className="">
                      <div className="flex p-2 md:flex-col md:space-y-2">
                        {['AM', 'PM'].map((ampm) => (
                          <Button
                            key={ampm}
                            variant={
                              props.value &&
                              ((ampm === 'AM' && props.value.getHours() < 12) ||
                                (ampm === 'PM' && props.value.getHours() >= 12))
                                ? 'default'
                                : 'ghost'
                            }
                            className="p-2 sm:w-full"
                            onClick={() => handleTimeChange?.(name, 'ampm', ampm)}
                          >
                            {ampm}
                          </Button>
                        ))}
                      </div>
                    </ScrollArea>
                  </div>
                )}
              </div>

              {props.showTime && (
                <div className="flex justify-end border-t px-4 pt-4 md:mt-4">
                  <Button onClick={handleDoneClick} className="px-6">
                    Done
                  </Button>
                </div>
              )}
            </div>
          </DialogContent>
        </DialogModal>

        <FormMessage />
      </FormItem>
    );
  }
);

InputDateField.displayName = 'InputDateField';
export default InputDateField;
