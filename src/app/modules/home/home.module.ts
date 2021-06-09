import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { MatIconModule } from '@angular/material/icon';
import { FilesInterestComponent } from './components/files-interest/files-interest.component';


@NgModule({
  declarations: [
    HomeComponent,
    CalendarComponent,
    FilesInterestComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatIconModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
