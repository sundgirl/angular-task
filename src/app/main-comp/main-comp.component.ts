import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-comp',
  templateUrl: './main-comp.component.html',
  styleUrls: ['./main-comp.component.css']
})
export class MainCompComponent implements OnInit {
  todos:any[];
  constructor() {
     this.todos = [
    {text:'learn angular', done:true},
    {text:'build an angular app', done:false},
    {text:'modify', done:true},
    {text:'test', done:false},
    {text:'close', done:false}
    ];}

  ngOnInit() {
  }

}
