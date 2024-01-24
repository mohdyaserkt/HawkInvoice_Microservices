import { Message } from "node-nats-streaming";
import { Subject, listener, usercreatedevent } from "@y48er-invoices/common";


import { signupUser_UseCase } from "../../libs/usecases";
import dependencies from "../../config/dependencies";

export class UserCreatedListener extends listener<usercreatedevent> {
  subject: Subject.UserCreated = Subject.UserCreated;
  queueGroup = "queueGroupName";

  async onMessage(data: usercreatedevent["data"], msg: Message) {
    const { email,id,isGoogle,profile,status,verified } = data;

    try {
      await signupUser_UseCase(dependencies).execute({
        email,
        id,
        isGoogle,
        profile,
        status,
        verified
      });

      msg.ack();
      console.log("message adcked @");
      
    } catch (error) {
      console.log(error);
    }
  }
}
