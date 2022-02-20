import { Component, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { Subscription } from 'rxjs';
import { MessageDTO } from 'src/assets/models/MessageDTO';
import { UserLoginDTO } from 'src/assets/models/UserLoginDTO';
import { TweetRegistrationComponent } from '../tweet-registration/tweet-registration.component';

import { TweetResetPasswordComponent } from '../tweet-reset-password/tweet-reset-password.component';

import { TweetLoginService } from './tweet-login.service';

@Component({
  selector: 'app-tweet-login',
  templateUrl: './tweet-login.component.html',
  styleUrls: ['./tweet-login.component.css']
})
export class TweetLoginComponent implements OnInit,OnDestroy {
  public usernameValue!: string;
  public passwordValue!: string;
  public modalRef?: BsModalRef;

  public messages!: MessageDTO;
  public resetComponentConfig = {
    class: 'my-modal modal-md',
    ignoreBackdropClick:true,
    keyboard:true
  }
  public registrationComponentConfig = {
    class: 'my-modal modal-lg',
    ignoreBackdropClick:true,
    keyboard:true
  }
  public messageValue!: Subscription;
  public displayErrorMessage!: string | boolean;

  constructor(private userLoginService: TweetLoginService,
    private router: Router, private modalService: BsModalService) { 
      this.messageValue = this.userLoginService.messageObject$.subscribe((data:any)=>{
        this.messages={
          message:data.message,
          messageCode:data.messageCode
        }
        this.displayErrorMessage = (this.messages.message !== '')? true : false;
      })
      console.log('sub', this.messageValue)
    }

  ngOnInit(): void {
   // this.alertClose();
  }

  onLogin() {
    this.alertClose();
    let userRequest = {} as UserLoginDTO;
    userRequest.userName = (this.usernameValue !== null) ? this.usernameValue : "";
    userRequest.password = (this.passwordValue !== null) ? this.passwordValue : "";

    if ((this.usernameValue !== null)
      && (this.passwordValue !== null)){
      this.userLoginService.userLoginService(userRequest).subscribe((data: MessageDTO) => {
        if (data.messageCode == '200') {
          this.router.navigate([`login/${this.usernameValue}`]);
        }
        else {
          this.messages =
          {
            messageCode: '400',
            message: data.message
          }
        }
      })
    } else {
      this.messages =
      {
        messageCode: '400',
        message: 'username and password is required.'
      }
    }
  }

  onReset(){
    this.usernameValue = '';
    this.passwordValue='';
  }

  openResetPasswordModal() {
    this.modalRef = this.modalService.show(TweetResetPasswordComponent, this.resetComponentConfig);
    
  }

  openRegistrationModal() {
    this.modalRef = this.modalService.show(TweetRegistrationComponent, this.registrationComponentConfig);
  }

  alertClose() {
    this.messages = {
      message: '',
      messageCode: ''
    };
    this.displayErrorMessage = false;
    this.ngOnDestroy();
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.messageValue.unsubscribe();
  }
}
