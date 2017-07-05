import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/ingredients.model'

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit {
	ingredients:Ingredient[] = [new Ingredient('apple',5), new Ingredient('mango',5)]
  constructor() { }

  ngOnInit() {
  }

}
