import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Injectable } from '@angular/core';
import Recipe from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      'A Fat Buger',
      'This burger is wayyyyy PHAT',
      'https://www.gimmesomeoven.com/wp-content/uploads/2014/03/Cajun-Jambalaya-Recipe-with-Andouille-Sausage-Shrimp-and-Chicken-32-1100x1650.jpg',
      [
        new Ingredient('Buns', 10),
        new Ingredient('Meat', 2),
        new Ingredient('fries', 25)
      ]),
    new Recipe(
      'Hottie Doggystyle',
      'mmmhmmmm',
      'https://www.gimmesomeoven.com/wp-content/uploads/2014/03/Cajun-Jambalaya-Recipe-with-Andouille-Sausage-Shrimp-and-Chicken-32-1100x1650.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Sausage', 1)
      ]),
    new Recipe(
      'Coffee',
      'A cup of Joe',
      'https://www.gimmesomeoven.com/wp-content/uploads/2014/03/Cajun-Jambalaya-Recipe-with-Andouille-Sausage-Shrimp-and-Chicken-32-1100x1650.jpg',
      [
        new Ingredient('Scoops of Coffee Beans', 3)
      ])
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredient: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredient);
  }

}

