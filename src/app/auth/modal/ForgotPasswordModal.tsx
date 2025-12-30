'use client';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useStore } from '@/stores';
import { AppModals } from '@/stores/Appconfig/appModalTypes';
import { observer } from 'mobx-react-lite';
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from '@/components/ui/dialog';
import { Form, FormField } from '@/components/ui/form';
import InputField from '@/components/Fields/InputField';
import { Button } from '@/components/ui/button';
import { DialogModal } from '@/components/modals';
import { forgotPwdSchema, TForgotPwdSchema } from '../validation';

const ForgotPwdModal = () => {
  const {
    AppConfigStore: { isOpen, toggleModals }
  } = useStore();
  const form = useForm<TForgotPwdSchema>({
    mode: 'onSubmit',
    resolver: zodResolver(forgotPwdSchema),
    reValidateMode: 'onChange'
  });

  const onSubmit: SubmitHandler<TForgotPwdSchema> = async (formData) => {
    console.log(formData);
  };

  return (
    <DialogModal
      isOpen={isOpen.FORGOT_PWD_MODAL}
      closeModal={() => toggleModals({ name: AppModals.FORGOT_PWD_MODAL, open: false })}
    >
      <DialogContent
        onInteractOutside={(event) => event.preventDefault()}
        className="mx-auto w-full max-w-87!"
      >
        <div className="relative flex w-full flex-col gap-4">
          <DialogHeader className="mb-2">
            <DialogTitle>Forgot password</DialogTitle>
            <DialogDescription>
              Password recovery link will be sent to the e-mail you provide.
            </DialogDescription>
          </DialogHeader>

          <Form {...form}>
            <form
              id="forgot-email"
              onSubmit={form.handleSubmit(onSubmit)}
              className="relative flex flex-col justify-between space-y-8 overflow-y-scroll"
            >
              <fieldset className="flex flex-col space-y-6 px-1">
                <FormField
                  name="email"
                  render={({ field }) => (
                    <InputField
                      required
                      label=""
                      placeholder="Enter email address"
                      {...field}
                      type="email"
                    />
                  )}
                />
              </fieldset>
            </form>
          </Form>

          <DialogFooter className="w-full">
            <Button size="lg" type="submit" form="forgot-email">
              Continue
            </Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </DialogModal>
  );
};

export default observer(ForgotPwdModal);
