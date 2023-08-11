import { Component, OnInit } from '@angular/core';
import { CarsDataService } from '../cars-data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  listData: any[] = [];
  constructor(public service: CarsDataService) {}

  ngOnInit(): void {
    this.listData = this.service.list;
  }

  onDetail(index: number) {
    this.service.detail = this.service.list[index];
    this.service.cat = this.service.list[index].category;
  }
}
