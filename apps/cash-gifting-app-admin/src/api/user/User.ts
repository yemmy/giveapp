import { Invite } from "../invite/Invite";
import { JsonValue } from "type-fest";
import { Wallet } from "../wallet/Wallet";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: bigint;
  invites?: Array<Invite>;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
  wallets?: Array<Wallet>;
};
