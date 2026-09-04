import type { z } from "zod";
import { authSchema } from "../schemas/index";

type AuthSchema = z.infer<typeof authSchema>;
export type { AuthSchema };
