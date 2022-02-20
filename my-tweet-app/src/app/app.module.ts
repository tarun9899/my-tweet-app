import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TweetLoginComponent } from './tweet-login/tweet-login.component';
import { TweetHomeComponent } from './tweet-home/tweet-home.component';
import { HttpClientModule } from  '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TweetRegistrationComponent } from './tweet-registration/tweet-registration.component';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TweetResetPasswordComponent } from './tweet-reset-password/tweet-reset-password.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
@NgModule({
  declarations: [
    AppComponent,
    TweetLoginComponent,
    TweetHomeComponent,
    TweetRegistrationComponent,
    TweetResetPasswordComponent
  ],
  imports: [
    BsDatepickerModule,
    BrowserAnimationsModule,
    ModalModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BsDropdownModule.forRoot()
  ],
  providers: [BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
