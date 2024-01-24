import { IExpense } from "../../../entities";

export const expenseRepository = {
  findexpenseById: async (id: string, expenseModel: any) => {
    console.log(id, "resid");
    const expense = await expenseModel.find({ _id: id });
    console.log(expense, "resid1");

    return expense[0] ? expense[0] : null;
  },
  updateExpense: async (expense: IExpense, expenseModel: any) => {
    const editedExpense = await expenseModel.findOneAndUpdate(
      { _id: expense.id },
      expense,
      {
        new: true,
      }
    );
    return editedExpense ? editedExpense.toObject() : null;
  },
  //   findCustomer: async (id: string, customerModel: any) => {
  //     console.log("rea findorgrepo", id);
  //     const customers = await customerModel.find({ userId: id });
  //     console.log(customers, "dfs");
  //     return customers ? customers : null;
  //   },
  findexpense: async (expenseModel: any) => {
    console.log("rea findorgrepo");
    const expense = await expenseModel.find({});
    console.log(expense, "dfssdfff");
    return expense ? expense : null;
  },

  createExpense: async (expense: IExpense, expenseModel: any) => {
    const createdItem = await expenseModel.create(expense);
    return createdItem.toObject();
  },

  totalExpense: async (expenseModel: any) => {
    const totalExpense = await expenseModel.aggregate([
      {
        $group: {
          _id: null,
          totalAmount: { $sum: "$amount" },
        },
      },
    ]);
    return totalExpense;
  },

  


  expensesOfThisFinancialYear: async (expenseModel: any) => {
    const allExpenses = await expenseModel.find({});
  
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
  
    // Calculate the start and end dates for the last financial year
    let lastFinancialYearStart = new Date(currentYear, 2, 1); // April 1st of the previous year
    let lastFinancialYearEnd = new Date(currentYear + 1, 1, 31); // March 31st of the current year
  
    // If the current date is before April 1st, adjust the dates to the previous financial year
    if (currentDate < lastFinancialYearStart) {
      lastFinancialYearStart = new Date(currentYear - 1, 2, 1);
      lastFinancialYearEnd = new Date(currentYear, 1, 31);
    }
  
    // Filter expenses for the last financial year
    const lastFinancialYearData = allExpenses.filter(
      (expense: { date: string | number | Date }) => {
        const expenseDate = new Date(expense.date);
        return (
          expenseDate >= lastFinancialYearStart &&
          expenseDate <= lastFinancialYearEnd
        );
      }
    );
  
    // Perform aggregation by year and month
    const aggregatedData: Record<string, number> = {};
  
    lastFinancialYearData.forEach(
      (expense: { date: string | number | Date; amount: number }) => {
        const expenseDate = new Date(expense.date);
        const year = expenseDate.getFullYear();
        const month = expenseDate.toLocaleString('default', { month: 'short' }); // Get the abbreviated month name
  
        const key = `${month}${year}`;
  
        if (!aggregatedData[key]) {
          aggregatedData[key] = 0;
        }
  
        aggregatedData[key] += expense.amount;
      }
    );
  
    // Convert the aggregated data into an array with "month" field as "Oct2023"
    const data: { month: string; totalAmount: number }[] = [];
  
    for (const key in aggregatedData) {
      data.push({
        month: key,
        totalAmount: aggregatedData[key],
      });
    }
  
    // Sort the data by month
    data.sort((a, b) => {
      return a.month.localeCompare(b.month);
    });
  
    console.log(data);
  
    return data;
  },
  

  totalExpenseByEachCategory: async (expenseModel: any) => {
    const totalExpenseByEachCategory = await expenseModel.aggregate([
      {
        $group: {
          _id: "$categoryName",
          totalAmount: { $sum: "$amount" },
        },
      },
      {
        $project: {
          _id: 0, // Exclude the _id field
          categoryName: "$_id", // Rename _id to categoryName
          totalAmount: 1, // Include totalAmount field
        },
      },
    ]);

    return totalExpenseByEachCategory;
  },

  totalExpenseByEachCategoryandcount: async (expenseModel: any) => {
    const ExpenseByEachCategory = await expenseModel.aggregate([
      {
        $group: {
          _id: "$categoryName",
          expenseCount: { $sum: 1 }, // Count the number of expenses in each category
          totalAmount: { $sum: "$amount" }, // Calculate the total amount spent in each category
        },
      },
      {
        $project: {
          _id: 0, // Exclude the default _id field from the result
          categoryName: "$_id",
          expenseCount: 1,
          totalAmount: 1,
        },
      },
    ]);

    return ExpenseByEachCategory;
  },

  getExpenseDetails: async (expenseModel: any) => {
    const ExpenseDetails = await expenseModel.find({});

    return ExpenseDetails;
  },
};
