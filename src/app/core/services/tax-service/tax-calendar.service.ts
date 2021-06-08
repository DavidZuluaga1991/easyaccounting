import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import * as firebase from 'firebase';
import { from, Observable, of } from 'rxjs';
import { BaseFirebaseService } from '../../models/base-service/base-firebase.service';
import { TaxCalendar } from '../../models/tax-calendar/tax-calendar';

@Injectable({
  providedIn: 'root'
})
export class TaxCalendarService extends BaseFirebaseService<TaxCalendar> {

  constructor(protected db: AngularFireDatabase) {
    super(db);
  }
  
}
