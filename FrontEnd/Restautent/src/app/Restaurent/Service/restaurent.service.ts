import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from 'src/app/Authentication/config/login.service';

@Injectable({
  providedIn: 'root'
})
export class RestaurentService {

  constructor(private login:LoginService,private http:HttpClient) { }

  baseUrl=this.login.baseUrl;

  saveDish(data:any){
    const url=`${this.baseUrl}/rest/save`;
    return this.http.post(url,data);
  }

  getDish(username:string){
    const url=`${this.baseUrl}/rest/get/${username}`;
    return this.http.get(url);
  }
  viewOrder(resto:string){
    const url=`${this.baseUrl}/order/rest/order/${resto}`;
    return this.http.get(url);
  }

  OrderHistory(resto:string){
    const url=`${this.baseUrl}/order/get/resto/${resto}`;
    return this.http.get(url);
  }

  OrderSent(id:number){
    const url=`${this.baseUrl}/order/orderSent/${id}`;
    return this.http.get(url);
  }

  saveEmployee(data:any){
    const url=`${this.baseUrl}/emp/save`;
    return this.http.post(url,data);
  }

  viewEmployee(resto:string){
    const url=`${this.baseUrl}/emp/get/${resto}`;
    return this.http.get(url);
  }


  updateEmployee(resto:any){
    const url=`${this.baseUrl}/emp/update`;
    return this.http.put(url,resto);
  }
  DeleteEmployee(id:any){
    const url=`${this.baseUrl}/emp/delete/${id}`;
    return this.http.delete(url);
  }
  getEmployee(id:any){
    const url=`${this.baseUrl}/emp/getdata/${id}`;
    return this.http.get(url);
  }
}
