import { Rate } from "./rate.enum";
export interface Ireview {
  id: number;
  productId: number;
  customerId: number;
  customerName: string;
  rating: Rate;
  comment: string;
  createdAt: Date;
}
