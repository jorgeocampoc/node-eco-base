import { z } from "zod";

const createEmailVerificationSchema = z.object({
  user_id: z.string().min(3),
  token: z.jwt({ alg: "HS256" }),
  email: z.email().trim().toLowerCase(),
});

const approveEmail= z.object({
  email: z.preprocess((val: string) => val?.trim().toLowerCase(), z.email()),
  token: z.jwt({ alg: "HS256" }),

})

export { createEmailVerificationSchema,approveEmail };
