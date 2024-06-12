import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type InviteUpdateInput = {
  event?: EventWhereUniqueInput | null;
  status?: string | null;
  user?: UserWhereUniqueInput | null;
};
