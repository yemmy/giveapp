import { InviteCreateNestedManyWithoutEventsInput } from "./InviteCreateNestedManyWithoutEventsInput";

export type EventCreateInput = {
  date?: Date | null;
  invites?: InviteCreateNestedManyWithoutEventsInput;
  name?: string | null;
  organizer?: string | null;
};
