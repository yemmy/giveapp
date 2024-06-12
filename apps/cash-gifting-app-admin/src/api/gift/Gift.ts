export type Gift = {
  amount: number | null;
  createdAt: Date;
  id: bigint;
  recipient: string | null;
  sender: string | null;
  status: string | null;
  updatedAt: Date;
};
