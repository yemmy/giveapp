import { Invite as TInvite } from "../api/invite/Invite";

export const INVITE_TITLE_FIELD = "status";

export const InviteTitle = (record: TInvite): string => {
  return record.status?.toString() || String(record.id);
};
