import { IUser, IVerifyUser } from "../../../entities";
import { schemas } from "../../database/mongo";
import bcrypt from "bcrypt";

const { userModel } = schemas;

export const userRepository = {
  findByEmail: async (email: string) => {
    const user = await userModel.findOne({ email });
    return user ? user.toObject() : null;
  },

  findById: async (id: string) => {
    const user = await userModel.findById(id);
    return user ? user : null;
  },

  createUser: async (user: IUser) => {
    const createdUser = await userModel.create(user);
    const createdUsers: any = await userModel.findOne({ email: user.email });

    return createdUsers;
  },

  checkPassword: async (userId: string, password: string) => {
    const user = await userModel.findById(userId);
    if (user) {
      const status = await bcrypt.compare(password, user.password);
      return status;
    }
    return false;
  },

  updatePasswordByEmail: async (email: string, newPass: string) => {
    const password = await bcrypt.hash(newPass, 10);
    const update = await userModel.updateOne({ email }, { $set: { password } });
    return update;
  },

  verifyEmail: async ({ id, verifyToken, email }: IVerifyUser) => {
    console.log("dsfd");

    console.log(id);

    const user = await userModel.findById(id);
    if (!user) return false;
    else if (user.password == verifyToken) {
      await userModel.findByIdAndUpdate(id, { $set: { verified: true } });
      return true;
    } else {
      return false;
    }
  },

  logInUser: async (user: IUser) => {
    const loginedUser: any = await userModel.findOne({ email: user.email });

    if (loginedUser) {
      const passwordVerify = await bcrypt.compare(
        user.password,
        loginedUser?.password
      );

      if (passwordVerify) {
        if (loginedUser.verified) {
          console.log(" login success");
          return loginedUser;
        }
        console.log("notVerified");
        return "notverified";
      } else {
        console.log("incorrect password");
        return "password";
      }
    }
    console.log("user not exits");
    return "email";
  },
};
