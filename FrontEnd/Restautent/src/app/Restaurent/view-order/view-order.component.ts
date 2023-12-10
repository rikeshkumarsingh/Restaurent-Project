import { Component, OnInit } from '@angular/core';
import { RestaurentService } from '../Service/restaurent.service';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.css']
})
export class ViewOrderComponent implements OnInit {
  foodOrders: any
  constructor(private restaurentService: RestaurentService) { }
  restoname: any
  ngOnInit(): void {
    const restoObject = localStorage.getItem('userdata');
    if (restoObject) {
      this.restoname = JSON.parse(restoObject);
    }
    this.viewOrder(this.restoname.name);
  }

  viewOrder(resto: any) {
    console.log(resto);

    this.restaurentService.viewOrder(resto).subscribe((res) => {
      this.foodOrders = res;
      console.log(res);

    }, error => {
      console.log(error);

    })
  }

  OrderSent(id:any){
    this.restaurentService.OrderSent(id).subscribe((res)=>{
      this.viewOrder(this.restoname.name);
      
    },error=>{
      console.log(error);
      
    })
  }
}
