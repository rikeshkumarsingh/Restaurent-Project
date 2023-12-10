import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './Authentication/login-page/login-page.component';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './User/user-dashboard/user-dashboard.component';

import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupPageComponent } from './Authentication/signup-page/signup-page.component';
import { RestroSignUpComponent } from './Admin/restro-sign-up/restro-sign-up.component';
import { UserNavComponent } from './User/user-nav/user-nav.component';
import { AdminNavComponent } from './Admin/admin-nav/admin-nav.component';
import { RestaDashboardComponent } from './Restaurent/resta-dashboard/resta-dashboard.component';
import { RestaNavComponent } from './Restaurent/resta-nav/resta-nav.component';
import { AddDishComponent } from './Restaurent/add-dish/add-dish.component';
import { Authinterceptor } from './Authentication/config/auth.interceptor';
import { ViewOrderComponent } from './Restaurent/view-order/view-order.component';
import { OrderHistoryComponent } from './Restaurent/order-history/order-history.component';
import { CurrentOrderComponent } from './User/current-order/current-order.component';
import { UserOrderHistoryComponent } from './User/user-order-history/user-order-history.component';

import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { EmpDetailsComponent } from './Restaurent/emp-details/emp-details.component';
import { ViewEmployeeComponent } from './Restaurent/view-employee/view-employee.component';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';






@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    SignupPageComponent,
    RestroSignUpComponent,
    UserNavComponent,
    AdminNavComponent,
    RestaDashboardComponent,
    RestaNavComponent,
    AddDishComponent,
    ViewOrderComponent,
    OrderHistoryComponent,
    CurrentOrderComponent,
    UserOrderHistoryComponent,
    EmpDetailsComponent,
    ViewEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    FormsModule, 
    MatFormFieldModule,
     MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatTableModule,
    // MatTableDataSource,
    MatIconModule,
    MatSortModule,
    // MatSort,
    MatPaginatorModule,
    // MatPaginator,
    MatSortModule,

    
    
    
    
  ],
  providers: [ {
    provide:HTTP_INTERCEPTORS,
    useClass:Authinterceptor,
    multi:true,
},],
  bootstrap: [AppComponent]
})
export class AppModule { }
