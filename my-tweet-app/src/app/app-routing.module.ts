import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TweetHomeComponent } from './tweet-home/tweet-home.component';
import { TweetLoginComponent } from './tweet-login/tweet-login.component';
import { TweetRegistrationComponent } from './tweet-registration/tweet-registration.component';

const routes: Routes = [
  {
    path:'',component:TweetLoginComponent},
    {
    path:'login',component:TweetHomeComponent
  },{
    path:'registration',component:TweetRegistrationComponent
  },
  {
    path:'resetpassword',component:TweetRegistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
