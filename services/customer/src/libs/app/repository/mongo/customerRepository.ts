import { ICustomer } from "../../../entities";

export const customerRepository = {
  findByEmail: async (email: string, customerModel: any) => {
    const customer = await customerModel.findOne({ email });
    return customer ? customer.toObject() : null;
  },
  findCustomerById: async (id: string, customerModel: any) => {
    const customer = await customerModel.findById(id);
    return customer ? customer.toObject() : null;
  },
  updateCustomer: async (customer: ICustomer, customerModel: any) => {
    console.log("reached succesfully");
    
    console.log("this is customer for update",customer);
    
    const updatedCustomer = await customerModel.findOneAndUpdate({ _id: customer.id }, customer, {
      new: true,
    });
    return updatedCustomer ? updatedCustomer.toObject() : null;
  },
  findCustomer: async (id: string, customerModel: any) => {
    console.log("rea findorgrepo", id);
    const customers = await customerModel.find({ userId: id });
    console.log(customers, "dfs");
    return customers ? customers : null;
  },
  findCustomers: async (customerModel: any) => {
    console.log("rea findorgrepo");
    const customers = await customerModel.find({});
    console.log(customers, "dfs");
    return customers ? customers : null;
  },

  createCustomer: async (customer: ICustomer, customerModel: any) => {
    console.log("this is my customer",customer);
    
    const createdCustomer = await customerModel.create(customer);
    return createdCustomer.toObject();
  },
};
