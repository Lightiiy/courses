import { Component, OnInit } from '@angular/core';
import {Recipe} from '../../../../assets/model/recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Bolgonese Pasta','A delicious, simple italian dish known by many', 'https://www.fromvalerieskitchen.com/wordpress/wp-content/uploads/2022/09/Pasta-Bolognese-SQ-175.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
