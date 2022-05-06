import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Subject } from 'rxjs';
import { UserRegistrationDTO } from 'src/assets/models/UserRegistrationDTO';
import { ResetPasswordDTO } from 'src/assets/models/ResetPasswordDTO';
import { UserLoginDTO } from 'src/assets/models/UserLoginDTO';
import { MessageDTO } from 'src/assets/models/MessageDTO';


@Injectable({
  providedIn: 'root'
})
export class TweetLoginService {
  private messageObject = new Subject<MessageDTO>();
  messageObject$ = this.messageObject.asObservable();

  constructor(private httpService: HttpClient) { }

  setMessageObject(data:any){
    this.messageObject.next(data)
  }

  /* 
  @method:userLoginService,
  @request:UserLoginDTO,
  @description:it is used for logging user services.
  */
  public  userLoginService(userRequest: UserLoginDTO) {
    return this.httpService.post(`http://localhost:8084/api/v1.0/tweets/login`, userRequest).pipe(map((data: any) => {
      return data;
    }),
      catchError((error: any) => {
        console.log('Error Message',error)
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
    return this.httpService.post(`http://localhost:8084/api/v1.0/tweets/register`, userRegRequest).pipe(map((data: any) => {
      return data;
    }),
      catchError((error: any) => {
        console.log('Error Message',error)
        return error.error;
      })
    );
  }

  /* 
  @method:resetPasswordService,
  @request:ResetPasswordDTO,
  @description:it is used for resetting password for user services.
  */
  public resetPasswordService(username:string,resetPsdRequest:ResetPasswordDTO){
    return this.httpService.put(`http://localhost:8084/api/v1.0/tweets/${username}/forgot`, resetPsdRequest).pipe(map((data: any) => {
      return data;
    }),
      catchError((error: any) => {
        console.log('Error Message',error)
        return error.error;
      })
    );
  }

  /* 
  @method:searchByNameService,
  @description:it is used for get user by name services.
  */
  public searchByNameService(username:string | null){
    return this.httpService.get(`http://localhost:8084/api/v1.0/tweets/users/search/${username}`).pipe(map((data: any) => {
      return data;
    }),
      catchError((error: any) => {
        console.log('Error Message',error)
        return error.error;
      })
    );
  }

  /* 
  @method:getALLUserService,
  @description:it is used for get all user services.
  */
  public getALLUserService(){
    return this.httpService.get(`http://localhost:8084/api/v1.0/tweets/users/all`).pipe(map((data: any) => {
      return data;
    }),
      catchError((error: any) => {
        console.log('Error Message',error)
        return error.error;
      })
    );
  }

}
