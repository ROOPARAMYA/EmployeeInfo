import { Component, OnInit } from '@angular/core';
import {NgForm } from '@angular/forms';
import {Http, Response} from '@angular/http';
import { Observable} from 'rxjs';
import 'rxjs/add/operator/map';

import {Emp} from './Employee';
import {EmployeeService} from './Employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {
  
  Emp:Emp[];
  Edit=false;
  Add=false;
  data={};
  
  constructor(private EmplyoeeInfo: EmployeeService, private http:Http) { }

  ngOnInit()
   {
    this.getAllEmp();
   }
  getAllEmp()
  {
      this.EmplyoeeInfo.LoadEmployee()
     .subscribe(data=>this.Emp=data);
  }

  deleteEmployee(index) 
  {
    if(confirm("Do you want to delete Employee record"))
    {
    this.Emp.splice(index, 1);
    }
  }

  editEmployee(Id)
  {
    this.Edit=!this.Edit;
    let E_Id:Number;
    E_Id=parseInt(Id);
    this.data={};
    this.EmplyoeeInfo.LoadEmployee()
     .subscribe((out)=>{let record=out;
                for(let i=0; i<record.length; i++)
                {
                    if(E_Id==record[i].Id)
                    {
                      this.data=record[i];                
                    }
                  }
               });
  }

 updateEmployee(changed)
 {
    let changes={"Id":0,
                  "Name":"",
                  "Designation":"",
                  "DOJ":"",
                  "Phno":"",
                  "Skills":""  
               };
    changes.Id=changed.Id;
    changes.Name=changed.Name;
    changes.Designation=changed.Designation;
    changes.DOJ=changed.DOJ;
    changes.Phno=changed.Phno;
    changes.Skills=changed.Skills;
  
      for(let i=0; i<this.Emp.length; i++)
      {
        if(this.Emp[i].Id==changes.Id)
        {
          var index=i;
          break;
        }
      }
       this.Emp.splice(index,1, changes);
  }
      
addEmployee(Newdata)
  {
    let changes={"Id":0,
                  "Name":"",
                  "Designation":"",
                  "DOJ":"",
                  "Phno":"",
                  "Skills":""  
                };
    changes.Id=Newdata.Id;
    changes.Name=Newdata.Name;
    changes.Designation=Newdata.Designation;
    changes.DOJ=Newdata.DOJ;
    changes.Phno=Newdata.Phno;
    changes.Skills=Newdata.Skills;
    this.Emp.push(changes);
  }
}