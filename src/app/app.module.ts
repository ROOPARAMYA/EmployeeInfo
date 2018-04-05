import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { EmployeeComponent } from './employee/employee.component';
import {HttpModule } from '@angular/http';
import {EmployeeService} from './employee/Employee.service';
import { FormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'

const routes:Routes=[{path:'Employee', component:EmployeeComponent}];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    [ RouterModule.forRoot(routes) ]
  ],
  exports: [ RouterModule ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
