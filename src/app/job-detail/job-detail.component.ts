import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-job-detail',
  template: `
    <p>
      You have clicked the job with {{departmentId}} 
    </p>
  `,
  styles: [
  ]
})
export class JobDetailComponent implements OnInit {
  public departmentId:any
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id')
    this.departmentId = id
  }

}
