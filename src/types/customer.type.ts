import type { z } from "zod";
import { createCustomerSchema } from "../schemas/index";

type CreateCustomer = z.infer<typeof createCustomerSchema>;
export type { CreateCustomer };
