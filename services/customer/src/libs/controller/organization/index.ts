import createOrganizationController from "./createOrganizationController";

export = (dependencies: any) => {
  return {
    createOrganizationController: createOrganizationController(dependencies),
  };
};
