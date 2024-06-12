import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { BigIntFilter } from "../../util/BigIntFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WalletWhereInput = {
  balance?: FloatNullableFilter;
  id?: BigIntFilter;
  user?: UserWhereUniqueInput;
};
