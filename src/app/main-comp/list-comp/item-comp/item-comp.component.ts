import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-item-comp',
  templateUrl: './item-comp.component.html',
  styleUrls: ['./item-comp.component.css']
})
export class ItemCompComponent implements OnInit {
  @Input() done: boolean;
  @Input() text: string;
  @Input() index: number;
  @Input() filterText: string;
  @Output() onItemDelete = new EventEmitter<number>()
  ngOnInit() {
  }
  emitRemove = () => {
    this.onItemDelete.emit(this.index);
  }
}
