import { Component, OnInit } from '@angular/core';
import { RestaurentService } from '../Service/restaurent.service';
import { Restaurent } from '../Model/restaurent';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-dish',
  templateUrl: './add-dish.component.html',
  styleUrls: ['./add-dish.component.css']
})
export class AddDishComponent implements OnInit{
  dish: Restaurent = new Restaurent();
  restoData:any
  constructor(private restaurentService: RestaurentService,private snack:MatSnackBar) { }
  ngOnInit(): void {
    const restoObject = localStorage.getItem('userdata');    
    if (restoObject) {
      this.restoData= JSON.parse(restoObject);        
      this.dish.restaurentName=this.restoData.name
      this.dish.restaurentUsername=this.restoData.username   
    }   
  }

  submit(){
    this.restaurentService.saveDish(this.dish).subscribe((res)=>{
      this.dish.dishName='';
      this.dish.price=0;
     this.snack.open('Dish Added','',{duration:3000})
      
    },error=>{
      if (error.status==201) {
        this.dish.dishName='';
        this.dish.price=0;
        this.snack.open('Dish Added','',{duration:3000})
      } else {
        this.snack.open('Somthing went wrong','',{duration:3000})
      }
    })
   
    
  }
}
