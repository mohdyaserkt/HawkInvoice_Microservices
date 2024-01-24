
export interface IExpense {
    date: Date;
    categoryName: string;
    amount: number;
    invoiceNumber?: string;
    notes?: string;
    id?: string;
  }
  

  
  export class ExpenseRegistrationData {
    date: Date;
    categoryName: string;
    amount: number;
    invoiceNumber?: string;
    notes?: string;
    id?: string;
  
    constructor(data:IExpense) {
      this.date = data.date || new Date();
      this.categoryName = data.categoryName || '';
      this.amount = data.amount || 0;
      this.invoiceNumber = data.invoiceNumber || "";
      this.notes = data.notes || '';
      this.id = data.id || undefined;
    }
  }
  ;
  