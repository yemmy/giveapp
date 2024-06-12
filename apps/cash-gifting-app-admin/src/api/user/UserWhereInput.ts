import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BigIntFilter } from "../../util/BigIntFilter";
import { InviteListRelationFilter } from "../invite/InviteListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { WalletListRelationFilter } from "../wallet/WalletListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: BigIntFilter;
  invites?: InviteListRelationFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  wallets?: WalletListRelationFilter;
};
