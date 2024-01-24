import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema(
  {
    date: {
      type: Date,
      default:Date.now(),
      required: true,
    },
    categoryName: {
      type: String,
      required: true,
    },
    amount: {
      type:  Number,
      required: true,
    },

    invoiceNumber: {
      type: String,
     
    },
    notes:{
        type:String
    }       

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

export { expenseSchema };
