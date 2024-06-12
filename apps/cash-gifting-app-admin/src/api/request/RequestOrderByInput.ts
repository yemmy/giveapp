import { SortOrder } from "../../util/SortOrder";

export type RequestOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  recipient?: SortOrder;
  sender?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
