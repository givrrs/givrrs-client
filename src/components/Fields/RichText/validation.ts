import { z } from 'zod';

export const RichTextlinkSchema = z.object({
  text: z.string({ error: 'Link text is required.' }),
  url: z.string({ error: 'Link text is required.' }).url('Invalid link.')
});

export type TRichTextlinkSchema = z.infer<typeof RichTextlinkSchema>;
