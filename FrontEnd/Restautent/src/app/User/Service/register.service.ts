import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from 'src/app/Authentication/config/login.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private loginservice: LoginService, private http: HttpClient) { }
  baseUrl = this.loginservice.baseUrl;

  UserRegister(data: any) {
    const url = `${this.baseUrl}/user/users/register`;
    return this.http.post(url, data);
  }


  getAllResto() {
    const url = `${this.baseUrl}/rest/getAll`;
    return this.http.get(url);
  }

  getAllfood(restro: string) {
    const url = `${this.baseUrl}/rest/get/food/${restro}`;
    return this.http.get(url);
  }


  orderFood(data: any) {
    const url = `${this.baseUrl}/order/save`;
    return this.http.post(url, data);
  }

  viewOrder(username:string){
    const url=`${this.baseUrl}/order/current/${username}`;
    return this.http.get(url);
  }
  UserOrderHistory(username:string){
    const url=`${this.baseUrl}/order/getby/${username}`;
    return this.http.get(url);
  }
}
