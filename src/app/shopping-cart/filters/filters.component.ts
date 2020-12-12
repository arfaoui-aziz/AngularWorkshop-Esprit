import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  minPrice : number;
  maxPrice : number;
  constructor() { }

  ngOnInit(): void {
  }

}
