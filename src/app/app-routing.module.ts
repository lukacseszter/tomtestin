/*
* File: app-routing-modulte.ts
* Author: Lukács Eszter
* Copyright: 2023, Lukács Eszter
* Group: Szoft II N
* Date: 2023-02-07
* Github: https://github.com/lukacseszter/
* Licenc: GNU GPL
*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { GithubComponent } from './github/github.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path: "about", component: AboutComponent},
  {path: "github", component: GithubComponent},
  {path: "main", component: MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
