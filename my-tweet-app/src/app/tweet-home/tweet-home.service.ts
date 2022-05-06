import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Subject } from 'rxjs';
import { TweetDTO } from 'src/assets/models/tweetDTO';

@Injectable({
  providedIn: 'root'
})
export class TweetHomeService {

  public onClose = new Subject<boolean>();
  onClose$ = this.onClose.asObservable();
  constructor(private httpService: HttpClient) { 
   
  }
  setClosePop(value:boolean){
    this.onClose.next(value);
  }
  /*@method:postTweetService,
  @request:TweetDTO,
  @description:it is used for posting tweet.
  */
  public postTweetService(username: string, tweetReq: TweetDTO) {
    return this.httpService.post(`http://localhost:8084/api/v1.0/tweets/${username}/add`, tweetReq).pipe(map((data: any) => {
      return data;
    }),
      catchError((error: any) => {
        console.log('Error Message', error)
        return error.error;
      })
    );
  }

  /*@method:postTweetService,
  @description:it is used for get all tweet.
  */
  public getAllTweetService() {
    return this.httpService.get(`http://localhost:8084/api/v1.0/tweets/all`).pipe(map((data: any) => {
      return data;
    }),
      catchError((error: any) => {
        console.log('Error Message', error)
        return error.error;
      })
    );
  }

   /*@method:postTweetService,
  @description:it is used for get all tweet.
  */
  public getAllTweetServiceByUsername(username:any) {
    return this.httpService.get(`http://localhost:8084/api/v1.0/tweets/${username}`).pipe(map((data: any) => {
      return data;
    }),
      catchError((error: any) => {
        console.log('Error Message', error)
        return error.error;
      })
    );
  }


  /*@method: deleteTweetService
 @request:tweetid,username,
 @description:it is used for delete tweet.
 */
  public deleteTweetService(username: string, tweetIdvalue: any,tweet:any) {
    return this.httpService.delete(`http://localhost:8084/api/v1.0/tweets/${username}/delete/${tweetIdvalue}/${tweet}`).pipe(
      catchError((error: any) => {
        console.log('Error Message', error)
        return error.error;
      })
    );
  }


   /*@method:postTweetService,
  @request:TweetDTO,
  @description:it is used for like tweet.
  */
  public likeTweetService(username: string, tweetIdvalue: any,tweetReq:any) {
    return this.httpService.put(`http://localhost:8084/api/v1.0/tweets/${username}/like/${tweetIdvalue}`,tweetReq).pipe(map((data: any) => {
      return data;
    }),
      catchError((error: any) => {
        console.log('Error Message', error)
        return error.error;
      })
    );
  }

    /*@method:postTweetService,
  @request:TweetDTO,
  @description:it is used for reply tweet.
  */
  public commentTweetService(username: string, tweetIdvalue: any,tweetReq:any) {
    return this.httpService.post(`http://localhost:8084/api/v1.0/tweets/${username}/reply/${tweetIdvalue}`,tweetReq).pipe(map((data: any) => {
      return data;
    }),
      catchError((error: any) => {
        console.log('Error Message', error)
        return error.error;
      })
    );
  }


  /*@method:postTweetService,
  @description:it is used for get all likes.
  */
  public getAllTweetLikeService() {
    return this.httpService.get(`http://localhost:8084/api/v1.0/tweets/likes/all`).pipe(map((data: any) => {
      return data;
    }),
      catchError((error: any) => {
        console.log('Error Message', error)
        return error.error;
      })
    );
  }

   /*@method:postTweetService,
  @description:it is used for get all comments.
  */
  public getAllTweetCommentsService() {
    return this.httpService.get(`http://localhost:8084/api/v1.0/tweets/allcomments`).pipe(map((data: any) => {
      return data;
    }),
      catchError((error: any) => {
        console.log('Error Message', error)
        return error.error;
      })
    );
  }

}


