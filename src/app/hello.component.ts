import { Component, Input } from '@angular/core';

@Component({
  selector: 'app',
  template: `<h2>Todo</h2>`,
  styles: [`h1 { font-family: Lato; }`]
})

export class AppComponent  {

  // name:string;

  // myModel:any;

  filterText:string;

   todos:any[];
  
  constructor() {
     this.todos = [
      {text:'learn angular', done:true},
      {text:'build an angular app', done:false},
      {text:'modify', done:true},
      {text:'test', done:false},
      {text:'close', done:false}
      ];
    this.filterText = '';
  };
  
  // remaining = () => {
  //   return	this.todos.filter((element) => !element.done).length
  // };

  // addTodo = () => {
  //   const newToDo = {
  //     text: this.myModel,
  //     done: false
  //   };
  //   this.todos = [...this.todos, newToDo];
  // };

  // clean = () => {
  //   this.todos = this.todos.filter((element) => !element.done);
  // };
  // delete = (index) => {
  //   console.log(index);
  //   this.todos = this.todos.filter((element, idx) => {
  //   	return idx !== index;
  //   });
  // };
}

