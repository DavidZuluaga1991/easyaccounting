import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public viewMenu = false;
  constructor() { }

  @HostListener('document:click', ['$event.target'])
  onClick(targetElement: any) {
    if (targetElement.id === 'position_menu' || targetElement.id === 'icon_menu_1' || targetElement.id === 'icon_menu_2') {
      // console.log(targetElement.id, this.viewMenu);
      this.viewMenu = !this.viewMenu;
    } else {
      this.viewMenu = false;
    }
  }

  ngOnInit(): void {
  }

}
