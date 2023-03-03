import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/assets/model/ingredient.model';
import { ShoppingListService } from 'src/assets/services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[]

  constructor(private sLService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.sLService.getIngredients();
    this.sLService.ingredientsListChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    )
  }





}  
