import type { z } from "zod";
import { createJwtSchema, verifyJwtSchema } from "../schemas/index";

type CreateJwtSchema = z.infer<typeof createJwtSchema>;
type VerifyJwtSchema = z.infer<typeof verifyJwtSchema>;
export type { CreateJwtSchema, VerifyJwtSchema };
