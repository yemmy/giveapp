export type Request = {
  amount: number | null;
  createdAt: Date;
  id: bigint;
  recipient: string | null;
  sender: string | null;
  status: string | null;
  updatedAt: Date;
};
