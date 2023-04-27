import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from 'src/assets/model/recipe.model';
import { RecipeService } from 'src/assets/services/recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode: boolean = false;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute, private rService: RecipeService) { }



  ngOnInit(): void {
    this.route.params.subscribe( (params: Params) => {
      this.id =+ params.id;
      this.editMode = params['id'] != null;
      this.initForm();
    })
  }

  private initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);

    if(this.editMode) {
      const recipe = this.rService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.desc;
      if( recipe['ingredients'])
      {
        for (let ingredient of recipe.ingredients){
          recipeIngredients.push(
            new FormGroup({
              'nameForm': new FormControl(ingredient.name, Validators.required),
              'amountForm': new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
            })
          );
        }
      }
    }

    this.recipeForm= new FormGroup({
    'nameForm': new FormControl(recipeName, Validators.required),
    'imagePathForm': new FormControl(recipeImagePath, Validators.required),
    'descriptionForm': new FormControl(recipeDescription, Validators.required),
    'ingredientsForm': recipeIngredients,
    });

  }

  onSubmit(){
    const newRecipe = new Recipe(this.recipeForm.value['nameForm'], this.recipeForm.value['descriptionForm'], this.recipeForm.value['imagePathForm'], this.recipeForm.value['ingredientsForm']);
    if (this.editMode){
      this.rService.updateRecipe(this.id, newRecipe);
    }
    else
    {
      this.rService.addRecipe(newRecipe);
    }
  }

  onAddIngredient(){
    (<FormArray>this.recipeForm.get('ingredientsForm')).push( new FormGroup({
      'nameForm': new FormControl(),
      'amountForm': new FormControl(null,  [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
    }))
  }

  get controls() { // a getter!
  return (<FormArray>this.recipeForm.get('ingredientsForm')).controls;
}

}
