export interface ICustomer {
  id?:string
  customerType: string;
  firstName: string;
  lastName: string;
  displayName: string;
  workPhone?: number;
  email?: string;
  salutaion?: String;
  customerCompanyName?: String;
  mobile?: Number;
}

export class cutomerRegistrationData {
  displayName: string;
  firstName: string;
  lastName: string;
  customerType: string;
  email?: string;
  workPhone?: number;
  customerCompanyName?: String;
  mobile?: Number;
  salutaion?: String;
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
    id
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
  }
}
