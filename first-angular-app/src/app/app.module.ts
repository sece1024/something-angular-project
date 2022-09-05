import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './page/login-page/login-page.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterLink, RouterLinkWithHref, RouterOutlet} from "@angular/router";
import { OverviewPageComponent } from './page/overview-page/overview-page.component';
import {FormsModule} from "@angular/forms";
import { DigitalBoardComponent } from './digital-board/digital-board.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    OverviewPageComponent,
    DigitalBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    RouterLinkWithHref,
    RouterLink,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
