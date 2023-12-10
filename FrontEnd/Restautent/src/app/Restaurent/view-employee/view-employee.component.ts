import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmpDetails } from '../Model/emp-details';
import { RestaurentService } from '../Service/restaurent.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {

  empDetails: EmpDetails = new EmpDetails();
  restoData: any
  updatedata:boolean=false

  displayedColumns: string[] = ['id', 'name', 'position', 'mobile', 'emailId', 'adddress', 'salary','action'];
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private restaurentService: RestaurentService, private snack: MatSnackBar) { }

  ngOnInit(): void {
    const restoObject = localStorage.getItem('userdata');
    if (restoObject) {
      this.restoData = JSON.parse(restoObject);
    }
    this.getEmpdata();
  }

  getEmpdata() {
    this.restaurentService.viewEmployee(this.restoData.username).subscribe(
      (res:any) => {      
        this.dataSource = new MatTableDataSource(res); 
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      (error) => {
        console.log(error);
        this.snack.open('Something went wrong', '', { duration: 3000 });
      }
    );
  }
  
  getOldData(id:any){
    this.restaurentService.getEmployee(id).subscribe(
      (res:any) => {
        this.updatedata=true
        this.empDetails=res
        console.log(res);
        
      },
      (error) => {
        console.log(error);
        this.snack.open('Something went wrong', '', { duration: 3000 });
      }
    );
    
  }
  deletes(id:any){
    this.restaurentService.DeleteEmployee(id).subscribe(
      (res:any) => {
        this.getEmpdata();
        this.snack.open('Deleted', '', { duration: 3000 });
      },
      (error) => {
        console.log(error);
        this.snack.open('Something went wrong', '', { duration: 3000 });
      }
    );
  }

  update(){
    this.restaurentService.updateEmployee(this.empDetails).subscribe(
      (res:any) => {
        this.updatedata=false
        this.getEmpdata();
        this.empDetails={} as any;
        this.snack.open('Updated', '', { duration: 3000 });
      },
      (error) => {
        console.log(error);
        this.snack.open('Something went wrong', '', { duration: 3000 });
      }
    ); 
    
  }
}
