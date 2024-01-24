import { Iitems } from "../../../entities";

export const itemsRepository = {
  findItemsById: async (id: string, itemsModel: any) => {
    const item = await itemsModel.findById(id);
    return item ? item.toObject() : null;
  },
  updateItem: async (items: Iitems, itemsModel: any) => {
    const item = await itemsModel.findOneAndUpdate({ _id: items.id }, items, {
      new: true,
    });
    return item ? item.toObject() : null;
  },
  //   findCustomer: async (id: string, customerModel: any) => {
  //     console.log("rea findorgrepo", id);
  //     const customers = await customerModel.find({ userId: id });
  //     console.log(customers, "dfs");
  //     return customers ? customers : null;
  //   },
  findItems: async (itemsModel: any) => {
    console.log("rea findorgrepo");
    const items = await itemsModel.find({});
    console.log(items, "dfs");
    return items ? items : null;
  },

  createItem: async (items: Iitems, itemsModel: any) => {
    const createdItem = await itemsModel.create(items);
    return createdItem.toObject();
  },
};
