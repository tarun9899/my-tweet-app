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
 public displayErrorMessage: boolean =false;
constructor(private loginService: TweetLoginService,public modalRef: BsModalRef) { }
  ngOnInit(): void {
    this.messages = {
      message: '',
      messageCode: ''
    };
  }
  modalHide(){
    this.modalRef.hide();
  }

  submitModal(){ 
    if(this.passwordValue !== this.confirmPasswordValue){
      this.displayErrorMessage = true;
    this.messages = {
      message: 'password and confirm password should be same.',
      messageCode: '400'
    };
  
  }
  else{ 
    this.displayErrorMessage = false;
    this.messages = {
      message: '',
      messageCode: ''
    };
    let resetPasswordReq = {} as ResetPasswordDTO;
    resetPasswordReq.password = (this.passwordValue != null)?this.passwordValue : '';
    let username =(this.usernameValue!= null) ?this.usernameValue:'';
    if(this.passwordValue != null){
    this.loginService.resetPasswordService(username,resetPasswordReq).subscribe(data=>{
      this.messages =
      {
        messageCode: data.messageCode,
        message: 'password resetted successfully.'
      }
      this.loginService.setMessageObject(this.messages);
    })
    this.modalRef.hide();
  }
} 
  }

  alertClose(){
    this.displayErrorMessage = false;
    this.messages = {
     message: '',
     messageCode: ''
   };
   
 }

  resetModal(){
  this.usernameValue ='';
  this.passwordValue = '';
  this.confirmPasswordValue='';
  }
}
