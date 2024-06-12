import { Invite } from "../invite/Invite";

export type Event = {
  createdAt: Date;
  date: Date | null;
  id: bigint;
  invites?: Array<Invite>;
  name: string | null;
  organizer: string | null;
  updatedAt: Date;
};
