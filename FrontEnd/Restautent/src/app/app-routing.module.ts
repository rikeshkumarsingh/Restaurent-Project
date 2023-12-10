import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDashboardComponent } from './User/user-dashboard/user-dashboard.component';
import { UserNavComponent } from './User/user-nav/user-nav.component';
import { LoginPageComponent } from './Authentication/login-page/login-page.component';
import { SignupPageComponent } from './Authentication/signup-page/signup-page.component';
import { AdminNavComponent } from './Admin/admin-nav/admin-nav.component';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { RestroSignUpComponent } from './Admin/restro-sign-up/restro-sign-up.component';
import { RestaNavComponent } from './Restaurent/resta-nav/resta-nav.component';
import { RestaDashboardComponent } from './Restaurent/resta-dashboard/resta-dashboard.component';
import { AddDishComponent } from './Restaurent/add-dish/add-dish.component';
import { ViewOrderComponent } from './Restaurent/view-order/view-order.component';
import { OrderHistoryComponent } from './Restaurent/order-history/order-history.component';
import { CurrentOrderComponent } from './User/current-order/current-order.component';
import { UserOrderHistoryComponent } from './User/user-order-history/user-order-history.component';
import { EmpDetailsComponent } from './Restaurent/emp-details/emp-details.component';
import { ViewEmployeeComponent } from './Restaurent/view-employee/view-employee.component';


const routes: Routes = [

  {
    path: '', component: UserNavComponent,
    children: [
      { path: '', component: UserDashboardComponent },
      { path: 'login', component: LoginPageComponent },
      { path: 'signup', component: SignupPageComponent },
      { path: 'crueentorder', component: CurrentOrderComponent },
      { path: 'history', component: UserOrderHistoryComponent },
    ]

  },
  {
    path: 'admin', component: AdminNavComponent,
    children: [
      // { path: '', component: AdminDashboardComponent },
      { path: '', component: UserDashboardComponent},
      { path: 'restosignup', component: RestroSignUpComponent },
      
    ]

  },
  {
    path: 'resta', component: RestaNavComponent,
    children: [
      { path: '', component: RestaDashboardComponent },
      { path: 'dish', component: AddDishComponent },
      { path: 'order', component: ViewOrderComponent },
      { path: 'history', component: OrderHistoryComponent },
      { path: 'empdtl', component: EmpDetailsComponent },
      { path: 'viewemp', component: ViewEmployeeComponent },

      
    ]

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
