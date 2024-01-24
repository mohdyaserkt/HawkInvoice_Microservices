import { Publisher, Subject,tenantcreatedevent} from "@y48er-invoices/common";

export class TenantCreatedPublisher extends Publisher<tenantcreatedevent> {
  subject: Subject.TenantCreated = Subject.TenantCreated;
}
