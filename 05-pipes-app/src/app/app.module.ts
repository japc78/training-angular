import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ItemsModule } from './items/items.module';

// Config localization
import localeEs from '@angular/common/locales/es';
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs);
registerLocaleData(localeFr);


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    ItemsModule
  ],
  providers: [
    { provide: 'es-ES', useValue: 'es-ES' },
    { provide: 'en-US', useValue: 'en-US' },
    { provide: 'fr-CA', useValue: 'fr-CA' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
