import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-comp',
  templateUrl: './list-comp.component.html',
  styleUrls: ['./list-comp.component.css']
})
export class ListCompComponent implements OnInit {
  @Input() todos: any[];
  @Input() filterText: string;
  constructor() {this.todos = [
    {text:'learn angular', done:true},
    {text:'build an angular app', done:false},
    {text:'modify', done:true},
    {text:'test', done:false},
    {text:'close', done:false}
    ];
    this.filterText = '';
  }

  delete = (index) => {
    this.todos = this.todos.filter((element, idx) => {
    	return idx !== index;
    });
  };
  
  ngOnInit() {
  }

}
