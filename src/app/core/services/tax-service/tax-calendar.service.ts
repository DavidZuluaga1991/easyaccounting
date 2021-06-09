import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
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
