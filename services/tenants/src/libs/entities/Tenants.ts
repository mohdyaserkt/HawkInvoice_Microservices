import mongoose, { Document } from "mongoose";

export interface ITenant {
  userId: string;
  email:string
  businessName: string;
  typeOfbusiness: string;
  phoneNumber?: number;
  NoOfemployes?: string;
  annualRevenue?: string;
  createdDate?: Date;
  profile?: string;
}

export interface ITenantDocument extends Document {
  userId: string;
  email:string
  businessName: string;
  typeOfbusiness: string;
  phoneNumber?: number;
  NoOfemployes?: string;
  annualRevenue?: string;
  createdDate?: Date;
  profile?: string;
}

export interface ITenantModel extends mongoose.Model<ITenantDocument> {
    build(attrs: ITenant): ITenantDocument;
  }


  export class tenantRegistrationData {
    userId: string;
    email:string
    businessName: string;
    typeOfbusiness: string;
    phoneNumber?: number;
    NoOfemployes?: string;
    annualRevenue?: string;
    createdDate?: Date;
    profile?: string;
  
    constructor({ businessName,typeOfbusiness,userId,NoOfemployes,createdDate,phoneNumber,annualRevenue, profile,email}: ITenant) {
      this.userId=userId
      this.email=email
      this.businessName=businessName
      this.typeOfbusiness=typeOfbusiness
      this.profile = profile;
      this.NoOfemployes=NoOfemployes;
      this.annualRevenue=annualRevenue;
      this.createdDate=createdDate;
      this.phoneNumber=phoneNumber;
      
    }
  }