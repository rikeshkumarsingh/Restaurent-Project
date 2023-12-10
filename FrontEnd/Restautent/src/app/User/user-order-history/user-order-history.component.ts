import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../Service/register.service';

@Component({
  selector: 'app-user-order-history',
  templateUrl: './user-order-history.component.html',
  styleUrls: ['./user-order-history.component.css']
})
export class UserOrderHistoryComponent implements OnInit {
  foodOrders: any
  constructor(private registerService: RegisterService) { }
  restoname: any
  ngOnInit(): void {
    const restoObject = localStorage.getItem('userdata');
    if (restoObject) {
      this.restoname = JSON.parse(restoObject);
    }
    this.viewOrder(this.restoname.username);
  }

  viewOrder(username: any) {
    this.registerService.UserOrderHistory(username).subscribe((res) => {
      this.foodOrders = res;
      console.log(res);

    }, error => {
      console.log(error);

    })
  }
}
