import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { IData } from '../interface';

@Component({
  selector: 'app-time-series-table',
  templateUrl: './time-series-table.component.html',
  styleUrls: ['./time-series-table.component.css']
})
export class TimeSeriesTableComponent {
  datas: IData[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe(data => {
      this.datas = data;
    });
  }

  openEditDialog(item: IData): void {
    const value = prompt(`Enter new value for ${item.time}:`, item.value.toString());
    if (value !== null) {
      const newValue = parseFloat(value);
      if (!isNaN(newValue)) {
        item.value = newValue;
      }
    }
  }
}
