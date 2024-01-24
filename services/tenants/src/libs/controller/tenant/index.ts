import createTenantController from "./createTenantController";
import findMyTenantsController from "./findMyTenantsController";

export = (dependencies: any) => {
  return {
    createTenantController: createTenantController(dependencies),
    findMyTenantsController:findMyTenantsController(dependencies)
  };
};
