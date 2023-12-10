import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UsersRegister } from 'src/app/User/Model/register/users-register';
import { RegisterService } from 'src/app/User/Service/register.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent {
register:UsersRegister=new UsersRegister();
constructor(private userservice:RegisterService,private snack:MatSnackBar, private _router: Router,){}

submitForm(){  
  this.userservice.UserRegister(this.register).subscribe((res)=>{
    this.register= {} as any 
    this._router.navigate(['/login']);
    this.snack.open("Registration Successfull!!", "", { duration: 3000 })  
  },error=>{
    console.log(error);
    this.snack.open("Something went wrong", "", { duration: 3000 })
  })
  
  
}
}
