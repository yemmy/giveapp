import { User } from "../user/User";

export type Wallet = {
  balance: number | null;
  createdAt: Date;
  id: bigint;
  updatedAt: Date;
  user?: User | null;
};
