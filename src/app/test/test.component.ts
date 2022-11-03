import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',//can use it with html tag <app-test></app-test>
  //selector: '.app-test' => represents class <div class = "app-test"></div>
  //selector: '[app-test]' => attribute <div app-test></div>
  
 templateUrl: './test.component.html',
  //template : '<div>Angular template</div>',
  // template : `<div  class="test-txt">
  // {{text}}<br>
  // {{url}}
  // </div>
  // <input id ="{{myId}}" type=text value="jeeva">
  // <input [id] = "myId" type=text value="jeeva">
  // `,
  
  styleUrls: ['./test.component.css'],
  // styles : [`
  // .test-txt{
  //   color : black;
  //   font-weight : bold;
  // }
  // `]
})
export class TestComponent implements OnInit {

  public name = ""
  public text = "WELCOME TO SAMPLE ANGULAR WEB APP  !"
  public url = window.location.href
  public myId = "328"
  public cbind = "class-bind"
  public highlight = "orange"
  public event_bind = " "
  public color = ""

  public isDisabled = true
  public hasError = false
  public test = true
  public switch = false
  
  public list = [1,2,3,4,5,6]

  public manageClass = {
    "class-bind" : this.test,
    "text-danger" : this.hasError
  }

  public manageStyle ={
     color: this.highlight,
     fontStyle : "italic" 
  }

  constructor() { }

  ngOnInit(): void {
  }

  Onclick(event:any){
    console.log(event)
    this.event_bind = "test works"
  }

  display(value:any){
    console.log(value)
  }

  colorpick(val:any){
    this.color = val
    console.log(val)

  }

  ngIfVisible(){
    this.switch = true
  }
  ngIfInvisible(){
    this.switch = false
  }
}
