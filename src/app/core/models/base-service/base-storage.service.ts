import { query } from '@angular/animations';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { ListResult } from '@angular/fire/storage/interfaces';
import { from, Observable } from 'rxjs';
import { FilesStorage } from '../files-interest/files-storage';
import { FilterFirebase } from '../filter-firebase/filter-firebase';

@Injectable({
  providedIn: 'root'
})
export class BaseStorageService<TModel> {

  constructor(protected storage: AngularFireStorage) { }

  public get(path: string): Observable<ListResult> {
    return  this.storage.ref(path).listAll();
  }

  public posts(data: TModel) {
    // this.storage.
  }
}
