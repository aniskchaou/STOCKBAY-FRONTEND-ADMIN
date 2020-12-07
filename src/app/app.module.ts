import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './template/navigation/navigation.component';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { ProductComponent } from './content/product/product.component';
import { SupplierComponent } from './content/supplier/supplier.component';
import { ClientComponent } from './content/client/client.component';
import { EmployeeComponent } from './content/employee/employee.component';
import { RevenueComponent } from './content/revenue/revenue.component';
import { ExpenseComponent } from './content/expense/expense.component';
import { StockComponent } from './content/stock/stock.component';
import { CategoryComponent } from './content/category/category.component';
import { BuyComponent } from './content/buy/buy.component';
import { SaleComponent } from './content/sale/sale.component';
import { DashboardComponent } from './content/dashboard/dashboard.component';
import { ConfigurationComponent } from './content/configuration/configuration.component';

const routes:Routes=[
  {path:'category',component:CategoryComponent,pathMatch:'full'},
  {path:'buy',component:BuyComponent,pathMatch:'full'},
  {path:'category',component:CategoryComponent,pathMatch:'full'},
  {path:'client',component:ClientComponent,pathMatch:'full'},
  {path:'employee',component:EmployeeComponent,pathMatch:'full'},
  {path:'expense',component:ExpenseComponent,pathMatch:'full'},
  {path:'product',component:ProductComponent,pathMatch:'full'},
  {path:'revenue',component:RevenueComponent,pathMatch:'full'},
  {path:'sale',component:SaleComponent,pathMatch:'full'},
  {path:'stock',component:StockComponent,pathMatch:'full'},
  {path:'supplier',component:SupplierComponent,pathMatch:'full'},
  {path:'dashboard',component:DashboardComponent,pathMatch:'full'},
  {path:'configuration',component:ConfigurationComponent,pathMatch:'full'},
  {path:'',redirectTo:'invoice',pathMatch:'full'},
  {path:'**',redirectTo:'invoice',pathMatch:'full'}]


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ProductComponent,
    SupplierComponent,
    ClientComponent,
    EmployeeComponent,
    RevenueComponent,
    ExpenseComponent,
    StockComponent,
    CategoryComponent,
    BuyComponent,
    SaleComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [{provide: APP_BASE_HREF, useValue: ''}],
  bootstrap: [AppComponent]
})
export class AppModule { }
