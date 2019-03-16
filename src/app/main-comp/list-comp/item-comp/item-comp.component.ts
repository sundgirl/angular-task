import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-item-comp',
  templateUrl: './item-comp.component.html',
  styleUrls: ['./item-comp.component.css']
})
export class ItemCompComponent implements OnInit {
  @Input() todos: any[];
  constructor() { 
    this.todos = [
      {text:'learn angular', done:true},
      {text:'build an angular app', done:false},
      {text:'modify', done:true},
      {text:'test', done:false},
      {text:'close', done:false}
      ];
  }

  ngOnInit() {
  }
  delete = (index) => {
      console.log(index);
      this.todos = this.todos.filter((element, idx) => {
      	return idx !== index;
      });
    };
}
