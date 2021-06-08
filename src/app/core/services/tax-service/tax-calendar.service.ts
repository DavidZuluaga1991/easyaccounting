import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { BaseFirebaseService } from '../../models/base-service/base-firebase.service';
import { TaxCalendar } from '../../models/tax-calendar/tax-calendar';
import { AngularFireStorage } from '@angular/fire/storage';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class TaxCalendarService extends BaseFirebaseService<TaxCalendar> {

  constructor(protected db: AngularFireDatabase, private storage: AngularFireStorage) {
    super(db);
  }

  public postFileUpload() {
    const p = this.storage.ref('/').listAll();
    p.subscribe(x => {
      x.items.forEach(y => {
        console.log(y.name);
      });
    });
    // console.log(p);
  }

}
