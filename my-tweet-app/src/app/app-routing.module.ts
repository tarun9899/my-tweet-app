import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponentComponent } from './contact-component/contact-component.component';
import { ProfileComponentComponent } from './profile-component/profile-component.component';
import { ReportComponentComponent } from './report-component/report-component.component';
import { RouteGaurdService } from './route-gaurd.service';

import { TweetHomeComponent } from './tweet-home/tweet-home.component';
import { TweetLoginComponent } from './tweet-login/tweet-login.component';
import { TweetLogoutComponent } from './tweet-logout/tweet-logout.component';
import { TweetRegistrationComponent } from './tweet-registration/tweet-registration.component';

const routes: Routes = [
  {
    path:'',component:TweetLoginComponent
  },
  {
    path:'login/tweet',component:TweetLoginComponent
  },
    {
    path:'home/:name',component:TweetHomeComponent,canActivate:[RouteGaurdService]
    },
    {    
    path:'registration',component:TweetRegistrationComponent,canActivate:[RouteGaurdService]
  },
  {
    path:'resetpassword',component:TweetRegistrationComponent,canActivate:[RouteGaurdService]
  },
  {
    path:'profile/:name',component:ProfileComponentComponent,canActivate:[RouteGaurdService]
  },
  {
    path:'report',component:ReportComponentComponent,canActivate:[RouteGaurdService]
  },
  {
    path:'contact',component:ContactComponentComponent,canActivate:[RouteGaurdService]
  },
  {
    path:'logout',component:TweetLogoutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
