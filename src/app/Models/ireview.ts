import { Rate } from "./rate.enum";
export interface Ireview {
  id: number;
  productId: number;
  customerId: number;
  customerName: string;
  review: string;
  rating: Rate;
  createdAt: Date;
}
