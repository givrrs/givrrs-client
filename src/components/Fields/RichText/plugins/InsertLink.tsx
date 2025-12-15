import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import { PopoverClose } from '@radix-ui/react-popover';
import { LinkIcon, X } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RichTextlinkSchema, TRichTextlinkSchema } from '../validation';
import { Form, FormField } from '@/components/ui/form';
import InputField from '../../InputField';
import { Button } from '@/components/ui/button';

interface IInsertLink {
  handlerFn: (text: string, link: string) => void;
}

const InsertLink = ({ handlerFn }: IInsertLink) => {
  const form = useForm<TRichTextlinkSchema>({
    resolver: zodResolver(RichTextlinkSchema)
  });

  const onSubmit = (formData: TRichTextlinkSchema) => {};

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          onClick={() => {}}
          className="toolbar-item spaced"
          aria-label="Insert Link"
        >
          <LinkIcon size={16} />
        </button>
      </PopoverTrigger>

      <PopoverContent className="relative w-80 min-w-[300px] rounded-xl bg-white">
        <div className="absolute top-0 left-0 flex w-full items-center justify-between border-b px-4 py-2">
          <small className="font-grotesk font-medium">Add link</small>
          <PopoverClose>
            <div className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-neutral-50">
              <X size={15} />
            </div>
          </PopoverClose>
        </div>

        <Form {...form}>
          <form
            id="insert_link"
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col space-y-3 py-12"
          >
            <FormField
              name="text"
              render={({ field }) => (
                <InputField label="" placeholder="enter text" {...field} required className="h-8" />
              )}
            />

            <FormField
              name="url"
              render={({ field }) => (
                <InputField label="" placeholder="enter url" {...field} required className="h-8" />
              )}
            />
          </form>
        </Form>

        <div className="absolute bottom-0 left-0 flex w-full border-t px-4 py-2">
          <div className="flex w-full items-center justify-end space-x-2">
            <div></div>
            <PopoverClose>
              <Button
                type="button"
                onClick={() => {
                  handlerFn(form.getValues('text'), form.getValues('url'));
                  form.reset();
                }}
                size="sm"
              >
                Apply filter
              </Button>
            </PopoverClose>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default InsertLink;
