import { z } from "zod";

const createCustomerSchema = z.object({
  first_name: z.string().trim().min(3).max(50).toLowerCase(),
  last_name: z.string().trim().min(3).max(50).toLowerCase(),
  email: z.preprocess(
    (val: string ) => val?.trim().toLowerCase(),
    z.email()
  ),
  password: z.string().trim().min(6).max(50),
});

export { createCustomerSchema };
