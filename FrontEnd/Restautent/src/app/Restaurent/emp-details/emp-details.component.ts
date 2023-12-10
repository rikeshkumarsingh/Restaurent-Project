import { Component, OnInit } from '@angular/core';
import { EmpDetails } from '../Model/emp-details';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RestaurentService } from '../Service/restaurent.service';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent implements OnInit {

  empDetails: EmpDetails = new EmpDetails();
  restoData: any
  constructor(private restaurentService: RestaurentService,private snack:MatSnackBar) { }

  ngOnInit(): void {
    const restoObject = localStorage.getItem('userdata');
    if (restoObject) {
      this.restoData = JSON.parse(restoObject);

    }
  }
  submit() {
    this.empDetails.restoUserName = this.restoData.username
    this.restaurentService.saveEmployee(this.empDetails).subscribe((res)=>{
     
      this.empDetails={}as any
      this.snack.open('Employee Added','',{duration:3000})
    },error=>{
      console.log(error);
      this.snack.open('Something went wrong','',{duration:3000})
    })
  }
}
