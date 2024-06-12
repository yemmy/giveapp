import { Event } from "../event/Event";
import { User } from "../user/User";

export type Invite = {
  createdAt: Date;
  event?: Event | null;
  id: bigint;
  status: string | null;
  updatedAt: Date;
  user?: User | null;
};
