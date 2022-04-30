import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICategory } from 'src/app/Models/icategory';
import { ISubCategory } from 'src/app/Models/ISubCategory';
import { CategoriesServiceService } from 'src/app/Services/categories-service.service';
import { SubCategoriesService } from 'src/app/Services/SubCategories.service';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss']
})
export class HomeHeaderComponent implements OnInit {
   localstorge:string
  Categories:ICategory[]=[]
  SubCategories:ISubCategory[]=[]
  constructor(private CategoriesService:CategoriesServiceService,
               private SubCategoriesService:SubCategoriesService,
               private router:Router)
                { 
                  this.localstorge=localStorage.getItem("lang")!;
                }

  ngOnInit(): void {

    this.CategoriesService.GetAllCategories().subscribe(
      _categories=>this.Categories=_categories
    )


    this.SubCategoriesService.GetAllSubCategories().subscribe(
      subcategories=>this.SubCategories=subcategories
    )


  }

  // map(id:number)
  // {

  //   this.router.navigate([`Category`,id])
  // }
  loclaztion(st:string){
    localStorage.setItem("lang",st)
    location.reload()
  }

}
