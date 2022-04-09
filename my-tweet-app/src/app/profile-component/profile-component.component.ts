import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TweetLoginService } from '../tweet-login/tweet-login.service';

@Component({
  selector: 'app-profile-component',
  templateUrl: './profile-component.component.html',
  styleUrls: ['./profile-component.component.css']
})
export class ProfileComponentComponent implements OnInit {
  public username: any;
  public dateOfBirth: any;
  public age: any;
  public lastname: any;
  public firstname: any;
  public searchedValue!: any;
  public namesList: any[] = [];
  public userid: any;

  constructor(private tweetLoginService: TweetLoginService,
    private activatedRouteValue: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRouteValue.paramMap.subscribe(paramValue => {
      if (paramValue.get('name') !== null) {
        this.userid = paramValue.get('name');
        this.tweetLoginService.searchByNameService(paramValue.get('name')).subscribe(data => {
          console.log(data)
          this.username = data.userName;
          this.firstname = data.firstName;
          this.lastname = data.lastName;
          this.age = data.age;
          const date = data.dateOfBirth.split('T')
          this.dateOfBirth = (date[0] != 'null' && date[0] != 'undefined') ? date[0] : '';
        })
      }
    })
    this.tweetLoginService.getALLUserService().subscribe(data => {
      data.forEach((dataValue: any) => {
        this.namesList.push(dataValue.userName);
      });
      console.log(this.namesList);
    });
  }

  onSearch(searchValue: any) {
    if (searchValue) {
      this.tweetLoginService.searchByNameService(searchValue).subscribe(data => {
        console.log(data)
        this.username = data.userName;
        this.firstname = data.firstName;
        this.lastname = data.lastName;
        this.age = data.age;
        const date = data.dateOfBirth.split('T')
        this.dateOfBirth = (date[0] != 'null' && date[0] != 'undefined') ? date[0] : '';
      })
    }
    else {
      this.tweetLoginService.searchByNameService(this.userid).subscribe(data => {
        console.log(data)
        this.username = data.userName;
        this.firstname = data.firstName;
        this.lastname = data.lastName;
        this.age = data.age;
        const date = data.dateOfBirth.split('T')
        this.dateOfBirth = (date[0] != 'null' && date[0] != 'undefined') ? date[0] : '';
      })
    }
  }
}