import createOrganizationController from "./createOrganizationController";
import getOrganizationAdressController from "./getOrganizationAdressController";

export = (dependencies: any) => {
  return {
    createOrganizationController: createOrganizationController(dependencies),
    getOrganizationAdressController: getOrganizationAdressController(dependencies),
  };
};
