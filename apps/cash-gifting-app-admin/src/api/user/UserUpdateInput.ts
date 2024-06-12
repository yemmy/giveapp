import { InviteUpdateManyWithoutUsersInput } from "./InviteUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { WalletUpdateManyWithoutUsersInput } from "./WalletUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  invites?: InviteUpdateManyWithoutUsersInput;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
  wallets?: WalletUpdateManyWithoutUsersInput;
};
