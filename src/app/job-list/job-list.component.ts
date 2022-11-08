import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-list',
  template: `
  <h3>JOB LIST</h3>
  <ul *ngFor="let jobName of jobList">
    <li><button (click)="onSelect(jobName)">{{jobName.id}}~{{jobName.job}}</button>
  </ul>
  `,
  styles: [
  ]
})
export class JobListComponent implements OnInit {

  public jobList = [{"id" :1 , "job" : "Blockchain developer"},
  {"id" :2 , "job" : "front-end developer"},
  {"id" :3 , "job" : "PHP developer"},
  {"id" :4 , "job" : "IOS developer"}]

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onSelect(jobName:any){
    this.router.navigate(['/jobDetails',jobName.id])
  }

}
