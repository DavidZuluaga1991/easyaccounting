import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { LayoutMainComponent } from './layouts/layout-main/layout-main.component';
import { RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

@NgModule({
  declarations: [
    LayoutMainComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule,
  ],
  exports: [
    LayoutMainComponent
  ]
})
export class SharedModule { }
