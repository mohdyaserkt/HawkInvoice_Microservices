import mongoose from "mongoose";
import { IOrganizationDocument, IOrganizationModel } from "../../../../entities/organization";

 const organizationSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    businessName: {
      type: String,

      required: true,
    },
    typeOfbusiness: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: Number,
    },
    NoOfemployes: {
      type: String,
    },
    annualRevenue: {
      type: String,
    },
    createdDate: {
      type: Date,
      default: Date.now,
    },
    address: {
      type: Object,
    },

    profile: {
      type: String,
      default:
        "https://cdn.create.vista.com/api/media/small/356209164/stock-vector-user-avatar-illustration-anonymous-sign",
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



export { organizationSchema };
