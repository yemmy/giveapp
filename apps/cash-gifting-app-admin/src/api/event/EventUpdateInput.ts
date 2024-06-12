import { InviteUpdateManyWithoutEventsInput } from "./InviteUpdateManyWithoutEventsInput";

export type EventUpdateInput = {
  date?: Date | null;
  invites?: InviteUpdateManyWithoutEventsInput;
  name?: string | null;
  organizer?: string | null;
};
