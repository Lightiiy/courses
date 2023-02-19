import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './componnet/header/header.component';
import { ShoppingListComponent } from './component/shopping/shopping-list/shopping-list.component';
import { RecipeListComponent } from './component/recipe/recipe-list/recipe-list.component';
import { ShoppingEditComponent } from './component/shopping/shopping-edit/shopping-edit.component';
import { RecipeEditComponent } from './component/recipe/recipe-edit/recipe-edit.component';
import { RecipeItemComponent } from './component/recipe/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './component/recipe/recipe-detail/recipe-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    RecipeListComponent,
    ShoppingEditComponent,
    RecipeEditComponent,
    RecipeItemComponent,
    RecipeDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
