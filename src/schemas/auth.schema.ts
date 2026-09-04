import { z } from "zod";

const authSchema = z.object({
  email: z.preprocess((val: string) => val?.trim().toLowerCase(), z.email()),
  password: z.string().trim().min(6).max(50),
});

export { authSchema };
