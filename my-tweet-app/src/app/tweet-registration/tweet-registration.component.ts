import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-tweet-registration',
  templateUrl: './tweet-registration.component.html',
  styleUrls: ['./tweet-registration.component.css']
})
export class TweetRegistrationComponent implements OnInit {
   bsDatePickerConfig!: Partial<BsDatepickerConfig>;
  constructor(public modalRef: BsModalRef) {
    this.bsDatePickerConfig = Object.assign({},{
      containerClass:'theme-dark-blue'
    });
   }

  ngOnInit(): void {
  }

  modalHide(){
    this.modalRef.hide();
  }
}
