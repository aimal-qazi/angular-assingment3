import { Component, OnInit } from '@angular/core';
import { CarsDataService } from '../vehicle/cars-data.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
})
export class CategoryListComponent implements OnInit {
  cars: any[] = [];
  cate: any;

  constructor(public service: CarsDataService) {}

  ngOnInit(): void {
    this.cars = this.service.list;
    this.cate = this.service.cat;
  }

  detail(index: any) {
    this.service.detail = this.cars[index];
  }
}
