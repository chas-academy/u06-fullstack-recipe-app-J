import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../Recipes/recipe.service';

@Component({
  selector: 'app-recept',
  templateUrl: './recept.component.html',
  styleUrls: ['./recept.component.css']
})
export class ReceptComponent {

  title = 'angular-external-api-show';

  searchquery = "";
  allRecept: any;

   constructor(private recipeService:RecipeService,private route: ActivatedRoute){}
   
   

   
  getRecept(){
    this.recipeService.getRecept(this.searchquery).subscribe(result => {
      let recept = result.hits.map((data: any) => {
        let recipe = data.recipe;
        recipe.idref = data._links.self.href.slice(38,70);
        return recipe;
      })
   console.log(result.hits[0]);
   console.log(recept)

   this.allRecept = recept;
    })
   }
}
