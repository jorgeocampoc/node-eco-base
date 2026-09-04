import type { z } from "zod";
import { approveEmail } from "../schemas/index";

type ApproveEmail = z.infer<typeof approveEmail>;
export type { ApproveEmail };
