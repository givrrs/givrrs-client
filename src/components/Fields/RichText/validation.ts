import { z } from 'zod';

export const RichTextlinkSchema = z.object({
  text: z.string({ required_error: 'Link text is required.' }),
  url: z.string({ required_error: 'Link text is required.' }).url('Invalid link.')
});

export type TRichTextlinkSchema = z.infer<typeof RichTextlinkSchema>;
