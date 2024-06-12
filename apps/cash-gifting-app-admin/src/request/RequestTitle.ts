import { Request as TRequest } from "../api/request/Request";

export const REQUEST_TITLE_FIELD = "recipient";

export const RequestTitle = (record: TRequest): string => {
  return record.recipient?.toString() || String(record.id);
};
