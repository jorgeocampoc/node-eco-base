import type { z } from "zod";
import { schemaMailer } from "../schemas/index";

type SchemaMailer = z.infer<typeof schemaMailer>;
export type { SchemaMailer };
