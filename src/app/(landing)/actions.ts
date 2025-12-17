'use server';

import { TWaitlistSchema } from './WailtlistForm';

export async function addToWaitlist(_: any, formData: TWaitlistSchema) {
  const url = process.env.CORE_API_URL;
  const response = await fetch(`${url}waitlist`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  });

  return { success: response.ok };
}
