import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {Recipe} from '../../../../assets/model/recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Bolgonese Pasta','A delicious, simple italian dish known by many', 'https://www.fromvalerieskitchen.com/wordpress/wp-content/uploads/2022/09/Pasta-Bolognese-SQ-175.jpg'),
    new Recipe('Lasgna','Dish loved by many, especially one famous orange cat', 'https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg')
  ];

  @Output()
  recipeWasSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe){
  this.recipeWasSelected.emit(recipe);
  }

}
