export interface Invoice {
    id?:string;
    customerName: string;
    customerEmail: string;
    invoiceNumber: string;
    customerId:string;
    orderNumber?: string;
    invoiceDate: Date;
    dueDate: Date;
    salesPerson?: string;
    subject?: string;
    itemDetails: any[]; // You can define a more specific type for itemDetails
    subTotal: number;
    discount?: number;
    Adjustment?: object;
    Total: number;
    customerNotes?: string;
    termsAndConditions?: string;
    status?: string;
    paymentMode?: string;
  }
  

//   export class invoiceRegistrationData {
//     Adjustment?:object;
//     Total: Number;
//     customerEmail: string;
//     customerName: string;
//     customerNotes?: string;
//     discount?: number;
//     dueDate: Date;
//     invoiceDate: Date;
//     invoiceNumber: String;
//     itemDetails:any[];
  
//     constructor(invoice: Invoice) {
//       this.Adjustment = invoice.Adjustment;
//       this.Total = invoice.Total;
//       this.customerEmail = invoice.customerEmail;
//       this.customerName = invoice.customerName;
//       this.customerNotes =invoice.customerNotes ;
//       this.discount = invoice.discount;
//       this.dueDate = invoice.dueDate;
//       this.invoiceDate = invoice.invoiceDate;
//       this.invoiceNumber = invoice.invoiceNumber;
//       this.itemDetails=invoice.itemDetails;

//     }
//   }
  
  export class invoiceRegistrationData {
    customerName: string;
    customerId:string;
    customerEmail: string;
    invoiceNumber: string;
    orderNumber?: string;
    invoiceDate: Date;
    dueDate: Date;
    salesPerson?: string;
    subject?: string;
    itemDetails: any[]; // You can define a more specific type for itemDetails
    subTotal: number;
    discount?: number;
    Adjustment?: object;
    Total: number;
    customerNotes?: string;
    termsAndConditions?: string;
    status?: string;
    paymentMode?: string;
    id?:string;
  
    constructor(data: Invoice) {
      this.id = data.id;
      this.customerName = data.customerName || '';
      this.customerEmail = data.customerEmail || '';
      this.invoiceNumber = data.invoiceNumber || '';
      this.orderNumber = data.orderNumber || undefined;
      this.invoiceDate = data.invoiceDate || new Date();
      this.dueDate = data.dueDate || new Date();
      this.salesPerson = data.salesPerson || undefined;
      this.subject = data.subject || undefined;
      this.itemDetails = data.itemDetails || [];
      this.subTotal = data.subTotal || 0;
      this.discount = data.discount || 0;
      this.Adjustment = data.Adjustment || {};
      this.Total = data.Total || 0;
      this.customerNotes = data.customerNotes || '';
      this.termsAndConditions = data.termsAndConditions || '';
      this.status = data.status || 'pending';
      this.paymentMode = data.paymentMode || '';
      this.customerId = data.customerId || '';

    }
  }
  