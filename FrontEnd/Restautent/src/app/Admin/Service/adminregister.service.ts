import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from 'src/app/Authentication/config/login.service';

@Injectable({
  providedIn: 'root'
})
export class AdminregisterService {

  constructor(private loginservice:LoginService,private http:HttpClient) { }
  baseUrl=this.loginservice.baseUrl;

  RestaurentRegister(data:any){
    const url=`${this.baseUrl}/user/register`;
    return this.http.post(url,data);
  }
}
