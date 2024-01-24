import { ITenant } from "../../../entities";
import { ChildrenSchemas, TenantSchemas, getDBModel, switchDB } from "../../../utils/getAllTenants";
import { schemas } from "../../database/mongo";
import mongoose, { Connection, Model } from "mongoose";

export const tenantRepository = {
  findByEmail: async (email: string,tenantModel:any) => {
    const user = await tenantModel.findOne({ email });
    return user ? user.toObject() : null;
  },

  findOrganizations: async (id: string,tenantModel:any) => {
    console.log("rea findorgrepo",id);
    
    const organizations = await tenantModel.find({userId:id})
    console.log(organizations,"dfs");
    return organizations ? organizations : null;
  },
  
  getCompanySchema : async (companyName: any,modelName:string): Promise<any> => {

    console.log(companyName,"company name in tenant repo");
    
    if(modelName=="Tenant"||modelName=="User"){
     
      
      const tenantDB: Connection = await switchDB('hawkinvoice-tenants', TenantSchemas);
     
      const tenantModel: Model<any> = await getDBModel(tenantDB, modelName);
      return tenantModel
    }
   
    
      const companyDB: Connection = await switchDB(companyName, ChildrenSchemas);
        
        const companyModel: Model<any> = await getDBModel(companyDB, modelName);
        return companyModel;
    
  },

  createTenant: async (tenant: ITenant,tenantModel:any) => {
    const createdTenants = await tenantModel.create(tenant);
    return createdTenants.toObject();
  },
};
