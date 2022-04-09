import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-component',
  templateUrl: './report-component.component.html',
  styleUrls: ['./report-component.component.css']
})
export class ReportComponentComponent implements OnInit {

  public firstname!:string;
  public lastname!:string;
  public mobile!:string;
  public email!:string;
  public message!:string;
  constructor() { }

  ngOnInit(): void {
  }


  reportIssue(){
   
  }

  resetForm(){
    this.firstname = '';
    this.lastname = '';
    this.mobile = '';
    this.email = '';
    this.message ='';
  }

}
