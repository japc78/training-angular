import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {

  public menuItems: MenuItem[] = [];

  constructor() { }

    ngOnInit() {
        this.menuItems = [
          {
            label: 'Angular pipes',
            icon: 'pi pi-desktop',
            items: [
              {
                label: 'Dates and text',
                icon: 'pi pi-align-left',
                routerLink: '/'
              },
              {
                label: 'Numbers',
                icon: 'pi pi-dollar',
                routerLink: 'numbers'
              },
              {
                label: 'No commons',
                icon: 'pi pi-globe',
                routerLink: 'uncommon'
              },

            ]
          },
          {
            label: 'Custom pipes',
            icon: 'pi pi-cog',
            items: [
              {
                label: 'Other element',
                icon: 'pi pi-cog',
              }
            ]
          }
        ];
    }

}
