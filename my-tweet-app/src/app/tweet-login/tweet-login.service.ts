import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLoginDTO } from 'src/assets/UserLoginDTO';


@Injectable({
  providedIn: 'root'
})
export class TweetLoginService {

  constructor(private httpService:HttpClient) { }

  public loginService(userRequest:UserLoginDTO){
   return this.httpService.post("http://localhost:9092/api/v1.0/tweets/login",userRequest);
  }
}
