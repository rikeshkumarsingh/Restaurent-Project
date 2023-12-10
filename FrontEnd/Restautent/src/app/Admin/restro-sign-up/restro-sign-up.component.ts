import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UsersRegister } from 'src/app/User/Model/register/users-register';
import { AdminregisterService } from '../Service/adminregister.service';

@Component({
  selector: 'app-restro-sign-up',
  templateUrl: './restro-sign-up.component.html',
  styleUrls: ['./restro-sign-up.component.css']
})
export class RestroSignUpComponent {

  register:UsersRegister=new UsersRegister();
constructor(private snack:MatSnackBar, private _router: Router,private adminservice:AdminregisterService){}

submitForm(){  
  this.register.role='restaurant'
  console.log(this.register);
  
  this.adminservice.RestaurentRegister(this.register).subscribe((res)=>{
    this.register= {} as any 
    this._router.navigate(['/admin']);
    this.snack.open("Registration Successfull!!", "", { duration: 3000 })  
  },error=>{
    console.log(error);
    this.snack.open("Something went wrong", "", { duration: 3000 })
  })
  
  
}
}
