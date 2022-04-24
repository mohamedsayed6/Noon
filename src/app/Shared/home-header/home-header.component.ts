import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import { CategoriesServiceService } from 'src/app/Services/categories-service.service';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss']
})
export class HomeHeaderComponent implements OnInit {

  Categories:ICategory[]=[]
  constructor(private CategoriesService:CategoriesServiceService) { }

  ngOnInit(): void {

    this.CategoriesService.GetAllCategories().subscribe(
      _categories=>this.Categories=_categories
    )


  }


}
