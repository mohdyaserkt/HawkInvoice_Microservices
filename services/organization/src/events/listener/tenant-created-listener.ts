import { Message } from "node-nats-streaming";
import { Subject, listener, tenantcreatedevent } from "@y48er-invoices/common";


import { createOrganization_UseCase, createTenant_UseCase, signupUser_UseCase } from "../../libs/usecases";
import dependencies from "../../config/dependencies";

export class TenantCreatedListener extends listener<tenantcreatedevent> {
  subject: Subject.TenantCreated = Subject.TenantCreated;
  queueGroup = "queueGroupName";

  async onMessage(data: tenantcreatedevent["data"], msg: Message) {
    const {businessName,email,typeOfbusiness,userId,NoOfemployes,annualRevenue,createdDate,phoneNumber,profile,companyId,organizationAddress } = data;

    try {
      await createTenant_UseCase(dependencies).execute({
        businessName,
        email,
        typeOfbusiness,
        userId,
        annualRevenue,
        createdDate,
        NoOfemployes,
        phoneNumber,
        profile
      });
      
      await createOrganization_UseCase(dependencies).execute({
        businessName,
        email,
        typeOfbusiness,
        userId,
        annualRevenue,
        createdDate,
        NoOfemployes,
        phoneNumber,
        profile,
        organizationAddress
      },companyId);

      msg.ack();
      console.log("message adcked @");
      
    } catch (error) {
      console.log(error);
    }
  }
}
