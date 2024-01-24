import mongoose from "mongoose";

 const customerSchema = new mongoose.Schema(
  {
    customerType : {
      type: String,
      required: true,
    },
    salutaion:{
      type:String
    },
    customerCompanyName:{
      type:String
    },
    mobile:{
      type:Number
    },


    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,

      required: true,
    },
    displayName: {
      type: String,
      required: true,
    },
    workPhone: {
      type: Number,
    },
    email: {
      type: String,
    },
    createdDate: {
      type: Date,
      default: Date.now,
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



export { customerSchema };
