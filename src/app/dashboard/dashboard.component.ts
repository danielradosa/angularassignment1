import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { IData } from '../interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  datas: IData[] = [];

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe(data => {
      this.datas = data;
    });
  }

  logout() {
    sessionStorage.clear();
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
