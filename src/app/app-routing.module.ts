import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppComponent } from './app.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { JobListComponent } from './job-list/job-list.component';
import { JobOverviewComponent } from './job-overview/job-overview.component';

const routes: Routes = [{path :'',component:AppComponent,pathMatch:'full'}
  ,{path:'employeeDetails' , component : EmployeeDetailComponent},
{path:'employeeList' , component : EmployeeListComponent},
{path:'jobDetails-relative',component:JobListComponent},
{path : 'jobDetails-relative/:id',component:JobDetailComponent,children:[{path:'overview',component:JobOverviewComponent}]},
{path:"**",component:PageNotFoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [EmployeeDetailComponent,EmployeeListComponent,JobDetailComponent,JobOverviewComponent]
