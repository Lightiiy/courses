import { EventEmitter } from "@angular/core";
import { Ingredient } from "../model/ingredient.model";
import { Subject } from "rxjs";

export class ShoppingListService {

  ingredientsListChanged= new EventEmitter<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Pasta', 1),
    new Ingredient( 'Tomatoes', 5)
  ];

  getIngredients(){
    return this.ingredients.slice();
  }

  getIngredient(index: number){
    return this.ingredients[index];
  }

  updateIngredient(index: number, newIngredient: Ingredient){
    this.ingredients[index] = newIngredient;
    this.ingredientsListChanged.next(this.ingredients.slice());
  }

  addIngredient(ingredient: Ingredient){
      this.ingredients.push(ingredient);
      this.ingredientsListChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients);
    this.ingredientsListChanged.emit(this.ingredients.slice());
  }
  deleteIngredient(index: number){
    this.ingredients.splice(index, 1);
    this.ingredientsListChanged.next(this.ingredients.slice());
  }
}