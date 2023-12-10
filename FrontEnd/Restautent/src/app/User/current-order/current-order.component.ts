import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../Service/register.service';

@Component({
  selector: 'app-current-order',
  templateUrl: './current-order.component.html',
  styleUrls: ['./current-order.component.css']
})
export class CurrentOrderComponent implements OnInit {
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
    this.registerService.viewOrder(username).subscribe((res) => {
      this.foodOrders = res;
      console.log(res);

    }, error => {
      console.log(error);

    })
  }
}
