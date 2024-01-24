import { Message } from "node-nats-streaming";
import { Subject, listener, customercreatedevent } from "@y48er-invoices/common";


import { createCustomer_UseCase, createOrganization_UseCase, createTenant_UseCase, signupUser_UseCase } from "../../libs/usecases";
import dependencies from "../../config/dependencies";

export class customerCreatedListener extends listener<customercreatedevent> {
  subject: Subject.CustomerCreated = Subject.CustomerCreated;
  queueGroup = "queueGroupName";

  async onMessage(data: customercreatedevent["data"], msg: Message) {
    const {customer,companyName} = data;

    try {
      await createCustomer_UseCase(dependencies).execute(customer,companyName);
    

      msg.ack();
      console.log("message adcked @");
      
    } catch (error) {
      console.log(error);
    }
  }
}
