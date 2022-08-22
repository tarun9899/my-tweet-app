import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Subject } from 'rxjs';
import { UserRegistrationDTO } from 'src/assets/models/UserRegistrationDTO';
import { ResetPasswordDTO } from 'src/assets/models/ResetPasswordDTO';
import { UserLoginDTO } from 'src/assets/models/UserLoginDTO';
import { MessageDTO } from 'src/assets/models/MessageDTO';
import { TweetsConstants } from 'src/assets/constants/tweets-constants';


@Injectable({
  providedIn: 'root'
})
export class TweetLoginService {
  private messageObject = new Subject<MessageDTO>();
  messageObject$ = this.messageObject.asObservable();

  constructor(private httpService: HttpClient) { }

  setMessageObject(data: any) {
    this.messageObject.next(data)
  }

  /* 
  @method:userLoginService,
  @request:UserLoginDTO,
  @description:it is used for logging user services.
  */
  public userLoginService(userRequest: UserLoginDTO) {
    //https://r0bv8uu3j6.execute-api.us-east-1.amazonaws.com/Prod-Env/users/login
    //http://localhost:9095/api/v1.0/tweets/login
    return this.httpService.post(`${TweetsConstants.tweetsUrls.tweetsBaseUrl}${TweetsConstants.tweetsusersUrls.users}${TweetsConstants.tweetsusersUrls.login}`, userRequest).pipe(map((data: any) => {
      return data;
    }),
      catchError((error: any) => {
        console.log('Error Message', error)
        return error.error;
      })
    );
  }

  /* 
  @method:userRegistrationService,
  @request:UserRegistrationDTO,
  @description:it is used for new  user registration services.
  */
  public userRegistrationService(userRegRequest: UserRegistrationDTO) {
    //https://r0bv8uu3j6.execute-api.us-east-1.amazonaws.com/Prod-Env/users/register
    //http://localhost:9095/api/v1.0/tweets/register
    return this.httpService.post(`${TweetsConstants.tweetsUrls.tweetsBaseUrl}${TweetsConstants.tweetsusersUrls.users}${TweetsConstants.tweetsusersUrls.register}`, userRegRequest).pipe(map((data: any) => {
      return data;
    }),
      catchError((error: any) => {
        console.log('Error Message', error)
        return error.error;
      })
    );
  }

  /* 
  @method:resetPasswordService,
  @request:ResetPasswordDTO,
  @description:it is used for resetting password for user services.
  */
  public resetPasswordService(username: string, resetPsdRequest: ResetPasswordDTO) {
    //http://localhost:9095/api/v1.0/tweets/${username}/forgot
    // https://r0bv8uu3j6.execute-api.us-east-1.amazonaws.com/Prod-Env/users/{username}/forgot
    return this.httpService.put(`${TweetsConstants.tweetsUrls.tweetsBaseUrl}${TweetsConstants.tweetsusersUrls.users}/${username}${TweetsConstants.tweetsusersUrls.userForgot}`, resetPsdRequest).pipe(map((data: any) => {
      return data;
    }),
      catchError((error: any) => {
        console.log('Error Message', error)
        return error.error;
      })
    );
  }

  /* 
  @method:searchByNameService,
  @description:it is used for get user by name services.
  */
  public searchByNameService(username: string | null) {
    // https://r0bv8uu3j6.execute-api.us-east-1.amazonaws.com/Prod-Env/users/users/search/{username}
    // http://localhost:9095/api/v1.0/tweets/users/search/${username}
    return this.httpService.get(`${TweetsConstants.tweetsUrls.tweetsBaseUrl}${TweetsConstants.tweetsusersUrls.userSearch}/${username}`).pipe(map((data: any) => {
      return data;
    }),
      catchError((error: any) => {
        console.log('Error Message', error)
        return error.error;
      })
    );
  }

  /* 
  @method:getALLUserService,
  @description:it is used for get all user services.
  */
  public getALLUserService() {
    //http://localhost:9095/api/v1.0/tweets/users/all
    // https://r0bv8uu3j6.execute-api.us-east-1.amazonaws.com/Prod-Env/users/users/all
    return this.httpService.get(`${TweetsConstants.tweetsUrls.tweetsBaseUrl}${TweetsConstants.tweetsusersUrls.allUser}`).pipe(map((data: any) => {
      return data;
    }),
      catchError((error: any) => {
        console.log('Error Message', error)
        return error.error;
      })
    );
  }

}
