'use client';
import { Metadata } from 'next';
import ROUTES from '@/constants/routes';
import { Form, FormField } from '@/components/ui/form';
import { SubmitHandler, useForm } from 'react-hook-form';
import { createAccountSchema, TCreateAccountSchema } from '../../validation';
import { zodResolver } from '@hookform/resolvers/zod';
import InputField from '@/components/Fields/InputField';
import { Button } from '@/components/ui/button';
import { Title } from '@/components/text';
import InputPhoneField from '@/components/Fields/InputPhone';
import HyperLink from '@/components/Fields/HyperLink';

export const metadata: Metadata = {
  title: ROUTES.LOGIN.title,
  description: ROUTES.LOGIN.description
};

const SignupView = () => {
  const form = useForm<TCreateAccountSchema>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    resolver: zodResolver(createAccountSchema)
  });

  const onSubmit: SubmitHandler<TCreateAccountSchema> = async (formData) => {
    console.log(formData);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-6 md:mx-auto md:max-w-md"
      >
        <Title className="font-medium">Create account</Title>

        <fieldset className="flex w-full flex-col gap-3">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <FormField
              name="first_name"
              render={({ field }) => (
                <div className="md:w-[50%]">
                  <InputField
                    required
                    id="fname"
                    label="First Name"
                    placeholder="Theo"
                    {...field}
                  />
                </div>
              )}
            />

            <FormField
              name="last_name"
              render={({ field }) => (
                <div className="md:w-[50%]">
                  <InputField
                    required
                    id="lname"
                    label="Last Name"
                    placeholder="Ifeoluwa"
                    {...field}
                  />
                </div>
              )}
            />
          </div>

          <FormField
            name="phone_number"
            render={({ field }) => (
              <InputPhoneField
                required
                label="Phone number"
                placeholder="8123456789"
                defaultCountry="NG"
                filterStr="NG"
                {...field}
              />
            )}
          />

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

          <FormField
            name="password"
            render={({ field }) => (
              <InputField required label="Password" placeholder="" type="password" {...field} />
            )}
          />

          <FormField
            name="confirm_password"
            render={({ field }) => (
              <InputField
                required
                label="Confirm Password"
                placeholder=""
                type="password"
                {...field}
              />
            )}
          />
        </fieldset>

        <div className="flex w-full flex-col gap-3">
          <Button size="lg">Register</Button>
          <HyperLink
            href={ROUTES.LOGIN.path}
            info="Already have an account ?"
            hrefText=" Login now"
          />
        </div>
      </form>
    </Form>
  );
};

export default SignupView;
