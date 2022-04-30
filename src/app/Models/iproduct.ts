export interface IProduct {
  id: number;
  name: string;
  price: number;
  quantity: number;
  discount: number;
  description: string;
  imageThumb: string;
  imagesGallary: string[];
  categoryId: number;
  highlights: string[];
  specifications: object[];
  available: boolean;
  //   availableCount: number;
  //   availableColor: string;
  //   availableSize: string;
  //   availableSizeCount: number;
  //   availableSizeColor: string;
  //   availableSizeColorCount: number;
  //   reviews: object[];
  //   rating: number;
  //   reviewsCount: number;
  //   createdAt: Date;
  //   updatedAt: Date;
}
