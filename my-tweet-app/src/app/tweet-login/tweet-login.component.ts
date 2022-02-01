import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { UserLoginDTO } from 'src/assets/UserLoginDTO';
import { TweetRegistrationComponent } from '../tweet-registration/tweet-registration.component';

import { TweetResetPasswordComponent } from '../tweet-reset-password/tweet-reset-password.component';

import { TweetLoginService } from './tweet-login.service';

@Component({
  selector: 'app-tweet-login',
  templateUrl: './tweet-login.component.html',
  styleUrls: ['./tweet-login.component.css']
})
export class TweetLoginComponent implements OnInit {
  public usernameValue!: string;
  public passwordValue!: string;
  modalRef?: BsModalRef;
  constructor(private userLoginService:TweetLoginService,
    private router:Router,private modalService: BsModalService) { }

  ngOnInit(): void {
  }

 onLogin(){
   let userRequest = {} as UserLoginDTO;
    userRequest.userName = (this.usernameValue !== null) ? this.usernameValue : "";
    userRequest.password = (this.passwordValue !== null) ? this.passwordValue: "";
  
   this.userLoginService.loginService(userRequest).subscribe((data : any) =>{
         this.router.navigate(['login']);
   })
 }



 openModal() {
   this.modalRef = this.modalService.show(TweetResetPasswordComponent);
 }

 openRegistrationModal(){
  this.modalRef = this.modalService.show(TweetRegistrationComponent ,{class:'modal-lg'});
 }
}
