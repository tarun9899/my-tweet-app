import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-tweet-reset-password',
  templateUrl: './tweet-reset-password.component.html',
  styleUrls: ['./tweet-reset-password.component.css']
})
export class TweetResetPasswordComponent implements OnInit {
  usernameValue:string | undefined;
  passwordValue:string | undefined;
constructor(private modalService: BsModalService,public modalRef: BsModalRef) { }
  ngOnInit(): void {
    
  }
  modalHide(){
    this.modalRef.hide();
  }
}
