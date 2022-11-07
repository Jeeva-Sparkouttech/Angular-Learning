/**
 * Angular dependency injection
 * 1) Define service class
 * 2) Register with injector (if we don't register the service will be treated as another regular class)
 * 3) Declare as dependency in components
 */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(){
    return [{"id":1 , "name" : "Jeeva" , "age" : 21},
    {"id":2 , "name" : "Naveen" , "age" : 23},
    {"id":3 , "name" : "Vignesh" , "age" : 22},
    {"id":4 , "name" : "Guna" , "age" : 20}]
  }
}
