import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TweetDTO } from 'src/assets/models/tweetDTO';
import { TweetLoginService } from '../tweet-login/tweet-login.service';
import { TweetHomeService } from './tweet-home.service';


@Component({
  selector: 'app-tweet-home',
  templateUrl: './tweet-home.component.html',
  styleUrls: ['./tweet-home.component.css']
})
export class TweetHomeComponent implements OnInit {

  public tweetList: any[] = [];
  public userFullName!: string;
  public tweetDataList: any;
  public userInfoList: any;
  public username!:string;
  public postTweetValue!:string;
  items: string[] = [
    'The first choice!',
    'And another choice for you.',
    'but wait! A third!'
  ];
 
 
  constructor(private activatedRouteValue: ActivatedRoute, private userLoginService: TweetLoginService,
    private tweetHomeService: TweetHomeService) { }

  ngOnInit(): void {
    this.activatedRouteValue.paramMap.subscribe(paramValue => {
      if (paramValue.get('name') !== null) {
        this.userLoginService.searchByNameService(paramValue.get('name')).subscribe(data => {
          console.log(data)
          this.username = data.userName;
          this.userFullName = `${data.lastName} ${data.firstName}`;
        })
      }
    })

    this.getALLTweets();

  }


  public getALLTweets() {
    this.tweetHomeService.getAllTweetService().subscribe((data: any) => {
      this.tweetDataList = data;
      this.userLoginService.getALLUserService().subscribe(userInfo => {
        this.userInfoList = userInfo;
        this.tweetDataList.forEach((tweetValue: any) => {
          this.userInfoList.forEach((userValue: any) => {
            if (tweetValue.userId == userValue.userId) {
              let obj = {
                "name": userValue.userName,
                "tweet": tweetValue.tweets,
                "like": tweetValue.likeTweetsCount,
                "comment": tweetValue.commentTweetsCount
              }
              this.tweetList.push(obj);
            }
          });
        });
      })
    });
  }


  public postTweet(){
    let postTweetRequest = {} as TweetDTO;
    postTweetRequest.tweets =this.postTweetValue;
    this.tweetHomeService.postTweetService(this.username,postTweetRequest).subscribe(postValue=>{
      this.getALLTweets();
      this.postTweetValue='';
    })
  }


  public deleteTweet(){
    
    this.tweetHomeService.deleteTweetService(this.username,'one').subscribe(deleteValue=>{
      this.getALLTweets();
    })
  }
  public logout(event:any){
    console.log(event)
  }

  onHidden(): void {
    console.log('Dropdown is hidden');
  }
  onShown(): void {
    console.log('Dropdown is shown');
  }
  isOpenChange(): void {
    console.log('Dropdown state is changed');
  }
}


