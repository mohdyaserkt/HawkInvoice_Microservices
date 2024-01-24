import mongoose from "mongoose";
import { IUser, IUserDocument, IUserModel } from "../../../../entities";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isGoogle: {
      type: Boolean,
      default: false,
    },
    status: {
      type: Boolean,
      default: true,
    },
    verified: {
      type: Boolean,
      default: true,
    },
    profile: {
      type: String,
      default:
        'https://cdn.create.vista.com/api/media/small/356209164/stock-vector-user-avatar-illustration-anonymous-sign',
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v; // Optionally remove the version key as well
      },
    },
  }
);



const userModel = mongoose.model<IUserDocument, IUserModel>("User", userSchema);

export { userModel };
