'use client';
import InputField from '@/components/Fields/InputField';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, CheckCircle, TrendingUp, Users } from 'lucide-react';
import { RadioGroup } from '@radix-ui/react-radio-group';
import RadioSlabItem, { TRadioOption } from '@/components/ui/RadioSlab';
import { startTransition, useActionState, useEffect, useEffectEvent, useState } from 'react';
import { addToWaitlist } from './actions';
import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog';
import { DialogTitle } from '@radix-ui/react-dialog';

export const waitlistSchema = z.object({
  full_name: z.string({ error: 'Full name is required.' }),
  email: z.email({ error: 'Email is required' }),
  interest: z.string({ error: 'Select your interest' })
});

export type TWaitlistSchema = z.infer<typeof waitlistSchema>;

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
  const [open, setOpen] = useState(false);
  const [state, formAction, isPending] = useActionState<{ success: boolean }, TWaitlistSchema>(
    addToWaitlist,
    { success: false }
  );

  const form = useForm<TWaitlistSchema>({
    defaultValues: {
      full_name: '',
      email: '',
      interest: ''
    },
    resolver: zodResolver(waitlistSchema),
    mode: 'onChange'
  });

  const onSubmit = (data: TWaitlistSchema) => {
    startTransition(() => {
      formAction(data);
    });
  };

  const handleSetOpen = useEffectEvent((open: boolean) => {
    setOpen(open);
  });

  useEffect(() => {
    if (state) {
      handleSetOpen(Boolean(state?.success));
      form.reset({
        full_name: '',
        email: '',
        interest: ''
      });
    }
  }, [state]);

  return (
    <div className="w-full rounded-lg bg-white p-5 md:p-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-8">
          <fieldset className="flex flex-col gap-4" disabled={isPending}>
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
                <FormItem>
                  <FormLabel>I&apos;m interested in</FormLabel>
                  <FormControl>
                    <RadioGroup onValueChange={field.onChange} className="grid grid-cols-2 gap-3">
                      {options.map((option) => (
                        <RadioSlabItem key={option.value} option={option} />
                      ))}
                    </RadioGroup>
                  </FormControl>
                </FormItem>
              )}
            />
          </fieldset>

          <Button size="lg" disabled={isPending}>
            {isPending ? 'Joining...' : 'Join the Waitlist'}
            <ArrowUpRight className="size-6" />
          </Button>

          <Dialog open={open} onOpenChange={() => setOpen(false)}>
            <DialogContent showCloseButton={false}>
              <DialogHeader>
                <DialogTitle></DialogTitle>
              </DialogHeader>
              <div className="mx-auto flex w-full max-w-107.5 flex-col space-y-6">
                <div className="flex w-full items-center justify-center">
                  <CheckCircle size={60} className="text-green-500" />
                </div>
                <div className="flex flex-col gap-4">
                  <h2 className="text-center text-3xl font-semibold md:text-4xl">
                    You&apos;re in!
                  </h2>

                  <p className="text-center font-medium text-neutral-600">
                    Thanks for joining the waitlist for <strong>givrrs</strong>. We&apos;ll let you
                    know as soon as it&apos;s ready for you.
                  </p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </form>
      </Form>
    </div>
  );
};

export default WailtlistForm;
