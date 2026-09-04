import { type Request, type Response } from "express";
import { serviceGetAllCustomers } from "../services";
import { ErrorMessage } from "../enum";

const getAllByRole = async (req: Request, res: Response) => {
  try {
    const { role } = req.params;
    console.log(role);

    const results = await serviceGetAllCustomers();
    return res.status(200).json({ results });
  } catch (error) {
    return res.status(409).json({
      error: ErrorMessage.INTERNAL_SERVER_ERROR,
    });
  }
};

const activeDisableAccount = async (req: Request, res: Response) => {
  try {

  } catch (error) {
    return res.status(409).json({
      error: ErrorMessage.INTERNAL_SERVER_ERROR,
    });
  }
};

export { getAllByRole,activeDisableAccount };
