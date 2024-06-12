import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { BigIntFilter } from "../../util/BigIntFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type InviteWhereInput = {
  event?: EventWhereUniqueInput;
  id?: BigIntFilter;
  status?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
