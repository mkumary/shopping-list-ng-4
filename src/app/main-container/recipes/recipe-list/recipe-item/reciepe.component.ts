import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
import { Recipe } from '../../recipe.model';
import { $ } from 'jquery';


@Component({
  selector: 'app-reciepe',
  templateUrl: './reciepe.component.html',
  styleUrls: ['./reciepe.component.css']
})
export class ReciepeComponent implements OnInit {

 @Output() onAddRecipeEvent:EventEmitter<{name:string, description:string, imagePath:string}> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onAddRecipe(name, desc, imagePath){
  		this.onAddRecipeEvent.emit({name : name.value, description : desc.value, imagePath : imagePath});
   		$('#myModal').modal('hide');
  }

}
