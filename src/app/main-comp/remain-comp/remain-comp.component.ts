import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-remain-comp',
  templateUrl: './remain-comp.component.html',
  styleUrls: ['./remain-comp.component.css']
})
export class RemainCompComponent implements OnInit {
  @Input() todos: any[];
  constructor() { this.todos = [
    {text:'learn angular', done:true},
    {text:'build an angular app', done:false},
    {text:'modify', done:true},
    {text:'test', done:false},
    {text:'close', done:false}
    ];}

  ngOnInit() {
  }
  remaining = () => {
      return	this.todos.filter((element) => !element.done).length
    };
}
