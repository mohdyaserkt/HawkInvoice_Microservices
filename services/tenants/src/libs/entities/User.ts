import mongoose, { Document } from "mongoose";

export interface IUserDocument extends Document {
  email: string;
  password: string;
  isGoogle?: boolean;
  status?: boolean;
  verified?: boolean;
  profile?: string;
}

export interface IUser {
  id?:string;
  email: string;
  password: string;
  isGoogle?: boolean;
  status?: boolean;
  verified?: boolean;
  profile?: string;
}

export interface IVerifyUser {
  email: string;
  id:string;
  verifyToken: string;
}

export class userRegistrationData {
  email: string;
  password: string;
  isGoogle?: boolean;
  status?: boolean;
  verified?: boolean;
  profile?: string;

  constructor({ email, password, isGoogle, status, verified, profile }: IUser) {
    this.email = email;
    this.password = password;
    this.isGoogle = isGoogle;
    this.status = status;
    this.verified = verified;
    this.profile = profile;
  }
}

export class userLoginData {
  email: string;
  password: string;

  constructor({ email, password }: IUser) {
    this.email = email;
    this.password = password;
  }
}

export interface IUserModel extends mongoose.Model<IUserDocument> {
  build(attrs: IUser): IUserDocument;
}
