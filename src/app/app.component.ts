import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'easyaccounting';
  public viewMenu = false;

  @HostListener('document:click', ['$event.target'])
  onClick(targetElement: any) {
    if (targetElement.id === 'position_menu' || targetElement.id === 'icon_menu_1' || targetElement.id === 'icon_menu_2') {
      // console.log(targetElement.id, this.viewMenu);
      this.viewMenu = !this.viewMenu;
    } else {
      this.viewMenu = false;
    }
  }
}
