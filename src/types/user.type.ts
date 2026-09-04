import type { z } from "zod";
import { userSchema } from "../schemas/index";

type UserSchema = z.infer<typeof userSchema>;
export type { UserSchema };

userSchema;
