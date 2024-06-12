import { InviteCreateNestedManyWithoutUsersInput } from "./InviteCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { WalletCreateNestedManyWithoutUsersInput } from "./WalletCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  invites?: InviteCreateNestedManyWithoutUsersInput;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
  wallets?: WalletCreateNestedManyWithoutUsersInput;
};
