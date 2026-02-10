import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {DividerModule} from 'primeng/divider';
import {FieldsetModule} from 'primeng/fieldset';
import {InputTextModule} from 'primeng/inputtext';
import {MenubarModule} from 'primeng/menubar';
import {PanelModule} from 'primeng/panel';
import {ToastModule} from 'primeng/toast';



@NgModule({
  declarations: [],
  exports: [
    ButtonModule,
    CardModule,
    DividerModule,
    FieldsetModule,
    InputTextModule,
    MenubarModule,
    PanelModule,
    ToastModule,
  ]
})
export class PrimeNgModule { }
