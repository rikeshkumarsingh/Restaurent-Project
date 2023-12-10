import { Component, OnInit } from '@angular/core';
import { RestaurentService } from '../Service/restaurent.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {
  constructor(private restaurentService: RestaurentService) { }
  restoname: any
  foodOrders:any
  ngOnInit(): void {
    const restoObject = localStorage.getItem('userdata');
    if (restoObject) {
      this.restoname = JSON.parse(restoObject);
    }
    this.OrderHistory(this.restoname.name);
  }

  OrderHistory(resto: any) {
    console.log(resto);

    this.restaurentService.OrderHistory(resto).subscribe((res) => {
      this.foodOrders=res;
      console.log(res);

    }, error => {
      console.log(error);

    })
  }
 
}