import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { BigIntFilter } from "../../util/BigIntFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type RequestWhereInput = {
  amount?: FloatNullableFilter;
  id?: BigIntFilter;
  recipient?: StringNullableFilter;
  sender?: StringNullableFilter;
  status?: StringNullableFilter;
};
