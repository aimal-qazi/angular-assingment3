import { Component, OnInit } from '@angular/core';
import { CarsDataService } from '../cars-data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  details: any[] = [];
  constructor(public service: CarsDataService) {}

  ngOnInit(): void {
    this.details.push(this.service.detail);
  }
}
