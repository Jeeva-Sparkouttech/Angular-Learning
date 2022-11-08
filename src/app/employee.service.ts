/**
 * Angular dependency injection
 * 1) Define service class
 * 2) Register with injector (if we don't register the service will be treated as another regular class)
 * 3) Declare as dependency in components
 */
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable ,throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  getEmployees(): Observable<[]>{
  //   return [{"id":1 , "name" : "Jeeva" , "age" : 21},
  //   {"id":2 , "name" : "Naveen" , "age" : 23},
  //   {"id":3 , "name" : "Vignesh" , "age" : 22},
  //   {"id":4 , "name" : "Guna" , "age" : 20}]

  return this.http.get<[]>("https://reqres.in/api/users?page=2").pipe(catchError(this.errorHandler))
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(()=> new Error(error.message || "Server error"))
  }
}
