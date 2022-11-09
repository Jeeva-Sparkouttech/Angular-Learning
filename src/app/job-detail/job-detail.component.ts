import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router,ParamMap } from '@angular/router';

@Component({
  selector: 'app-job-detail',
  template: `
    <p>
      You have clicked the job with id {{departmentId}} 
    </p>
    <p><button (click)="showOverview()">overview</button></p>
    <router-outlet></router-outlet>
    <div>
      <!-- <a (click)="onPrevious()">previous</a> <br><br>
      <a (click)="onNext()">next</a> -->
    </div>
    <br> <button (click)="gotoList()">Back</button>
  `,
  styles: [
  ]
})
export class JobDetailComponent implements OnInit {
  public departmentId:any
  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    // let id = this.route.snapshot.paramMap.get('job')
    // this.departmentId = id
    this.route.paramMap.subscribe((param : ParamMap)=>{
      let id = param.get('id')
      this.departmentId = id
    })
    console.log('ONint')
  }

  // onPrevious(){
  //   let previousId = this.departmentId-1
  //   if(previousId>0 && previousId<5){
  //     this.router.navigate(["/jobDetails",previousId])
  //   }
  // }

  gotoList(){
    let selectedId = this.departmentId ? this.departmentId : null
    this.router.navigate(['../',{id:selectedId}],{relativeTo:this.route})
  }

  // onNext(){
  //   let nextId = +this.departmentId + +1
  //   if(nextId>0 && nextId<5){
  //   this.router.navigate(["/jobDetails",nextId])    
  // }
  // }

  showOverview(){
    this.router.navigate(['overview'],{relativeTo:this.route})
  }
}
