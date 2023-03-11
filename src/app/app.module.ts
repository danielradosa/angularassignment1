import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { TimeSeriesTableComponent } from './time-series-table/time-series-table.component';
import { ChartComponent } from './chart/chart.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    DashboardComponent,
    LoginComponent,
    TimeSeriesTableComponent,
    ChartComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
