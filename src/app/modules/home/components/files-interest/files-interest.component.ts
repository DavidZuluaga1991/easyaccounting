import { Component, OnInit } from '@angular/core';
import { FilesStorage } from 'src/app/core/models/files-interest/files-storage';
import { FilesInterestService } from 'src/app/core/services/files-interest/files-interest.service';

@Component({
  selector: 'app-files-interest',
  templateUrl: './files-interest.component.html',
  styleUrls: ['./files-interest.component.scss']
})
export class FilesInterestComponent implements OnInit {
  public files: FilesStorage[] = [];

  constructor(private store: FilesInterestService) { }

  ngOnInit(): void {

    this.store.get('/FilesInterest/').subscribe(item => {
        item.items.forEach(i => {
          i.getDownloadURL().then(url => {
            // console.log(data);
            this.files.push( { name: i.name, url: url } );
          });
        });
      });

  }

}
