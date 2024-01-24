import { Publisher, Subject,usercreatedevent} from "@y48er-invoices/common";

export class UserCreatedPublisher extends Publisher<usercreatedevent> {
  subject: Subject.UserCreated = Subject.UserCreated;
}
