'use client';
import InputField from '@/components/Fields/InputField';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, TrendingUp, Users } from 'lucide-react';
import { RadioGroup } from '@radix-ui/react-radio-group';
import RadioSlabItem, { TRadioOption } from '@/components/ui/RadioSlab';

export const waitlistSchema = z.object({
  full_name: z.string({ error: 'Full name is required.' }),
  email: z.email({ error: 'Email is required' }),
  interest: z.string({ error: 'Select your interest' })
});

type TWaitlistSchema = z.infer<typeof waitlistSchema>;

const options: Array<TRadioOption> = [
  {
    value: 'fundraising',
    label: 'Fundraising',
    icon: TrendingUp
  },
  {
    value: 'donating',
    label: 'Donating',
    icon: Users
  }
];

const WailtlistForm = () => {
  const form = useForm<TWaitlistSchema>({
    resolver: zodResolver(waitlistSchema),
    mode: 'onChange',
    reValidateMode: 'onSubmit'
  });

  const onSubmit = async (formData: TWaitlistSchema) => {
    console.log(formData);
  };

  return (
    <div className="w-full rounded-lg bg-white p-5 md:p-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-8">
          <fieldset className="flex flex-col gap-4">
            <FormField
              name="full_name"
              render={({ field }) => (
                <InputField
                  label="Full name"
                  placeholder="Yahaya Ifeoluwa Nonso"
                  required
                  {...field}
                />
              )}
            />

            <FormField
              name="email"
              render={({ field }) => (
                <InputField
                  label="Email Address"
                  placeholder="ifeoluwa@gmail.com"
                  required
                  {...field}
                />
              )}
            />

            <FormField
              name="interest"
              render={({ field }) => (
                <FormItem className="gap-2">
                  <FormLabel>I&apos;m interested in</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="grid w-full grid-cols-2 gap-3"
                    >
                      {options.map((option) => (
                        <FormItem
                          key={option.value}
                          className="flex items-center space-y-0 space-x-3"
                        >
                          <FormControl>
                            <RadioSlabItem option={option} />
                          </FormControl>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                </FormItem>
              )}
            />
          </fieldset>

          <Button size="lg">
            Join the Waitlist
            <ArrowUpRight className="size-6" />
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default WailtlistForm;
