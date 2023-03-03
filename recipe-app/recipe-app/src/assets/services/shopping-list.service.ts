import { EventEmitter } from "@angular/core";
import { Ingredient } from "../model/ingredient.model";

export class ShoppingListService {

  ingredientsListChanged= new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Pasta', 1),
    new Ingredient( 'Tomatoes', 5)
  ];

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient){
      this.ingredients.push(ingredient);
      this.ingredientsListChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients);
    this.ingredientsListChanged.emit(this.ingredients.slice());
  }
}