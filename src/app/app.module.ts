import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { ru_RU } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import ru from '@angular/common/locales/ru';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NzInputModule} from "ng-zorro-antd/input";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzCardModule} from "ng-zorro-antd/card";
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzLayoutModule} from "ng-zorro-antd/layout";

registerLocaleData(ru);

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        NzInputModule,
        NzButtonModule,
        NzIconModule,
        NzCardModule,
        NzGridModule,
        NzLayoutModule
    ],
  providers: [{ provide: NZ_I18N, useValue: ru_RU }],
  bootstrap: [AppComponent]
})
export class AppModule { }
