import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-clean-comp',
  templateUrl: './clean-comp.component.html',
  styleUrls: ['./clean-comp.component.css']
})
export class CleanCompComponent implements OnInit {
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
