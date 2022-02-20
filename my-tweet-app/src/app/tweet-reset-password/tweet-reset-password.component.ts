import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { MessageDTO } from 'src/assets/models/MessageDTO';
import { ResetPasswordDTO } from 'src/assets/models/ResetPasswordDTO';
import { TweetLoginService } from '../tweet-login/tweet-login.service';

@Component({
  selector: 'app-tweet-reset-password',
  templateUrl: './tweet-reset-password.component.html',
  styleUrls: ['./tweet-reset-password.component.css']
})
export class TweetResetPasswordComponent implements OnInit {
  usernameValue:string | undefined;
  passwordValue:string | undefined;
 confirmPasswordValue:string | undefined;
 public messages!: MessageDTO;
constructor(private loginService: TweetLoginService,public modalRef: BsModalRef) { }
  ngOnInit(): void {
    
  }
  modalHide(){
    this.modalRef.hide();
  }

  submitModal(){
    let resetPasswordReq = {} as ResetPasswordDTO;
    resetPasswordReq.password = (this.passwordValue != null)?this.passwordValue : '';
    let username =(this.usernameValue!= null) ?this.usernameValue:'';
    if(this.passwordValue != null){
    this.loginService.resetPasswordService(username,resetPasswordReq).subscribe(data=>{
      this.messages =
      {
        messageCode: data.messageCode,
        message: data.message
      }
      this.loginService.setMessageObject(this.messages);
    })
    this.modalRef.hide();
  }
  }

  resetModal(){
  this.usernameValue ='';
  this.passwordValue = '';
  this.confirmPasswordValue='';
  }
}
