import { IUser, IVerifyUser } from "../../entities";
import { DepenteniciesData } from "../../entities/interfaces";
import { sentMail } from "../../utils/nodemailer";
import { AES, enc } from "crypto-js";

export const userVerificationMail_UseCase = (
  dependencies: DepenteniciesData
) => {
  const {
    repository: { userRepository },
  } = dependencies;
  if (!userRepository)
    throw new Error("The user repository should be dependencie");

  const execute = async (id: string) => {
    const userResult = await userRepository.findById(id);

    if (userResult) {
      const secretKey = process.env.CRYPTO_KEY || "";
      const { email, password ,id} = userResult as IUser;

      const data = { email: email, id: id,verifyToken:password };

      const encryptedData = AES.encrypt(
        JSON.stringify(data),
        secretKey
      ).toString();

      const subject = "Confirm Your Email";
      const verificationLink = `http://hawk.invoice.com/verify-email/${encryptedData}`;

      return sentMail(email, subject, verificationLink);
    } else {
      throw new Error("The user was not found");
    }
  };
  return {
    execute,
  };
};
