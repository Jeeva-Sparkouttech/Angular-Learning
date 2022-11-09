import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-job-list',
  template: `
  <h3>JOB LIST</h3>
  <ul  *ngFor="let jobName of jobList">
    <li (click)="onSelect(jobName)"> 
      {{jobName.id}}~{{jobName.job}} 
    </li>
  </ul>
  `,
  styles: [
  ]
})
export class JobListComponent implements OnInit {
  
  public selectedId:any
  public jobList = [{"id" :1 , "job" : "Blockchain developer"},
  {"id" :2 , "job" : "front-end developer"},
  {"id" :3 , "job" : "PHP developer"},
  {"id" :4 , "job" : "IOS developer"}]

  constructor(private router:Router,private activated:ActivatedRoute) { }

  ngOnInit(): void {
    this.activated.paramMap.subscribe((param:ParamMap)=>{
      this.selectedId = param.get('id')
    })
  }

  onSelect(jobName:any){
    //normal navigate
    //this.router.navigate(['/jobDetails',jobName.id])

    //relative navigate
    this.router.navigate([jobName.id],{relativeTo:this.activated})
  }
}
