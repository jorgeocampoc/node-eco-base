import { z } from "zod";
import { Roles } from "../enum";

const userSchema = z.object({
  id: z.uuid({ version: "v1" }),
  email: z.preprocess((val: string) => val?.trim().toLowerCase(), z.email()),
  first_name: z.string().trim().min(3).max(50).toLowerCase(),
  password: z.string(),
  last_name: z.string().trim().min(3).max(50).toLowerCase(),
  is_active: z.boolean(),
  verification_email: z.boolean(),
  role: z.enum([...Object.values(Roles)]),
});

export { userSchema };
