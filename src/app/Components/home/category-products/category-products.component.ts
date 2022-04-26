import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.component.html',
  styleUrls: ['./category-products.component.scss']
})
export class CategoryProductsComponent implements OnInit {

  currentCID:number=0;
  Products:IProduct[]=[]
  page:number=1;
  count:number=0;
  productSize:number=20;
  productSizes:any=[5,10,15,20];

  constructor(private activeRout:ActivatedRoute,
              private productsService:ProductsService) { }

  ngOnInit(): void {

    this.activeRout.paramMap.subscribe(paramMap=>{
      this.currentCID=Number(paramMap.get('pid'))


      this.productsService.GetProductsByCategoryId(this.currentCID).subscribe(
        productlist=>this.Products=productlist)

    })





  }



  onDataChange(event:any)
{
  this.page=event
}

onSizeChange(event:any)
{
  this.productSize=event.target.value;
  this.page=1
}

}
