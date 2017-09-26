import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor() { }
 @Output() toggleMenuChange: EventEmitter<{name:string, amount:number}> = new EventEmitter();
  ngOnInit() {
  }

  addItem(name, amount) {
  	this.toggleMenuChange.emit({name : name.value, amount : amount.value});
   }
}
