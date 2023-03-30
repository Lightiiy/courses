import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeDetailComponent } from './component/recipe/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './component/recipe/recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './component/recipe/recipe-start/recipe-start.component';
import { RecipeComponent } from './component/recipe/recipe.component';
import { ShoppingListComponent } from './component/shopping/shopping-list/shopping-list.component';

const routes: Routes = [
  {path: '',pathMatch:'full',  redirectTo: '/recipes'},
  {path: 'recipes', component: RecipeComponent, children:[
    {path: '',component: RecipeStartComponent},
    {path: 'new', component: RecipeEditComponent},
    {path: ':id', component: RecipeDetailComponent},
  {path: ':id/edit', component: RecipeEditComponent}] },
  {path: 'shopping-list', component: ShoppingListComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
