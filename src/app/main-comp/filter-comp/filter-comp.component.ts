import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-filter-comp',
  templateUrl: './filter-comp.component.html',
  styleUrls: ['./filter-comp.component.css']
})
export class FilterCompComponent implements OnInit {
  @Input() todos: any[];
  constructor() {this.todos = [
    {text:'learn angular', done:true},
    {text:'build an angular app', done:false},
    {text:'modify', done:true},
    {text:'test', done:false},
    {text:'close', done:false}
    ]; }

  ngOnInit() {
  }

  
}
