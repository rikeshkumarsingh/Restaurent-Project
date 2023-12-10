import { Component, OnInit } from '@angular/core';
import { RestaurentService } from '../Service/restaurent.service';

@Component({
  selector: 'app-resta-dashboard',
  templateUrl: './resta-dashboard.component.html',
  styleUrls: ['./resta-dashboard.component.css']
})
export class RestaDashboardComponent implements OnInit {
  restoname: any
  dishes:any
  constructor(private restaurentService: RestaurentService) { }
  ngOnInit(): void {
    const restoObject = localStorage.getItem('userdata');
    if (restoObject) {
      this.restoname = JSON.parse(restoObject);
    }
    this.getAllDish();
  }
  getAllDish() {
    this.restaurentService.getDish(this.restoname.username).subscribe((res) => {
      this.dishes=res;
      console.log(res);

    }, error => {
      console.log(error);

    })
  }

}
