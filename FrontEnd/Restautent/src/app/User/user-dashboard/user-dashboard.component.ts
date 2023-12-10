import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../Service/register.service';
import { OrderRequest } from '../Model/register/order-request';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  disableSelect = new FormControl(false);


  




  resto: any
  food: any
  userdata: any = [];
  checklogin: boolean = false;
  constructor(private registerService: RegisterService, private snack: MatSnackBar) { }
  ngOnInit(): void {
    const restoObject = localStorage.getItem('userdata');
    if (restoObject) {
      this.userdata = JSON.parse(restoObject);

    }
    this.getAllRestorent();
  }

  getAllRestorent() {
    this.registerService.getAllResto().subscribe((res) => {
      this.resto = res;
    }, error => {

    })
  }
  selectRestName: any
  getAllfood(name: any) {
    this.selectRestName = name;
    this.registerService.getAllfood(name).subscribe((res) => {
      this.food = res;

    }, error => {

    })
  }

  close() {
    this.food = '';
  }


  OrderRequest: OrderRequest = new OrderRequest();
  total: number = 0;
  foodselection(food: any, price: any) {   
    if (this.disableSelect.value) {
      const selectedFoodItem = { food, price };
      this.OrderRequest.foodItems.push(selectedFoodItem);
      this.total += price;  // Use the price directly
      console.log(this.total);
    } else {    
      this.OrderRequest.foodItems = this.OrderRequest.foodItems.filter(item => item.food !== food);
      console.log(this.OrderRequest.foodItems);     
      this.total -= price; 
      console.log(this.total);
    }
  }

  order() {
    this.OrderRequest.restoName = this.selectRestName;
    this.OrderRequest.username = this.userdata.username;
    this.OrderRequest.total = this.total;
    if (this.OrderRequest.username != null || this.OrderRequest.username != undefined) {
      if (this.OrderRequest.total!=0||this.OrderRequest.total==null||this.OrderRequest.total==undefined) {
        this.registerService.orderFood(this.OrderRequest).subscribe((res) => {
          console.log("response", res);
          this.snack.open('Food Ordered', '', { duration: 3000 })
          this.food = '';
  
        }, error => {
          console.log(error);
          this.snack.open('Something went wrong', '', { duration: 3000 })
        })
      } else {
        this.snack.open('Plese Select food before order', '', { duration: 3000 })
      }
     
    } else {
      this.checklogin = true;
    }



  }

}
