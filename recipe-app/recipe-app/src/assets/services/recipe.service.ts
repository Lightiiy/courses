import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../model/ingredient.model";
import { Recipe } from "../model/recipe.model";
import { ShoppingListService } from "./shopping-list.service";


@Injectable()
export class RecipeService {

   recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Bolgonese Pasta',
    'A delicious, simple italian dish known by many',
     'https://www.fromvalerieskitchen.com/wordpress/wp-content/uploads/2022/09/Pasta-Bolognese-SQ-175.jpg',
     [new Ingredient("tomatoes", 3), new Ingredient('mushrooms', 3), new Ingredient("pizza dough", 1)]),
    new Recipe('Lasgna',
    'Dish loved by many, especially one famous orange cat',
     'https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg',
      [new Ingredient("tomatoes", 3), new Ingredient('meat', 3), new Ingredient("pack of lasgna pasta", 1)])
  ];

  constructor (private sLService: ShoppingListService) {

  }

  getRecipes(){
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.sLService.addIngredients(ingredients);
  }
}