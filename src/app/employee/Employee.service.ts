import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable} from 'rxjs';
import 'rxjs/add/operator/map';

import {Emp} from './Employee';

@Injectable()
export class EmployeeService{
    Url="/assets/E_info.json";
    
    constructor(private http:Http) {}

    LoadEmployee()
    {
        return  this.http.get(this.Url)
        .map((res:Response)=>{return <Emp[]>res.json().Emp;}) ;
    }

}