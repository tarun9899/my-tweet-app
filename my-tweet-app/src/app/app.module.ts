import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TweetLoginComponent } from './tweet-login/tweet-login.component';
import { TweetHomeComponent } from './tweet-home/tweet-home.component';
import { HttpClientModule } from  '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TweetRegistrationComponent } from './tweet-registration/tweet-registration.component';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TweetResetPasswordComponent } from './tweet-reset-password/tweet-reset-password.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownConfig, BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { LoaderComponent } from './loader-spinner/loader.component';
import { CommentModalComponent } from './comment-modal/comment-modal-component';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { ProfileComponentComponent } from './profile-component/profile-component.component';

import { ContactComponentComponent } from './contact-component/contact-component.component';

import { AgGridModule } from 'ag-grid-angular';
import { ReportComponentComponent } from './report-component/report-component.component';
import { TweetLogoutComponent } from './tweet-logout/tweet-logout.component';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';

@NgModule({
  declarations: [
    AppComponent,
    TweetLoginComponent,
    TweetHomeComponent,
    TweetRegistrationComponent,
    TweetResetPasswordComponent,
    LoaderComponent,
    CommentModalComponent,
    ProfileComponentComponent,
    ContactComponentComponent,
    ReportComponentComponent,
    TweetLogoutComponent
  ],
  imports: [
    AgGridModule,
    TypeaheadModule.forRoot(),
    ToastrModule.forRoot({}),
    
    BsDatepickerModule,
    BrowserAnimationsModule,
    ModalModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BsDropdownModule,
    BsDatepickerModule,
    ReactiveFormsModule
  ],
  providers: [BsModalService,BsDropdownConfig,ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
