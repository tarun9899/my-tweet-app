import { Injectable } from '@angular/core';
import { TweetLoginService } from './tweet-login/tweet-login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthServicesService {

  constructor(private tweetLoginService: TweetLoginService) { }

  public LoginAndLogoutAuthenticatedServices(userid: any) {
    if (userid) {
      sessionStorage.setItem('userLoggedIn', 'true');
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('userLoggedIn')
    return !(user === null)
  }

  isUserLoggedOut() {
    sessionStorage.removeItem('userLoggedIn')
  }
}
