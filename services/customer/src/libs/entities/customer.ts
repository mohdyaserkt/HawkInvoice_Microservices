interface ShippingAddress {
  attention: string;
  region: string;
  street1: string;
  street2: string;
  city: string;
  state: string;
}

export interface ICustomer {
  id?:string
  customerType: string;
  firstName: string;
  lastName: string;
  displayName: string;
  workPhone: number;
  email: string;
  salutaion?: String;
  customerCompanyName?: String;
  mobile?: Number;
  shippingAddress?:ShippingAddress;
  billingAddress?:ShippingAddress;
}



export class cutomerRegistrationData {
  displayName: string;
  firstName: string;
  lastName: string;
  customerType: string;
  email: string;
  workPhone: number;
  customerCompanyName?: String;
  mobile?: Number;
  salutaion?: String;
  billingAddress?:ShippingAddress;
  shippingAddress?:ShippingAddress;
  id?:string

  constructor({
    displayName,
    firstName,
    lastName,
    customerType,
    email,
    workPhone,
    customerCompanyName,
    mobile,
    salutaion,
    id,shippingAddress,billingAddress
  }: ICustomer) {
    this.displayName = displayName;
    this.firstName = firstName;
    this.lastName = lastName;
    this.customerType = customerType;
    this.email = email;
    this.workPhone = workPhone;
    this.customerCompanyName = customerCompanyName;
    this.mobile = mobile;
    this.salutaion = salutaion;
    this.id=id
    this.shippingAddress=shippingAddress;
    this.billingAddress=billingAddress;
  }
}
