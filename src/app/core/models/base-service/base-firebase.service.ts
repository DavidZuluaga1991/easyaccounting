import { query } from '@angular/animations';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { from } from 'rxjs';
import { FilterFirebase } from '../filter-firebase/filter-firebase';

@Injectable({
  providedIn: 'root'
})
export class BaseFirebaseService<TModel> {

  constructor(protected db: AngularFireDatabase) { }
  
  public get(table: string, filter?: FilterFirebase) {
    const p = new Promise<TModel[]>((resolve, reject) => {
      let data: TModel[] = [];
      const db = this.db.database.ref(table);
      // const ref = db.orderByChild('date/mounth').equalTo(1);
      let query = null;
      if (filter) {
        query = db.orderByChild('date/mounth').equalTo(1);
      } else {
        query = db;
      }
      //db.child('mounth');//.orderByChild('date/mounth').equalTo(1);
      query.on("child_added", snapshot => {
        data.push(snapshot.val()); 
        return resolve(data);
      });
		});
    return from(p);
  }

  public posts(data: TModel) {
    this.db.database.ref('tax/').push(data);
  }
}
