import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './component/header/header.component';
import { ShoppingListComponent } from './component/shopping/shopping-list/shopping-list.component';
import { RecipeListComponent } from './component/recipe/recipe-list/recipe-list.component';
import { ShoppingEditComponent } from './component/shopping/shopping-edit/shopping-edit.component';
import { RecipeItemComponent } from './component/recipe/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './component/recipe/recipe-detail/recipe-detail.component';
import { RecipeComponent } from './component/recipe/recipe.component';
import { FormsModule } from '@angular/forms';
import { DropdownDirective } from '../assets/directive/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    RecipeListComponent,
    ShoppingEditComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
