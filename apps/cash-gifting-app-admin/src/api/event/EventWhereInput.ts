import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { BigIntFilter } from "../../util/BigIntFilter";
import { InviteListRelationFilter } from "../invite/InviteListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type EventWhereInput = {
  date?: DateTimeNullableFilter;
  id?: BigIntFilter;
  invites?: InviteListRelationFilter;
  name?: StringNullableFilter;
  organizer?: StringNullableFilter;
};
