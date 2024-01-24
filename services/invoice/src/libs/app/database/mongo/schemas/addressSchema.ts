import mongoose from "mongoose";

const addressSchema = new mongoose.Schema(
  {
    customerId: {
      type: String,
      required: true,
    },
    billingAddress: {
      type: Object,
      required: true,
    },
    shippingAddress: {
      type:  Object,
      required: true,
    },
    createdDate: {
      type: Date,
      default: Date.now,
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

export { addressSchema };
