import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { MessageDTO } from 'src/assets/models/MessageDTO';
import { TweetLoginService } from '../tweet-login/tweet-login.service';

@Component({
  selector: 'app-tweet-registration',
  templateUrl: './tweet-registration.component.html',
  styleUrls: ['./tweet-registration.component.css']
})
export class TweetRegistrationComponent implements OnInit {
  public bsDatePickerConfig!: Partial<BsDatepickerConfig>;
  public RegistrationFormFlag!: boolean;

  public formData = new FormGroup({
    username: new FormControl('', Validators.required),
     firstname: new FormControl('', Validators.required),
     lastname: new FormControl('', Validators.required),
     age: new FormControl('', Validators.required),
     date: new FormControl('', Validators.required),
     password: new FormControl('', [Validators.required,Validators.minLength(3)]),
     confirmpassword: new FormControl('', [Validators.required,Validators.minLength(3)])
  });
  public messages!:MessageDTO;
  public displayErrorMessage!: boolean;
  
  
  constructor(public modalRef: BsModalRef,public tweetLoginService:TweetLoginService) {
    this.bsDatePickerConfig = Object.assign({},{
      containerClass:'theme-dark-blue'
    });
   }

  ngOnInit(): void {
  }

  register(formValue:any){
            if(formValue.value.firstname == ''&& formValue.value.lastname  == '' && formValue.value.age  == '' && formValue.value.date  == '' && formValue.value.password  == '' && formValue.value.confirmpassword  == '' )
            {
                this.RegistrationFormFlag  = true;
            }
            else {
              this.RegistrationFormFlag  = false;
              // if(formValue.value.password !== formValue.value.confirmpassword){
              //   this.displayErrorMessage = true;
              //   this.messages = {
              //     message: 'password and confirm password should be same.',
              //     messageCode: '400'
              //   };
              // }
              // else{
              //   this.displayErrorMessage = false;
              //   this.messages = {
              //     message: '',
              //     messageCode: ''
              //   };
              let registrationReq = {
              'userName':formValue.value.username,
              'firstName': formValue.value.firstname,
              'lastName': formValue.value.lastname,
              'age': formValue.value.age,
              'dateOfBirth': formValue.value.date,
              'password':formValue.value.password,
              'confirmPassword':formValue.value.confirmpassword
              }
              this.tweetLoginService.userRegistrationService(registrationReq).subscribe(data=>{
               console.log(data);
              });
              this.modalHide();
              }
          //}
  }

  resetModal(){
    this.formData = new FormGroup({});
  }

  alertClose(){
     this.RegistrationFormFlag =false
     this.messages = {
      message: '',
      messageCode: ''
    };
    this.displayErrorMessage = false;
  }

  modalHide(){
    this.modalRef.hide();
  }
}
