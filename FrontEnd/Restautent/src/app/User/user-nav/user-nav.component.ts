import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Authentication/config/login.service';

@Component({
  selector: 'app-user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.css']
})
export class UserNavComponent implements OnInit {
  
  logactive: boolean = true;

  constructor(private loginService: LoginService) { }
  ngOnInit(): void {

  }
  checkLogin() {    
      this.logactive = !this.logactive;    
  }

  logout() {
    this.logactive = !this.logactive;
    this.loginService.logout();

  }
}
