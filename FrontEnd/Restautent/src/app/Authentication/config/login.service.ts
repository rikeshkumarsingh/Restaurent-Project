import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

   baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient, private _router: Router) { }

  generateToken(data: any) {
    return this.http.post(`${this.baseUrl}/generate-token`, data)
    // return this.http.post(`api/generate-token`, data)
  }


  //set Token : LocalStorage
  loginUser(token: any) {
    localStorage.setItem("token", token);
    return true;
  }

  //Get Token From localStorage
  getToken() {
    return localStorage.getItem("token");
  }

  //Get Current User
  getCurrentUser() {
    return this.http.get(`${this.baseUrl}/current-user`)
  }

  //set userDetails
  public setLoggedUser(user: any) {
    return localStorage.setItem('user', JSON.stringify(user));
  }

  //getUser : LocalStorage
  public getUser() {
    let userStr = localStorage.getItem("user");
    if (userStr != null) {
      return JSON.parse(userStr);
    } else {
      this.logout();
      return null;
    }
  }

  //isLogin: user is Logged in or not
  public isLoggedIn() {
    let tokenStr = localStorage.getItem('token')
    if (tokenStr == undefined || tokenStr == '' || tokenStr == null) {
      return false;
    } else {
      return true;
    }
  }

  //getUser Role Id
  public getUserRole() {
    let user = this.getUser()
    return user.authorities[0].authority;
  }

  //logout : remove token from Local Storage
  public logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userdata');
    this._router.navigate(['/']);
  }

}
