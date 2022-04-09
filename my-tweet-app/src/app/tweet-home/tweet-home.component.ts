import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { TweetDTO } from 'src/assets/models/tweetDTO';
import { TweetLikeDTO } from 'src/assets/models/TweetLikeDTO';
import { AuthServicesService } from '../auth-services.service';
import { CommentModalComponent } from '../comment-modal/comment-modal-component';
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
  public tweetLikeDataList: TweetLikeDTO[] = [];
  public userInfoList: any;
  public username!: string;
  public postTweetValue!: string;
  public modalRef?: BsModalRef;
  public items: any[] = [{
    'key': 'Delete',
    'value': './assets/img/bin.png'
  },
  {
    'key': 'Re-tweet',
    'value': './assets/img/retweet.png'
  }
  ];
  public tweetPopData: any[] = [];
  public tweetData!: any;
  public searchedValue!: any;
  public tweetObj!: { tweetId: any; name: any; tweet: any; like: any; comment: any; };
  public commentComponentConfig!: any;
  public namesList: any[] = [];

  constructor(private activatedRouteValue: ActivatedRoute, private userLoginService: TweetLoginService,
    private tweetHomeService: TweetHomeService, private modalService: BsModalService,
    private toastrservice: ToastrService, private authServicesService: AuthServicesService, private router: Router) {

  }

  ngOnInit(): void {
    this.activatedRouteValue.paramMap.subscribe(paramValue => {
      if (paramValue.get('name') !== null) {
        this.userLoginService.searchByNameService(paramValue.get('name')).subscribe(data => {
          this.username = data.userName;
          this.userFullName = `${data.lastName} ${data.firstName}`;
        })
      }
    })
    this.userLoginService.getALLUserService().subscribe(data => {
      data.forEach((dataValue: any) => {
        this.namesList.push(dataValue.userName);
      });
      console.log(this.namesList);
    });
    this.getALLTweets();
  }


  public getALLTweets() {
    this.tweetList = [];
    this.tweetDataList = [];
    this.tweetHomeService.getAllTweetService().subscribe((data: any) => {
      this.tweetDataList = data;
      this.userLoginService.getALLUserService().subscribe(userInfo => {
        this.userInfoList = userInfo;
        this.tweetDataList.forEach((tweetValue: any) => {
          this.userInfoList.forEach((userValue: any) => {
            if (tweetValue.userId == userValue.userId) {
              this.tweetObj = {
                tweetId: tweetValue.tweetId,
                name: userValue.userName,
                tweet: tweetValue.tweets,
                like: tweetValue.likeTweetsCount,
                comment: tweetValue.commentTweetsCount
              }
              this.tweetList.push(this.tweetObj);
            }
          });
        });

      })
    });
  }


  public postTweet() {
    let postTweetRequest = {} as TweetDTO;
    postTweetRequest.tweets = this.postTweetValue;
    this.tweetHomeService.postTweetService(this.username, postTweetRequest).subscribe(postValue => {
     this.showToastr('Tweet')
     setTimeout(() =>{
      this.refreshScreen();
    },5000);
      this.postTweetValue = '';
    })
  }

  public postReTweet(retweetValue: any) {
    let postTweetRequest = {} as TweetDTO;
    postTweetRequest.tweets = retweetValue;
    this.tweetHomeService.postTweetService(this.username, postTweetRequest).subscribe(postValue => {
      this.showToastr('Re-Tweet')
     setTimeout(() =>{
      this.refreshScreen();
    },5000);
    })
  }

  public action(actionType: any, tweetIdValue: any) {
    if (actionType = 'Delete') {
      this.tweetHomeService.deleteTweetService(this.username, tweetIdValue).subscribe(data => {
        this.refreshScreen();
      });
    }
  }

  public likeTweet(tweetIdValue: any) {
    let tweetFlag: boolean;
    this.tweetHomeService.getAllTweetLikeService().subscribe((data: any) => {
      console.log(data);
      if (data.length > 0) {
        for (let twLikeValue of data) {
          if (twLikeValue.userName == this.username && twLikeValue.tweetId == tweetIdValue) {
            tweetFlag = false
            break;
          }
          else {
            tweetFlag = true
          }
        }
      } else {
        tweetFlag = true;
        console.log('else-out');
      }
      let likeTweetRequest = {
        "tweetLikes": tweetFlag
      }
      this.tweetHomeService.likeTweetService(this.username, tweetIdValue, likeTweetRequest).subscribe(data => {
        console.log(data)
      });
      this.refreshScreen();
    });
  }


  public refreshScreen() {
    window.location.reload();
  }


  public logout() {
    this.authServicesService.isUserLoggedOut();
    const userLoginFlag = this.authServicesService.isUserLoggedIn()
    if (userLoginFlag == false) {
      this.router.navigate([`logout`]);
    }
  }

  commentTweet(tweetId: any) {
    this.tweetPopData = [];
    this.tweetHomeService.getAllTweetService().subscribe((data: any) => {
      for (let tweetpop of data) {
        if (tweetpop.tweetId == tweetId) {
          this.tweetPopData.push(tweetpop);
        }
      }
    });
    const initialState: ModalOptions = {
      initialState: {
        tweetlist: this.tweetPopData,
        username: this.username,
        tweetId: tweetId
      },
      class: 'my-modal modal-lg',
      ignoreBackdropClick: true,
      keyboard: true
    }
    this.modalRef = this.modalService.show(CommentModalComponent, initialState);
  }


  onSearch(searchValue: any) {
    this.tweetList = [];
    console.log(searchValue);
    if (searchValue) {
      this.tweetHomeService.getAllTweetServiceByUsername(searchValue).subscribe(data => {
        for (let datavalue of data) {
          this.tweetObj = {
            tweetId: datavalue.tweetId,
            name: searchValue,
            tweet: datavalue.tweets,
            like: datavalue.likeTweetsCount,
            comment: datavalue.commentTweetsCount
          }
          this.tweetList.push(this.tweetObj);
        }
      })
    } else {
      this.getALLTweets();
    }
  }

  showToastr(message:any) {
    this.toastrservice.show(`${message} tweeted successfully`, this.username, {
      positionClass: 'toast-bottom-right',
      closeButton: true,
      progressBar: true,
      tapToDismiss: true,
      progressAnimation: 'increasing',
      toastClass: 'toast-class',
      titleClass: 'title-class',
      messageClass: 'message-class'
    })
  }
}


