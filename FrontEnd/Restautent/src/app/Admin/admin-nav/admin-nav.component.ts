import { Component } from '@angular/core';
import { LoginService } from 'src/app/Authentication/config/login.service';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent {

  constructor(private loginService:LoginService){}


  logout(){
    this.loginService.logout();
  }
}
