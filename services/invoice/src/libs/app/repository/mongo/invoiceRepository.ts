import { Invoice } from "../../../entities";

export const invoiceRepository = {
  findByEmail: async (email: string, InvoiceModel: any) => {
    const Invoice = await InvoiceModel.findOne({ email });
    return Invoice ? Invoice.toObject() : null;
  },
  findInvoiceById: async (id: string, InvoiceModel: any) => {
    const Invoice = await InvoiceModel.findById(id);
    return Invoice ? Invoice.toObject() : null;
  },
  updateInvoice: async (Invoice: Invoice, InvoiceModel: any) => {
    console.log("reached succesfully");

    console.log("this is Invoice for update", Invoice);

    const updatedInvoice = await InvoiceModel.findOneAndUpdate(
      { _id: Invoice.id },
      Invoice,
      {
        new: true,
      }
    );
    return updatedInvoice ? updatedInvoice.toObject() : null;
  },
  findInvoice: async (id: string, invoiceModel: any) => {
    console.log("rea findorgrepo", id);
    const invoice = await invoiceModel.find({ _id: id });
    console.log(invoice, "dfs");
    return invoice ? invoice : null;
  },
  findInvoices: async (invoiceModel: any) => {
    console.log("rea findorgrepo");
    const invoices = await invoiceModel.find();
    console.log(invoices, "dfs");
    return invoices ? invoices : null;
  },

  createInvoice: async (invoice: Invoice, invoiceModel: any) => {
    const createdInvoice = await invoiceModel.create(invoice);
    return createdInvoice.toObject();
  },

  findAllRecievables: async (invoiceModel: any) => {
    const AllRecievables = await invoiceModel.aggregate([
      {
        $match: {
          status: "pending",
        },
      },
      {
        $group: {
          _id: null,
          totalSum: { $sum: "$Total" },
        },
      },
    ]);

    return AllRecievables;
  },

  findAllOverdue: async (invoiceModel: any) => {
   
    const allInvoices = await invoiceModel.find({});

    // Perform aggregation on the fetched data using JavaScript
    const overdueInvoices = allInvoices.filter(
      (invoice: { dueDate: Date }) => invoice.dueDate < new Date()
    );
    const AllOverdue = overdueInvoices.reduce(
      (sum: number, invoice: { Total: number }) => sum + invoice.Total,
      0
    );
    console.log(AllOverdue, "kjkj");

    return AllOverdue;
  },

  findOverdueOneToFifteenDays: async (invoiceModel: any) => {

    const allInvoices = await invoiceModel.find({});
    // Calculate the due date threshold (15 days ago)
    const fifteenDaysAgo = new Date(
      new Date().getTime() - 15 * 24 * 60 * 60 * 1000
    );

    // Filter invoices due within the past 15 days
    const overdueOneToFifteenDays = allInvoices.filter(
      (invoice: { dueDate: string | number | Date }) => {
        const dueDate = new Date(invoice.dueDate);
        return dueDate < new Date() && dueDate >= fifteenDaysAgo;
      }
    );

    // Calculate the total sum of "Total" for the filtered invoices
    const totalSum = overdueOneToFifteenDays.reduce(
      (sum: any, invoice: { Total: any }) => sum + invoice.Total,
      0
    );

    return totalSum;
  },

  findOverdueSixteenToThirtyDays: async (invoiceModel: any) => {
    // Assuming you have fetched all invoices into the `allInvoices` array
    const allInvoices = await invoiceModel.find({});

    // Calculate the due date thresholds (16 to 30 days ago)
    const thirtyDaysAgo = new Date(
      new Date().getTime() - 16 * 24 * 60 * 60 * 1000
    );
    const sixteenDaysAgo = new Date(
      new Date().getTime() - 30 * 24 * 60 * 60 * 1000
    );

    // Filter invoices due between 16 and 30 days ago
    const overdueSixteenToThirtyDays = allInvoices.filter(
      (invoice: { dueDate: string | number | Date }) => {
        const dueDate = new Date(invoice.dueDate);
        return dueDate < thirtyDaysAgo && dueDate >= sixteenDaysAgo;
      }
    );

    // Calculate the total sum of "Total" for the filtered invoices
    const OverdueSixteenToThirtyDays = overdueSixteenToThirtyDays.reduce(
      (sum: any, invoice: { Total: any }) => sum + invoice.Total,
      0
    );

    console.log({ OverdueSixteenToThirtyDays });

    return OverdueSixteenToThirtyDays;
  },

  findOverdueThirtyOneToFortyFiveDays: async (invoiceModel: any) => {

    // Assuming you have fetched all invoices into the `allInvoices` array
    const allInvoices = await invoiceModel.find({});

    // Calculate the due date thresholds (31 to 45 days ago)
    const fortyFiveDaysAgo = new Date(
      new Date().getTime() - 31 * 24 * 60 * 60 * 1000
    );
    const thirtyOneDaysAgo = new Date(
      new Date().getTime() - 45 * 24 * 60 * 60 * 1000
    );

    // Filter invoices due between 31 and 45 days ago
    const overdueThirtyOneToFortyFiveDays = allInvoices.filter(
      (invoice: { dueDate: string | number | Date }) => {
        const dueDate = new Date(invoice.dueDate);
        return dueDate < thirtyOneDaysAgo && dueDate >= fortyFiveDaysAgo;
      }
    );

    // Calculate the total sum of "Total" for the filtered invoices
    const OverdueThirtyOneToFortyFiveDays =
      overdueThirtyOneToFortyFiveDays.reduce(
        (sum: any, invoice: { Total: any }) => sum + invoice.Total,
        0
      );

    return OverdueThirtyOneToFortyFiveDays;
  },

  findOverdueAboveFourtyFiveDays: async (invoiceModel: any) => {

    // Assuming you have fetched all invoices into the `allInvoices` array
    const allInvoices = await invoiceModel.find({});

    // Calculate the due date threshold (more than 45 days ago)
    const fortyFiveDaysAgo = new Date(
      new Date().getTime() - 45 * 24 * 60 * 60 * 1000
    );

    // Filter invoices overdue by more than 45 days
    const overdueAboveFortyFiveDays = allInvoices.filter(
      (invoice: { dueDate: string | number | Date }) => {
        const dueDate = new Date(invoice.dueDate);
        return dueDate < fortyFiveDaysAgo;
      }
    );

    // Calculate the total sum of "Total" for the filtered invoices
    const OverdueAboveFourtyFiveDays = overdueAboveFortyFiveDays.reduce(
      (sum: any, invoice: { Total: any }) => sum + invoice.Total,
      0
    );

    console.log({ OverdueAboveFourtyFiveDays });

    return OverdueAboveFourtyFiveDays;
  },

  findTotalSales: async (invoiceModel: any) => {
    const totalSales = await invoiceModel.aggregate([
      {
        $group: {
          _id: null, // Group all documents together
          totalSum: { $sum: "$Total" }, // Calculate the sum of the "Total" field
        },
      },
    ]);
    console.log(totalSales, "totals sales is ready");

    return totalSales;
  },

  findTotalReciepts: async (invoiceModel: any) => {
    const totalReciepts = await invoiceModel.aggregate([
      {
        $match: {
          status: "paid", // Filter documents with status "paid"
        },
      },
      {
        $group: {
          _id: null, // Group all matching documents together
          totalSum: { $sum: "$Total" }, // Calculate the sum of the "Total" field
        },
      },
    ]);

    console.log(totalReciepts, "totalReciepts  is ready");

    return totalReciepts;
  },

  findDataOfThisFinancialYear: async (invoiceModel: any) => {
    const allInvoices = await invoiceModel.find({});
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    let lastFinancialYearStart = new Date(currentYear, 2, 1); // April 1st of the previous year
    let lastFinancialYearEnd = new Date(currentYear + 1, 1, 31); // March 31st of the current year

    // If the current date is before April 1st, adjust the dates to the previous financial year
    if (currentDate < lastFinancialYearStart) {
      lastFinancialYearStart = new Date(currentYear - 1, 2, 1);
      lastFinancialYearEnd = new Date(currentYear, 1, 31);
    }

    const filteredInvoices = allInvoices.filter(
      (invoice: {
        invoiceDate: string | number | Date;
        dueDate: string | number | Date;
      }) => {
        const invoiceDate = new Date(invoice.invoiceDate);
        const dueDate = new Date(invoice.dueDate);
        return (
          (invoiceDate >= lastFinancialYearStart &&
            invoiceDate <= lastFinancialYearEnd) ||
          (dueDate >= lastFinancialYearStart && dueDate <= lastFinancialYearEnd)
        );
      }
    );

    // Calculate the desired aggregations
    const aggregatedData: Record<
      string,
      { totalSales: number; totalPaidSales: number }
    > = {};

    filteredInvoices.forEach(
      (invoice: {
        invoiceDate: string | number | Date;
        Total: number;
        status: string;
      }) => {
        const invoiceDate = new Date(invoice.invoiceDate);
        const month = invoiceDate.toLocaleString("default", { month: "short" });
        const year = invoiceDate.getFullYear().toString();
        const key = `${month}${year}`;

        if (!aggregatedData[key]) {
          aggregatedData[key] = {
            totalSales: 0,
            totalPaidSales: 0,
          };
        }

        aggregatedData[key].totalSales += invoice.Total;

        if (invoice.status === "paid") {
          aggregatedData[key].totalPaidSales += invoice.Total;
        }
      }
    );

    // Convert the aggregated data into an array
    const data = Object.keys(aggregatedData).map((key) => ({
      month: key,
      totalSales: aggregatedData[key].totalSales,
      totalPaidSales: aggregatedData[key].totalPaidSales,
    }));

    // Sort the data by month
    data.sort(
      (a, b) => new Date(a.month).getTime() - new Date(b.month).getTime()
    );


    return data;
  },

  findTodaysData: async (invoiceModel: any) => {
   
    
    // Assuming you have fetched all invoices into the `allInvoices` array
    const allInvoices = await invoiceModel.find({});

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Calculate the start of the next day (beginning of tomorrow)
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    // Filter invoices for today
    const todaysData = allInvoices.filter(
      (invoice: { invoiceDate: string | number | Date }) => {
        const invoiceDate = new Date(invoice.invoiceDate);
        return invoiceDate >= today && invoiceDate < tomorrow;
      }
    );

    // Calculate total sales, total receipts, and total dues
    const totalSales = todaysData.reduce(
      (sum: any, invoice: { Total: any }) => sum + invoice.Total,
      0
    );
    const totalReceipts = todaysData.reduce(
      (sum: any, invoice: { status: string; Total: any }) => {
        if (invoice.status === "paid") {
          return sum + invoice.Total;
        }
        return sum;
      },        
      0
    );
    const totalDues = todaysData.reduce(
      (sum: any, invoice: { status: string; Total: any }) => {
        if (invoice.status === "pending") {
          return sum + invoice.Total;
        }
        return sum;
      },
      0
    );

    console.log({
      totalSales,
      totalReceipts,
      totalDues,
    });

    return { totalSales, totalReceipts, totalDues };
  },

  findThisWeekData: async (invoiceModel: any) => {
    

    // Assuming you have fetched all invoices into the `allInvoices` array
    const allInvoices = await invoiceModel.find({});

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Calculate the start of the current week (Sunday)
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay());

    // Calculate the end of the current week (Saturday)
    const endOfWeek = new Date(today);
    endOfWeek.setDate(startOfWeek.getDate() + 6);

    // Filter invoices for the current week
    const thisWeekData = allInvoices.filter(
      (invoice: { invoiceDate: string | number | Date }) => {
        const invoiceDate = new Date(invoice.invoiceDate);
        return invoiceDate >= startOfWeek && invoiceDate <= endOfWeek;
      }
    );

    // Calculate total sales, total receipts, and total dues
    const totalSales = thisWeekData.reduce(
      (sum: any, invoice: { Total: any }) => sum + invoice.Total,
      0
    );
    const totalReceipts = thisWeekData.reduce(
      (sum: any, invoice: { status: string; Total: any }) => {
        if (invoice.status === "paid") {
          return sum + invoice.Total;
        }
        return sum;
      },
      0
    );
    const totalDues = thisWeekData.reduce(
      (sum: any, invoice: { status: string; Total: any }) => {
        if (invoice.status === "pending") {
          return sum + invoice.Total;
        }
        return sum;
      },
      0
    );

    console.log({
      totalSales,
      totalReceipts,
      totalDues,
    });

    return {
      totalSales,
      totalReceipts,
      totalDues,
    };
  },

  findThisMonthData: async (invoiceModel: any) => {
    


    // Assuming you have fetched all invoices into the `allInvoices` array
    const allInvoices = await invoiceModel.find({});

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Calculate the start of the current month (first day of the month)
    const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);

    // Calculate the end of the current month (last day of the month)
    const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    endOfMonth.setHours(23, 59, 59, 999);

    // Filter invoices for the current month
    const thisMonthData = allInvoices.filter(
      (invoice: { invoiceDate: string | number | Date }) => {
        const invoiceDate = new Date(invoice.invoiceDate);
        return invoiceDate >= startOfMonth && invoiceDate <= endOfMonth;
      }
    );

    // Calculate total sales, total receipts, and total dues
    const totalSales = thisMonthData.reduce(
      (sum: any, invoice: { Total: any }) => sum + invoice.Total,
      0
    );
    const totalReceipts = thisMonthData.reduce(
      (sum: any, invoice: { status: string; Total: any }) => {
        if (invoice.status === "paid") {
          return sum + invoice.Total;
        }
        return sum;
      },
      0
    );
    const totalDues = thisMonthData.reduce(
      (sum: any, invoice: { status: string; Total: any }) => {
        if (invoice.status === "pending") {
          return sum + invoice.Total;
        }
        return sum;
      },
      0
    );

    console.log({
      totalSales,
      totalReceipts,
      totalDues,
    });

    return {
      totalSales,
      totalReceipts,
      totalDues,
    };
  },

  findThisQuarterData: async (invoiceModel: any) => {

    // Assuming you have fetched all invoices into the `allInvoices` array
    const allInvoices = await invoiceModel.find({});

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Calculate the start date for the current quarter
    const currentMonth = today.getMonth();
    const startOfQuarter = new Date(
      today.getFullYear(),
      Math.floor(currentMonth / 3) * 3,
      1
    );

    // Calculate the end date for the current quarter
    const endOfQuarter = new Date(
      startOfQuarter.getFullYear(),
      startOfQuarter.getMonth() + 3,
      0
    );
    endOfQuarter.setHours(23, 59, 59, 999);

    // Filter invoices for the current quarter
    const thisQuarterData = allInvoices.filter(
      (invoice: { invoiceDate: string | number | Date }) => {
        const invoiceDate = new Date(invoice.invoiceDate);
        return invoiceDate >= startOfQuarter && invoiceDate <= endOfQuarter;
      }
    );

    // Calculate total sales, total receipts, and total dues
    const totalSales = thisQuarterData.reduce(
      (sum: any, invoice: { Total: any }) => sum + invoice.Total,
      0
    );
    const totalReceipts = thisQuarterData.reduce(
      (sum: any, invoice: { status: string; Total: any }) => {
        if (invoice.status === "paid") {
          return sum + invoice.Total;
        }
        return sum;
      },
      0
    );
    const totalDues = thisQuarterData.reduce(
      (sum: any, invoice: { status: string; Total: any }) => {
        if (invoice.status === "pending") {
          return sum + invoice.Total;
        }
        return sum;
      },
      0
    );

    console.log({
      totalSales,
      totalReceipts,
      totalDues,
    });

    return {
      totalSales,
      totalReceipts,
      totalDues,
    };
  },

  findThisYearData: async (invoiceModel: any) => {
    
    // Assuming you have fetched all invoices into the `allInvoices` array
    const allInvoices = await invoiceModel.find({});
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    let startOfYear = new Date(currentYear, 2, 1); // April 1st of the previous year
    let endOfYear = new Date(currentYear + 1, 1, 31); // March 31st of the current year

    // If the current date is before April 1st, adjust the dates to the previous financial year
    if (currentDate < startOfYear) {
      startOfYear = new Date(currentYear - 1, 2, 1);
      endOfYear = new Date(currentYear, 1, 31);
    }
    endOfYear.setHours(23, 59, 59, 999);

    // Filter invoices for the current year
    const thisYearData = allInvoices.filter(
      (invoice: { invoiceDate: string | number | Date }) => {
        const invoiceDate = new Date(invoice.invoiceDate);
        return invoiceDate >= startOfYear && invoiceDate <= endOfYear;
      }
    );

    // Calculate total sales, total receipts, and total dues
    const totalSales = thisYearData.reduce(
      (sum: any, invoice: { Total: any }) => sum + invoice.Total,
      0
    );
    const totalReceipts = thisYearData.reduce(
      (sum: any, invoice: { status: string; Total: any }) => {
        if (invoice.status === "paid") {
          return sum + invoice.Total;
        }
        return sum;
      },
      0
    );
    const totalDues = thisYearData.reduce(
      (sum: any, invoice: { status: string; Total: any }) => {
        if (invoice.status === "pending") {
          return sum + invoice.Total;
        }
        return sum;
      },
      0
    );

    console.log({
      totalSales,
      totalReceipts,
      totalDues,
    });

    return {
      totalSales,
      totalReceipts,
      totalDues,
    };
  },

  getSalesByCustomer: async (invoiceModel: any) => {
    const salesByCustomer = await invoiceModel.aggregate([
      {
        $group: {
          _id: { customerId: "$customerId", customerName: "$customerName" },
          totalSales: { $sum: "$Total" },
          invoiceCount: { $sum: 1 },
        },
      },
      {
        $project: {
          _id: 0, // Exclude the default _id field
          customerId: "$_id.customerId",
          customerName: "$_id.customerName",
          totalSales: 1,
          invoiceCount: 1,
        },
      },
    ]);

    console.log(salesByCustomer, "sales bycustomer");

    return salesByCustomer;
  },

  getSalesByItem: async (invoiceModel: any) => {
    try {
      const salesByItem = await invoiceModel.aggregate([
        {
          $unwind: "$itemDetails", // Unwind the itemDetails array to treat each item as a separate document
        },
        {
          $group: {
            _id: {
              itemId: "$itemDetails.id",
              itemName: "$itemDetails.itemName",
            },
            totalQuantitySold: { $sum: "$itemDetails.quantity" },
            totalAmountSold: {
              $sum: {
                $multiply: [
                  { $toDouble: "$itemDetails.quantity" }, // Convert quantity to a double
                  { $toDouble: "$itemDetails.rate" }, // Convert rate to a double
                ],
              },
            },
          },
        },
        {
          $project: {
            _id: 0, // Exclude the default _id field
            itemId: "$_id.itemId",
            itemName: "$_id.itemName",
            totalQuantitySold: 1,
            totalAmountSold: 1,
          },
        },
      ]);

      console.log(salesByItem, "check");
      return salesByItem;
    } catch (error) {
      console.log(error);
    }
  },

  //recievables

  getInvoiceDetails: async (invoiceModel: any) => {
    const invoiceDetails = await invoiceModel.find(
      {},
      {
        status: 1,
        invoiceDate: 1,
        dueDate: 1,
        invoiceNumber: 1,
        orderNumber: 1,
        customerName: 1,
        Total: 1,
        _id: 0, // Exclude the default _id field
      }
    );

    return invoiceDetails;
  },

  getPaymentRecieved: async (invoiceModel: any) => {
    const paymentRecieved = await invoiceModel.find(
      { status: "paid" }, // Filter by status field with "paid"
      {
        invoiceDate: 1,
        invoiceNumber: 1,
        customerName: 1,
        paymentMode: 1,
        Total: 1,
        _id: 0, // Exclude the default _id field
      }
    );

    return paymentRecieved;
  },

  getPaymentPending: async (invoiceModel: any) => {
    const paymentRecieved = await invoiceModel.find(
      { status: "pending" },
      {
        invoiceDate: 1,
        invoiceNumber: 1,
        customerName: 1,
        paymentMode: 1,
        Total: 1,
        _id: 0,
      }
    );

    return paymentRecieved;
  },
};
