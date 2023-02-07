/*
* File: app.modulte.ts
* Author: Lukács Eszter
* Copyright: 2023, Lukács Eszter
* Group: Szoft II N
* Date: 2023-02-07
* Github: https://github.com/lukacseszter/
* Licenc: GNU GPL
*/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { GithubComponent } from './github/github.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    GithubComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
