import { ITenant } from "../../../entities";
import { schemas } from "../../database/mongo";

const { tenantModel } = schemas;

export const tenantRepository = {
  findByEmail: async (email: string) => {
    const user = await tenantModel.findOne({ email });
    return user ? user.toObject() : null;
  },

  findOrganizations: async (id: string) => {
    console.log("rea findorgrepo",id);
    
    const organizations = await tenantModel.find({userId:id})
    console.log(organizations,"dfs");
    return organizations ? organizations : null;
  },

  createTenant: async (tenant: ITenant) => {
    const createdTenant = await tenantModel.create(tenant);
    const createdTenants: any = await tenantModel.findById(createdTenant._id)
    return createdTenants.toObject();
  },
};
