import { z } from "zod";

const schemaMailer = z.object({
  to: z.string().trim().min(1),
  subject: z.string().trim().min(1),
  html: z.string().trim().min(1),
});

export { schemaMailer };
