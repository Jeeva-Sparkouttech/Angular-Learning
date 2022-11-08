import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  public employees:any = []
  public errMessage:any

  constructor(private _employeeService : EmployeeService) { }

  ngOnInit(): void {
    // this.employees = this._employeeService.getEmployees()
    this._employeeService.getEmployees()
    .subscribe(data => this.employees=data,
      error => this.errMessage = error)
  }

}
