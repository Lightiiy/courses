import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscribable, Subscription } from 'rxjs';
import { Ingredient } from 'src/assets/model/ingredient.model';
import { ShoppingListService } from 'src/assets/services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('shoppingForm', {static: false}) sLForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  @Output() ingredientAdded = new EventEmitter<Ingredient>;
  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
    this.subscription  = this.slService.startedEditing.subscribe(
      (index: number) => {
      this.editedItemIndex = index;
      this.editMode = true;
      this.editedItem = this.slService.getIngredient(this.editedItemIndex);
        this.sLForm.setValue({
          nameForm: this.editedItem.name,
          amountForm: this.editedItem.amount
        })
      }
    );
  }

  onSubmit(form: NgForm){
    const value = form.value;
    const newIngredient = new Ingredient(value.nameForm, value.amountForm);
    if (this.editMode){
      this.slService.updateIngredient(this.editedItemIndex, newIngredient);
    }
    else
    {
      this.slService.addIngredient(newIngredient);
    }
      this.editMode = false;
      form.reset();
  }

  onClear(){
    this.sLForm.reset();
    this.editMode = false;
  }

  onRemove(){
    this.slService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
