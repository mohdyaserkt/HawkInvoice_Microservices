
import getAllRecievablesController from "./getAllRecievablesController";
import getSalesChartDataController from "./getSalesChartDataController";
import getExpenseChartDataController from "./getExpenseChartDataController";
import getSalesTableDataController from "./getSalesTableDataController";



export = (dependencies: any) => {
  return {
    getAllRecievablesController:getAllRecievablesController(dependencies),
    getSalesChartDataController:getSalesChartDataController(dependencies),
    getExpenseChartDataController:getExpenseChartDataController(dependencies),
    getSalesTableDataController:getSalesTableDataController(dependencies),
  };
};
