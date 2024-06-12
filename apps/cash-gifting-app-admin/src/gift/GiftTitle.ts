import { Gift as TGift } from "../api/gift/Gift";

export const GIFT_TITLE_FIELD = "recipient";

export const GiftTitle = (record: TGift): string => {
  return record.recipient?.toString() || String(record.id);
};
