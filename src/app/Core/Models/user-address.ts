import { Iorder } from './iorder';
import { Iuser } from './iuser';

export interface UserAddress {
  id: number;
  street: string;
  city: string;
  postalCode: number;
  isPrimary: boolean;
}