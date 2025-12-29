'use client';
import next, { Metadata } from 'next';
import ROUTES from '@/constants/routes';
import { Form, FormField } from '@/components/ui/form';
import { SubmitHandler, useForm } from 'react-hook-form';
import { createAccountSchema, TCreateAccountSchema } from '../../validation';
import { zodResolver } from '@hookform/resolvers/zod';
import InputField from '@/components/Fields/InputField';
import { Button } from '@/components/ui/button';
import { Paragraph, SubTitle, Title } from '@/components/text';
import InputPhoneField from '@/components/Fields/InputPhone';
import HyperLink from '@/components/Fields/HyperLink';
import InputSelect from '@/components/Fields/InputSelect';
import { categories, genderOptions } from '@/constants';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import InputCapsuleCheck from '@/components/Fields/InputCapsuleCheck';

export const metadata: Metadata = {
  title: ROUTES.LOGIN.title,
  description: ROUTES.LOGIN.description
};

const SignupView = () => {
  const [nextSection, setNextSection] = useState(1);
  const [seeMore, setSeeMore] = useState(10);
  const form = useForm<TCreateAccountSchema>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    resolver: zodResolver(createAccountSchema)
  });

  const draftSchema = createAccountSchema.pick({
    interests: true
  });

  const handleSaveDraft = () => {
    const values = form.getValues();
    const result = draftSchema.safeParse(values);

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;

      for (const [key, value] of Object.entries(fieldErrors)) {
        if (value?.length) {
          form.setError(key as keyof TCreateAccountSchema, {
            type: 'onChange',
            message: value[0]
          });
        }
      }

      const invalidFields = new Set(Object.keys(fieldErrors));

      (Object.keys(values) as (keyof TCreateAccountSchema)[]).forEach((key) => {
        if (!invalidFields.has(key as string)) {
          form.clearErrors(key);
        }
      });

      return;
    }

    form.clearErrors();
    setNextSection(2);
  };

  const interestsWatch = form.watch('interests') ?? [];

  const onSubmit: SubmitHandler<TCreateAccountSchema> = async (formData) => {
    console.log(formData);
  };

  const toggleInterest = (value: string) => {
    const updated = interestsWatch.includes(value)
      ? interestsWatch.filter((v) => v !== value)
      : interestsWatch.length < 5
        ? [...interestsWatch, value]
        : interestsWatch;

    form.setValue('interests', updated, {
      shouldDirty: true,
      shouldValidate: true
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-6 md:mx-auto md:max-w-md"
      >
        <Title className="font-medium">Become a givrr</Title>

        <fieldset className="flex w-full flex-col gap-2">
          {nextSection === 1 && (
            <div className="flex w-full flex-col gap-6">
              <div>
                <SubTitle>Select your interests</SubTitle>
                <Paragraph>minimum of 3 interests</Paragraph>
              </div>

              <div className="flex w-full flex-wrap gap-2">
                {(categories ?? []).slice(0, seeMore).map((interest, index) => {
                  return (
                    <FormField
                      key={interest.value}
                      name="interest"
                      render={({ field }) => (
                        <InputCapsuleCheck
                          label={interest.label}
                          placeholder=""
                          id={`interest_${index}`}
                          {...field}
                          value={interest.value}
                          onClick={() => toggleInterest(interest.value)}
                          checked={interestsWatch.includes(interest.value)}
                        />
                      )}
                    />
                  );
                })}
              </div>
              {(categories ?? []).length > 10 ? (
                <button
                  className={`w-fit text-sm text-green-600 ${seeMore >= (categories ?? []).length ? 'hidden' : 'block'}`}
                  onClick={() => {
                    setSeeMore((prev) => (prev += 10));
                  }}
                >
                  see more
                </button>
              ) : null}
            </div>
          )}

          {nextSection === 2 && (
            <>
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

              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <FormField
                  name="gender"
                  render={({ field }) => (
                    <div className="md:w-[50%]">
                      <InputSelect
                        {...field}
                        label="Gender"
                        required
                        items={genderOptions}
                        placeholder="Select gender"
                        onValueChange={(value) => {
                          field.onChange(value);
                        }}
                        value={field.value}
                      />
                    </div>
                  )}
                />

                <FormField
                  name="phone_number"
                  render={({ field }) => (
                    <div className="md:w-[50%]">
                      <InputPhoneField
                        required
                        label="Phone number"
                        placeholder="8123456789"
                        defaultCountry="NG"
                        filterStr="NG"
                        {...field}
                      />
                    </div>
                  )}
                />
              </div>

              <FormField
                name="email"
                render={({ field }) => (
                  <InputField
                    {...field}
                    required
                    label="Email"
                    placeholder="theoifeoluwa@gmail.com"
                    type="email"
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
                    {...field}
                    required
                    label="Confirm Password"
                    placeholder=""
                    type="password"
                  />
                )}
              />
            </>
          )}
        </fieldset>

        <div className="flex w-full flex-col gap-3">
          {nextSection === 1 && (
            <Button
              size="lg"
              disabled={interestsWatch.length < 3}
              type="button"
              onClick={handleSaveDraft}
            >
              Continue
              <ArrowRight className="h-5 w-5" />
            </Button>
          )}

          {nextSection === 2 && (
            <>
              <Button size="lg">Register</Button>
              <Button variant="secondary" size="lg" type="button" onClick={() => setNextSection(1)}>
                Back
              </Button>
            </>
          )}

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
