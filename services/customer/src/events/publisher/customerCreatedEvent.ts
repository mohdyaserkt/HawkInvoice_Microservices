import { Publisher, Subject,customercreatedevent} from "@y48er-invoices/common";

export class customerCreatedPublisher extends Publisher<customercreatedevent> {
  subject: Subject.CustomerCreated = Subject.CustomerCreated;
}
