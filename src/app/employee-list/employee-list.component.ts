import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employees:any = []
  public errMessage:any

  constructor(private _employeeService : EmployeeService) { }

  ngOnInit(): void {
    // this.employees = this._employeeService.getEmployees()
    this._employeeService.getEmployees()
    .subscribe(data => this.employees = data,
      error => this.errMessage = error)

  }

}
