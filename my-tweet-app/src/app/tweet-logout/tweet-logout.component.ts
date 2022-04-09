import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tweet-logout',
  templateUrl: './tweet-logout.component.html',
  styleUrls: ['./tweet-logout.component.css']
})
export class TweetLogoutComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  loginBack(){
    this.router.navigate([`login/tweet`]);
  }
}
