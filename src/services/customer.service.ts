import Customer from "../models/user.model";
import EmailVerifications from "../models/emailVerifications,model";
import { generateToken, hashPassword, sendEmail } from "../utils/index";
import { createEmailVerificationSchema, schemaMailer } from "../schemas/index";
import { CreateJwtSchema, CreateCustomer } from "../types/index";
import { sequelize, env } from "../config/index";

const serviceCreateCustomer = async (newCustomer: CreateCustomer) => {
  const t = await sequelize.transaction();
  try {
    const { email } = newCustomer;
    newCustomer.password = await hashPassword(newCustomer.password);
    const newUSer = await Customer.create(newCustomer, { transaction: t });
    const id = newUSer.get("id") as string;
    const dataToken: CreateJwtSchema = {
      id,
      email,
    };
    const token = generateToken(dataToken);
    const dtoEmailVerification = createEmailVerificationSchema.parse({
      user_id: id,
      token,
      email,
    });
    await EmailVerifications.create(dtoEmailVerification, { transaction: t });
    const dtoMailer = schemaMailer.parse({
      to: newCustomer.email,
      subject: "Hello from Node-Eco",
      html: `
  <p>Mi App</p>
  <a
    href="${env.BACKEND}verify-email?token=${token}"
    style="
      display: inline-block;
      padding: 12px 24px;
      background-color: #23d47c;
      color: #fff;
      text-decoration: none;
      border-radius: 6px;
    "
  >
    Verificar correo
  </a>
`,
    });

    await sendEmail(dtoMailer);
    await t.commit();
  } catch (error) {
    await t.rollback();
    console.log(error);
    throw error;
  }
};

export { serviceCreateCustomer };
