export interface IFilesStorage {
  name: string;
  url: string;
}

export class FilesStorage implements IFilesStorage {
  name: string;
  url: string;

  constructor(storage: IFilesStorage) {
      this.name = storage.name;
      this.url = storage.url;
  }

}
