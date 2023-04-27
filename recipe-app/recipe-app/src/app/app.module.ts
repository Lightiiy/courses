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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownDirective } from '../assets/directive/dropdown.directive';
import { ShoppingListService } from 'src/assets/services/shopping-list.service';
import { RecipeStartComponent } from './component/recipe/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './component/recipe/recipe-edit/recipe-edit.component';

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
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
