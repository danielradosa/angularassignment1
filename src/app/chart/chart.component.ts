import { Component, Input, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import type { ChartData, ChartOptions } from 'chart.js';
import { IData } from '../interface';

Chart.register(...registerables);

@Component({
  selector: 'app-chart',
  template: '<canvas width="1160px" height="420px"></canvas>',
})
export class ChartComponent implements OnInit {
  @Input() data: IData[] = [];

  constructor() {}

  ngOnInit(): void {
    const chartData: ChartData = {
      labels: this.data.map((d) => {
        const date = new Date(d.time);
        return `${date.getFullYear()}-${(date.getMonth() + 1)
          .toString()
          .padStart(2, '0')}-${date
          .getDate()
          .toString()
          .padStart(2, '0')} ${date.getHours()}.${date.getMinutes()}.${date.getSeconds()}`;
      }),
      datasets: [
        {
          label: 'Values',
          data: this.data.map((d) => Number(d.value.toFixed(2))),
        },
      ],
    };

    const chartOptions: ChartOptions = {
      responsive: true,
      maintainAspectRatio: false
    };

    const canvas = document.querySelector('canvas');
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const chart = new Chart(ctx, {
          type: 'line',
          data: chartData,
          options: chartOptions,
        });

        setInterval(() => {
          chart.data.labels = this.data
            .slice(-30)
            .map((d) => {
              const date = new Date(d.time);
              return `${date.getFullYear()}-${(date.getMonth() + 1)
                .toString()
                .padStart(2, '0')}-${date
                .getDate()
                .toString()
                .padStart(2, '0')} ${date.getHours()}.${date.getMinutes()}.${date.getSeconds()}`;
            });
          chart.data.datasets[0].data = this.data
            .slice(-30)
            .map((d) => Number(d.value.toFixed(2)));
          chart.update();
        }, 1000);
      }
    }
  }
}
