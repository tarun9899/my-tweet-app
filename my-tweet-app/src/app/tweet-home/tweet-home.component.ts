import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tweet-home',
  templateUrl: './tweet-home.component.html',
  styleUrls: ['./tweet-home.component.css']
})
export class TweetHomeComponent implements OnInit {
public tweetList : any[]=[];
  constructor() { }

  ngOnInit(): void {
    this.tweetList=[];
  }

  onTweet(){
    let obj ={
      "name":"Raina",
      "tweet":"“Today and everyday, I am praying for you… I speak of blessings into your life. I pray for sunshine to light your way… And, I pray for god to hug you tight, when you face every challenge along the way.”"
    }
    this.tweetList.push(obj);
  }
}
