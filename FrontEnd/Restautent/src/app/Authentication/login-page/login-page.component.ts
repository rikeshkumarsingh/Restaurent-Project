import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { LoginService } from '../config/login.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserNavComponent } from 'src/app/User/user-nav/user-nav.component';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  credential = {
    username: '',
    password: ''
  }

  constructor(
    private _login: LoginService,
    private _router: Router,
    private _snack: MatSnackBar,
    private userNavComponent:UserNavComponent
  ) { }

  login() {
    if ((this.credential.username != '' && this.credential.password! != '')
      && (this.credential.username != null && this.credential.password! != null)) {

      this._login.generateToken(this.credential).subscribe((response: any) => {
        this._login.loginUser(response.token);       

        //get current user
        this._login.getCurrentUser().subscribe((user: any) => {
          console.log(user.authorities[0].authority);

          // this._login.setLoggedUser(user);
          // localStorage.setItem('username', user.username);
          // localStorage.setItem('usernamecheck', user.username);
          localStorage.setItem('userdata',JSON.stringify(user));

          ////redirect urls
          if (user.authorities[0].authority == "ROLE_user") {
            this.userNavComponent.checkLogin();
            this._router.navigate(['/']);
          }
          else if (user.authorities[0].authority == "ROLE_admin") {
            this._router.navigate(['/admin']);
          }
          else if (user.authorities[0].authority == "ROLE_restaurant") {
            this._router.navigate(['/resta']);
          }
          else {
            this._login.logout();
          }

        });
      },
        error => {
          this._snack.open("Plese Enter Correct Username & Password", "", { duration: 3000 })
          console.log("Not started");
          console.log(error);
        })

    }
    else {
      this._snack.open("Plese Enter Username & Password", "", { duration: 3000 })
      console.log("data required");

    }
  }
}
