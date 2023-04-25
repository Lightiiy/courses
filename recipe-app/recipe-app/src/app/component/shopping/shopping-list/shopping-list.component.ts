import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/assets/model/ingredient.model';
import { ShoppingListService } from 'src/assets/services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[]
  subscritpion : Subscription;

  constructor(private sLService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.sLService.getIngredients();
    this.subscritpion  = this.sLService.ingredientsListChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    )
  }

  onEditItem( index: number){
    this.sLService.startedEditing.next(index);
  }

  ngOnDestroy() {
    this.subscritpion.unsubscribe();
  }


}  
