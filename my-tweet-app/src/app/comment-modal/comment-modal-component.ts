import { Component, OnInit } from "@angular/core";
import { BsModalRef } from "ngx-bootstrap/modal";
import { Subject } from "rxjs";
import { TweetDTO } from "src/assets/models/tweetDTO";
import { TweetHomeService } from "../tweet-home/tweet-home.service";
import { TweetLoginService } from "../tweet-login/tweet-login.service";


@Component({
    selector:'app-comment-modal',
    templateUrl:'./comment-modal-component.html',
    styleUrls:['./comment-modal-component.css']
})

export class CommentModalComponent implements OnInit{
    public tweetlist:any
    public username: any;
    public replyTweetValue:any;
    public tweetId:any;
    
    public onClose!: Subject<boolean>;
    constructor(public modalRef: BsModalRef,private userservice:TweetLoginService,private tweetHomeService:TweetHomeService){};
    
    ngOnInit(){
        this.onClose = new Subject();
     console.log('pop',this.tweetlist,this.username);
    }

    public replyTweet(){
    console.log('post',this.replyTweetValue,this.tweetId);
    
    // this.tweetHomeService.getAllTweetCommentsService().subscribe((data: any) => {
    //   console.log(data);
    //   let tweeCommenttFlag:any = '';
    //   if (data.length > 0) {
    //     for (let tweetCOmmnetValue of data) {
    //       if (tweetCOmmnetValue.userName == this.username && tweetCOmmnetValue.tweetId == this.tweetId) {
    //         tweeCommenttFlag = null;
    //         console.log('if', tweetCOmmnetValue.userName);
    //         break;
    //       }
    //       else {
    //         tweeCommenttFlag = this.replyTweetValue;
    //         console.log('else', tweetCOmmnetValue.userName);
    //       }
    //     }
    //   } else {
    //     tweeCommenttFlag = this.replyTweetValue;
    //     console.log('else-out');
    //   }
    
      const commentTweetRequest = {
        "comment":this.replyTweetValue
      }
      this.tweetHomeService.commentTweetService(this.username, this.tweetId, commentTweetRequest).subscribe(data => {
        let postTweetRequest = {} as TweetDTO;
        postTweetRequest.tweets = this.replyTweetValue;
        this.tweetHomeService.postTweetService(this.username, postTweetRequest).subscribe(postValue => {
          this.replyTweetValue = '';
          this.tweetHomeService.setClosePop(true);
          this.refreshScreen();
          this.modalHide();
        })
        });
      // });
    }

    public refreshScreen() {
        window.location.reload();
        this.modalHide();
      }

    public modalHide(){
        this.onClose!.next(true);
        this.modalRef.hide();
      }
}