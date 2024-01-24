export interface Iitems {
  id?:string;
  type: string;
  name: string;
  unit: string;
  description: string;
  sellingPrice: number;
}

export class itemsRegistrationData {
  description: string;
  name: string;
  sellingPrice: number;
  type: string;
  unit: string;
  id?:string;

  constructor({ description, name, sellingPrice, type, unit,id }: Iitems) {
    this.description = description;
    this.name = name;
    this.sellingPrice = sellingPrice;
    this.type = type;
    this.unit = unit;
    this.id=id;
  }
}




export interface  IgetSingleItem {
  comapanyName:string,
  id:string
}