
import { IOrganization } from "../../../entities/organization";

export const organizationRepository = {
  findByEmail: async (email: string,organizationModel:any) => {
    const user = await organizationModel.findOne({ email });
    return user ? user.toObject() : null;
  },

  findOrganizations: async (id: string,organizationModel:any) => {
    console.log("rea findorgrepo",id);
    const organizations = await organizationModel.find({userId:id})
    console.log(organizations,"dfs");
    return organizations ? organizations : null;
  },

  createOrganization: async (Organization: IOrganization,organizationModel:any) => {
    const createdOrganization = await organizationModel.create(Organization);
    return createdOrganization.toObject();
  },
};
