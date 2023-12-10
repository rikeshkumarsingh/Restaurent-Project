import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Authentication/config/login.service';

@Component({
  selector: 'app-resta-nav',
  templateUrl: './resta-nav.component.html',
  styleUrls: ['./resta-nav.component.css']
})
export class RestaNavComponent implements OnInit{
restoname:any
  
  constructor(private loginService:LoginService){}
  ngOnInit(): void {
    const restoObject = localStorage.getItem('userdata');    
    if (restoObject) {
      this.restoname= JSON.parse(restoObject);        
      
    }   
  }

  logout(){
    this.loginService.logout();
  }
}
