import { SortOrder } from "../../util/SortOrder";

export type GiftOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  recipient?: SortOrder;
  sender?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
