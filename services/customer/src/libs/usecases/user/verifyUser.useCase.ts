import { IVerifyUser } from "../../entities";
import { DepenteniciesData } from "../../entities/interfaces";
import { AES, enc } from "crypto-js";

export const verifyUser_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { userRepository,tenantRepository },
  } = dependencies;

  if (!userRepository)
    throw new Error("The user repository should be dependencie");

  const execute =async (verificationData: string,comapanyName:string) => {
    console.log("jalsk");
    console.log(verificationData);

    const secretKey = process.env.CRYPTO_KEY || "";
    const bytes = AES.decrypt(verificationData, secretKey);
    const { email, id, verifyToken }: IVerifyUser = JSON.parse(
      bytes.toString(enc.Utf8)
    );
    console.log(email,id,verifyToken);
    
    const model = await tenantRepository.getCompanySchema(comapanyName,"User")
    return userRepository.verifyEmail({ id, verifyToken, email },model);
  };
  return {
    execute,
  };
};
