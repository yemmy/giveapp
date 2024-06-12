import { InviteWhereInput } from "./InviteWhereInput";
import { InviteOrderByInput } from "./InviteOrderByInput";

export type InviteFindManyArgs = {
  where?: InviteWhereInput;
  orderBy?: Array<InviteOrderByInput>;
  skip?: number;
  take?: number;
};
