import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-time-series-table',
  templateUrl: './time-series-table.component.html',
  styleUrls: ['./time-series-table.component.css']
})
export class TimeSeriesTableComponent {
  data: any[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData().subscribe(data => {
      this.data = data;
    });
  }
}
