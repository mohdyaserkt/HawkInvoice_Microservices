import { Publisher, Subject,itemcreatedevent} from "@y48er-invoices/common";

export class itemCreatedPublisher extends Publisher<itemcreatedevent> {
  subject: Subject.ItemCreated = Subject.ItemCreated;
}
