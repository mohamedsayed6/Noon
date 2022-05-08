import { Ireview } from "./ireview";
import { ICategory } from "./icategory";
export interface IProduct {
  id: number;
  skuId: string;
  skuString: "";
  modelNumber: string;
  name: string;
  nameAr:string;
  price: number;
  quantity: number;
  discount: number;
  description: string;
  descriptionAr:string;
  imageThumb: string;
  imagesGallary: string[];
  categoryId: number;
  highlights: string[];
  specifications: Array<any>;
  available: boolean;
  brandId: number;
  brandName: string;
  overallRating: number;
  reviews: Ireview[];
  sellerId: string;
  sellerName: string;
  maxQuantityPerOrder: number;
  proCat: ICategory[];


  //   availableCount: number;
  //   availableColor: string;
  //   availableSize: string;
  //   availableSizeCount: number;
  //   availableSizeColor: string;
  //   availableSizeColorCount: number;
  //   reviews: object[];
  //   createdAt: Date;
  //   updatedAt: Date;
}
