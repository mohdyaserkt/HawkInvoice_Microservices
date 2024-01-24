import mongoose from "mongoose";

const invoiceSchema = new mongoose.Schema(
  {
    customerName: {
      type: String,
      required: true,
    },
    customerId: {
      type: String,
      required: true,
    },
    customerEmail: {
      type: String,
      required: true,
    },
    invoiceNumber: {
      type: String,
      required: true,
    },
    orderNumber: {
      type: String,
    },

    invoiceDate: {
      type: Date,
      default: Date.now,
      required: true,
    },
    dueDate: {
      type: Date,
      required: true,
    },
    salesPerson: {
      type: String,
    },
    subject: {
      type: String,
    },
    itemDetails: {
      type: Array,
      required: true,
    },
    subTotal: {
      type: Number,
      required: true,
    },
    discout: {
      type: Number,
      default:0
    },
    Adjustment: {
      type: Object,
    },
    Total: {
      type: Number,
      required: true,
    },
    customerNotes: {
      type: String,
    },
    termsAndConditions: {
      type: String,
    },
    status: {
      type: String,
      default: "pending",
    },
    paymentMode: {
      type: String,
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

export { invoiceSchema };
