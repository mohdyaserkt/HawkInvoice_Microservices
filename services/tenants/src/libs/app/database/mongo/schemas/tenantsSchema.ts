import mongoose from "mongoose";
import { ITenant, ITenantDocument, ITenantModel } from "../../../../entities";

const tenantsSchema = new mongoose.Schema(
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
      default:Date.now
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

const tenantModel = mongoose.model<ITenantDocument, ITenantModel>("Tenant", tenantsSchema);

export { tenantModel };
