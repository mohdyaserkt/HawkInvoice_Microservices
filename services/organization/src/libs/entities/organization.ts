import mongoose, { Document } from "mongoose";


interface IAddress {
  address:string;
    apt: string;
    city: string;
    state: string;
    zipCode: Number;
}

export interface IOrganizationDocument extends Document {
  userId: string;
  email:string
  businessName: string;
  typeOfbusiness: string;
  address?:IAddress;
  phoneNumber?: number;
  NoOfemployes?: string;
  annualRevenue?: string;
  createdDate?: Date;
  profile?: string;
}


export interface IOrganization {
  userId: string;
  email:string
  businessName: string;
  typeOfbusiness: string;
  phoneNumber?: number;
  NoOfemployes?: string;
  annualRevenue?: string;
  organizationAddress?:IAddress;
  createdDate?: Date;
  profile?: string;
}



export interface IOrganizationModel extends mongoose.Model<IOrganizationDocument> {
  build(attrs: IOrganization): IOrganizationDocument;
}

export class organizationRegistrationData {
  userId: string;
  email:string
  businessName: string;
  typeOfbusiness: string;
  phoneNumber?: number;
  NoOfemployes?: string;
  annualRevenue?: string;
  organizationAddress?:IAddress;
  createdDate?: Date;
  profile?: string;

  constructor({ organizationAddress,businessName,typeOfbusiness,userId,NoOfemployes,createdDate,phoneNumber,annualRevenue, profile,email}: IOrganization) {
    this.userId=userId
    this.email=email
    this.businessName=businessName
    this.typeOfbusiness=typeOfbusiness
    this.profile = profile;
    this.NoOfemployes=NoOfemployes;
    this.annualRevenue=annualRevenue;
    this.createdDate=createdDate;
    this.phoneNumber=phoneNumber;
    this.organizationAddress=organizationAddress;
    
  }
}