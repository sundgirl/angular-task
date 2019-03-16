import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-add-comp',
  templateUrl: './add-comp.component.html',
  styleUrls: ['./add-comp.component.css']
})
export class AddCompComponent implements OnInit {
  @Input() todos: any[];
  myModel:any;
  constructor() { this.todos = [
    {text:'learn angular', done:true},
    {text:'build an angular app', done:false},
    {text:'modify', done:true},
    {text:'test', done:false},
    {text:'close', done:false}
    ];}

  ngOnInit() {
  }
  addTodo = () => {
    const newToDo = {
      text: this.myModel,
      done: false
    };
    this.todos = [...this.todos, newToDo];
  };
}
