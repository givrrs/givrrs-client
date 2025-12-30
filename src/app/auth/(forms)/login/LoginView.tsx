'use client';
import { Metadata } from 'next';
import ROUTES from '@/constants/routes';
import { Form, FormField } from '@/components/ui/form';
import { SubmitHandler, useForm } from 'react-hook-form';
import { loginSchema, TLoginSchema } from '../../validation';
import { zodResolver } from '@hookform/resolvers/zod';
import InputField from '@/components/Fields/InputField';
import { Button } from '@/components/ui/button';
import HyperLink from '@/components/Fields/HyperLink';
import { Title } from '@/components/text';
import { AppModals } from '@/stores/Appconfig/appModalTypes';
import { useStore } from '@/stores';
import { observer } from 'mobx-react-lite';

export const metadata: Metadata = {
  title: ROUTES.LOGIN.title,
  description: ROUTES.LOGIN.description
};

const LoginView = () => {
  const {
    AppConfigStore: { toggleModals }
  } = useStore();

  const form = useForm<TLoginSchema>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    resolver: zodResolver(loginSchema)
  });

  const onSubmit: SubmitHandler<TLoginSchema> = async (formData) => {
    console.log(formData);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-6 md:mx-auto md:max-w-md"
      >
        <Title className="font-medium">Welcome back!</Title>

        <fieldset className="flex w-full flex-col gap-3">
          <FormField
            name="email"
            render={({ field }) => (
              <InputField
                required
                label="Email"
                placeholder="theoifeoluwa@gmail.com"
                type="email"
                {...field}
              />
            )}
          />

          <div className="w-full">
            <FormField
              name="password"
              render={({ field }) => (
                <InputField required label="Password" placeholder="" type="password" {...field} />
              )}
            />

            <div className="flex w-full justify-between">
              <div></div>
              <HyperLink
                info="forgot Password?"
                href=""
                hrefText=" Click here"
                onClick={() => toggleModals({ name: AppModals.FORGOT_PWD_MODAL, open: true })}
              />
            </div>
          </div>
        </fieldset>

        <div className="flex w-full flex-col gap-3">
          <Button size="lg">Login</Button>
          <HyperLink
            href={ROUTES.SIGNUP.path}
            info="Do not have an account ?"
            hrefText=" Create account"
          />
        </div>
      </form>
    </Form>
  );
};

export default observer(LoginView);
