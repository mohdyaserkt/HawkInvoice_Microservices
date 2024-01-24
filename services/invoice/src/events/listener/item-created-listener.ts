import { Message } from "node-nats-streaming";
import { Subject, listener, itemcreatedevent } from "@y48er-invoices/common";


import { createItem_UseCase } from "../../libs/usecases";
import dependencies from "../../config/dependencies";

export class itemCreatedListener extends listener<itemcreatedevent> {
  subject: Subject.ItemCreated = Subject.ItemCreated;
  queueGroup = "queueGroupName";

  async onMessage(data: itemcreatedevent["data"], msg: Message) {
    const {item,companyName} = data;

    try {
      await createItem_UseCase(dependencies).execute(item,companyName);
    

      msg.ack();
      console.log("message adcked @");
      
    } catch (error) {
      console.log(error);
    }
  }
}
