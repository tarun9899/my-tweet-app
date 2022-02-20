import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs';
import { TweetDTO } from 'src/assets/models/tweetDTO';

@Injectable({
  providedIn: 'root'
})
export class TweetHomeService {

  constructor(private httpService: HttpClient) { }

  /*@method:postTweetService,
  @request:TweetDTO,
  @description:it is used for posting tweet.
  */
  public postTweetService(username: string, tweetReq: TweetDTO) {
    return this.httpService.post(`http://localhost:9092/api/v1.0/tweets/${username}/add`, tweetReq).pipe(map((data: any) => {
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
    return this.httpService.get(`http://localhost:9092/api/v1.0/tweets/all`).pipe(map((data: any) => {
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
  public deleteTweetService(username: string, tweetIdvalue: any) {
    return this.httpService.delete(`http://localhost:8081/api/v1.0/tweets/${username}/delete/${tweetIdvalue}`).pipe(map((data: any) => {
      return data;
    }),
      catchError((error: any) => {
        console.log('Error Message', error)
        return error.error;
      })
    );
  }
}
