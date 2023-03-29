import { Component } from '@angular/core';
import { RecipeService } from '../Recipes/recipe.service';

@Component({
  selector: 'app-recept',
  templateUrl: './recept.component.html',
  styleUrls: ['./recept.component.css']
})
export class ReceptComponent {

  title = 'angular-external-api-show';

  searchquery = "";


   constructor(private recipeService:RecipeService){}
   
   allRecipes: any;

   getRecipes(){
    this.recipeService.getRecipes(this.searchquery).subscribe(result => {
      let recipes = result.hits.map((data: any) => {
        let recipe = data.recipe;
        recipe.selfref = data._links.self.href;
        return recipe;
      })
   console.log(result.hits[0]);
   console.log(recipes)

   this.allRecipes = recipes;
    })
   }
}
