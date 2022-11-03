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

  public text = "WELCOME TO SAMPLE ANGULAR WEB APP  !"
  public url = window.location.href
  public myId = "328"
  public cbind = "class-bind"
  public highlight = "orange"

  public isDisabled = true
  public hasError = false
  public test = true

  public manageClass = {
    "class-bind" : this.test,
    "text-danger" : !this.hasError
  }

  public manageStyle ={
     color: this.highlight,
     fontStyle : "italic" 
  }

  constructor() { }

  ngOnInit(): void {
  }

}