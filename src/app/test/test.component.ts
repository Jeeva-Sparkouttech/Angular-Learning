import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

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
  //component interaction
  @Input() public parentData:any //syntax1
  @Input('parentData') public inputData:any //syntax2

  @Output() public childEvent = new EventEmitter()

  public name = ""
  public text = "WELCOME TO SAMPLE ANGULAR WEB APP  !"
  public pipe = "Different kinds of pipes"
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

  public date = new Date()

  public manageClass = {
    "class-bind" : this.test,
    "text-danger" : this.hasError
  }

  public manageStyle ={
     color: this.highlight,
     fontStyle : "italic" 
  }

  public json_pipe = {
    "nickName" : "Jeeva",
    "initial" : "B",
    "age" : "21",
    "gender" : "male"
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

  fireEvent(){
    this.childEvent.emit('output data from child to parent')
  }

  ngIfVisible(){
    this.switch = true
  }

  ngIfInvisible(){
    this.switch = false
  }
}
