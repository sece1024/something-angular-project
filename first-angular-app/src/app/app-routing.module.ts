import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LoginPageComponent} from "./login-page/login-page.component";
import {appConstant} from "./app.constant";
import {OverviewPageComponent} from "./overview-page/overview-page.component";

const routes: Routes = [
  {path: '', redirectTo: appConstant.LOGIN_PAGE, pathMatch: "full"},
  {path: appConstant.LOGIN_PAGE, component: LoginPageComponent},
  {path: appConstant.OVERVIEW_PAGE, component: OverviewPageComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
