import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterLink, RouterLinkWithHref, RouterOutlet} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DigitalBoardComponent } from './modules/digital-board/digital-board.component';
import {LoginPageComponent} from "./modules/login-page/login-page.component";
import {OverviewPageComponent} from "./modules/overview-page/overview-page.component";
import {BackgroudChangeDirective} from "./directives/board/backgroud-change.directive";

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    OverviewPageComponent,
    DigitalBoardComponent,
    BackgroudChangeDirective
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterOutlet,
        RouterLinkWithHref,
        RouterLink,
        FormsModule,
        ReactiveFormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
