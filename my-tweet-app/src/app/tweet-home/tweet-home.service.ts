import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Subject } from 'rxjs';
import { TweetsConstants } from 'src/assets/constants/tweets-constants';
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
 //http://localhost:8084/api/v1.0/tweets/${username}/add
 // https://r0bv8uu3j6.execute-api.us-east-1.amazonaws.com/Prod-Env/tweets/{username}/add
  public postTweetService(username: string, tweetReq: TweetDTO) {
    return this.httpService.post(`${TweetsConstants.tweetsUrls.tweetsBaseUrl}${TweetsConstants.tweetUrls.tweets}
    /${username}${TweetsConstants.tweetUrls.addTweet}`, tweetReq).pipe(map((data: any) => {
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
 //http://localhost:8084/api/v1.0/tweets/all
 //https://r0bv8uu3j6.execute-api.us-east-1.amazonaws.com/Prod-Env/tweets/all
  public getAllTweetService() {
    return this.httpService.get(`${TweetsConstants.tweetsUrls.tweetsBaseUrl}${TweetsConstants.tweetUrls.allAweets}`).pipe(map((data: any) => {
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
 //http://localhost:8084/api/v1.0/tweets/${username}
 //https://r0bv8uu3j6.execute-api.us-east-1.amazonaws.com/Prod-Env/tweets/{username}/all
  public getAllTweetServiceByUsername(username:any) {
    return this.httpService.get(`${TweetsConstants.tweetsUrls.tweetsBaseUrl}${TweetsConstants.tweetUrls.tweets}
    /${username}${TweetsConstants.tweetUrls.allTweetByName}`).pipe(map((data: any) => {
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
//http://localhost:8084/api/v1.0/tweets/${username}/delete/${tweetIdvalue}/${tweet}
// https://r0bv8uu3j6.execute-api.us-east-1.amazonaws.com/Prod-Env/tweets/{username}/delete/{id}/{tweet}
  public deleteTweetService(username: string, tweetIdvalue: any,tweet:any) {
    return this.httpService.delete(`${TweetsConstants.tweetsUrls.tweetsBaseUrl}${TweetsConstants.tweetUrls.tweets}
    /${username}${TweetsConstants.tweetUrls.deleteTweet}/${tweetIdvalue}/${tweet}`).pipe(
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
 //http://localhost:8084/api/v1.0/tweets/${username}/like/${tweetIdvalue}
 // https://r0bv8uu3j6.execute-api.us-east-1.amazonaws.com/Prod-Env/tweets/{username}/like/{id}
  public likeTweetService(username: string, tweetIdvalue: any,tweetReq:any) {
    return this.httpService.put(`${TweetsConstants.tweetsUrls.tweetsBaseUrl}${TweetsConstants.tweetUrls.tweets}
    /${username}${TweetsConstants.tweetUrls.like}/${tweetIdvalue}`,tweetReq).pipe(map((data: any) => {
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
 //http://localhost:8084/api/v1.0/tweets/${username}/reply/${tweetIdvalue}
 //https://r0bv8uu3j6.execute-api.us-east-1.amazonaws.com/Prod-Env/tweets/{username}/reply/{id}
  public commentTweetService(username: string, tweetIdvalue: any,tweetReq:any) {
    return this.httpService.post(`${TweetsConstants.tweetsUrls.tweetsBaseUrl}${TweetsConstants.tweetUrls.tweets}
    /${username}${TweetsConstants.tweetUrls.reply}/${tweetIdvalue}`,tweetReq).pipe(map((data: any) => {
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
 //http://localhost:8084/api/v1.0/tweets/likes/all
 //https://r0bv8uu3j6.execute-api.us-east-1.amazonaws.com/Prod-Env/tweets/like/all
  public getAllTweetLikeService() {
    return this.httpService.get(`${TweetsConstants.tweetsUrls.tweetsBaseUrl}${TweetsConstants.tweetUrls.tweets}
    ${TweetsConstants.tweetUrls.likeALL}`).pipe(map((data: any) => {
      return data;
    }),
      catchError((error: any) => {
        console.log('Error Message', error)
        return error.error;
      })
    );
  }

  //  /*@method:postTweetService,
  // @description:it is used for get all comments.
  // */
  // public getAllTweetCommentsService() {
  //   return this.httpService.get(`http://localhost:8084/api/v1.0/tweets/allcomments`).pipe(map((data: any) => {
  //     return data;
  //   }),
  //     catchError((error: any) => {
  //       console.log('Error Message', error)
  //       return error.error;
  //     })
  //   );
  // }

}


