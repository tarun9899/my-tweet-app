import { Component, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { Subscription } from 'rxjs';
import { MessageDTO } from 'src/assets/models/MessageDTO';
import { UserLoginDTO } from 'src/assets/models/UserLoginDTO';
import { AuthServicesService } from '../auth-services.service';
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

  public formUserValidationMessage!:any;
  public formPasswordValidationMessage!:any;

  constructor(private userLoginService: TweetLoginService,
    private router: Router, private modalService: BsModalService,private authServicesService:AuthServicesService) { 
      this.messageValue = this.userLoginService.messageObject$.subscribe((data:any)=>{
        this.messages={
          message:data.message,
          messageCode:data.messageCode
        }
        this.displayErrorMessage = (this.messages.message !== '')? true : false;
      })
    }

  ngOnInit(): void {
   // this.alertClose();
  }

  onLogin() {
    this.alertClose();
    this.formUserValidationMessage = false;
    this.formPasswordValidationMessage = false;
    let userRequest = {} as UserLoginDTO;
    userRequest.userName = (this.usernameValue !== null) ? this.usernameValue : "";
    userRequest.password = (this.passwordValue !== null) ? this.passwordValue : "";
   
    if ((this.usernameValue !== null && this.usernameValue !== undefined) && (this.passwordValue !== null && 
      this.passwordValue !== undefined)){
      const userLoggedIn = this.authServicesService.LoginAndLogoutAuthenticatedServices(this.usernameValue);
      console.log('boolean',userLoggedIn)
      if(userLoggedIn == true){
      this.userLoginService.userLoginService(userRequest).subscribe((data: MessageDTO) => {
        if (data.messageCode == '200') {
          this.router.navigate([`home/${this.usernameValue}`]);
        }
        else {
          this.messages =
          {
            messageCode: '400',
            message: data.message
          }
        }
      })
    }
    else{
      this.onReset();
      this.router.navigate([`login/tweet`]);
    }
    } else {
      if((this.usernameValue == null && this.usernameValue == undefined)&&(this.passwordValue !== null && this.passwordValue !== undefined)){
        this.formUserValidationMessage = true;
        this.displayErrorMessage = true;
        this.messages =
        {
          messageCode: '400',
          message: 'username is required.'
        }
      }
      else if((this.passwordValue == null && this.passwordValue == undefined)&&(this.usernameValue !== null && this.usernameValue !== undefined)){
        this.formPasswordValidationMessage = true;
        this.displayErrorMessage = true;
        this.messages =
        {
          messageCode: '400',
          message: 'passowrd is required.'
        }
      }else{
      this.formUserValidationMessage = true;
      this.formPasswordValidationMessage = true;
      this.displayErrorMessage = true;
      this.messages =
      {
        messageCode: '400',
        message: 'username and password is required.'
      }
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
