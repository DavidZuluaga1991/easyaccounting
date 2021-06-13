import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { BaseStorageService } from '../../models/base-service/base-storage.service';
import { FilesStorage } from '../../models/files-interest/files-storage';

@Injectable({
  providedIn: 'root'
})
export class FilesInterestService extends BaseStorageService<FilesStorage> {
  constructor(protected storage: AngularFireStorage) {
    super(storage);
  }
}
