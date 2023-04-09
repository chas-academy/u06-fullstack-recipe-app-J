import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from 'src/app/Recipes/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
 
})
export class RecipeComponent {


  title = 'Show one recipe';
  recipe: any;
  id = "";

  constructor(private recipeService: RecipeService, private route: ActivatedRoute){
    
  }
  ngOnInit(): void {
   this.route.params.subscribe(params => {
    console.log(params)
    console.log(params['id'])
    this.id = params ['id'];

    this.recipeService.getRecipe(this.id).subscribe(result => {
      this.recipe = result;
      console.log(result)
    })
   });
  }
}
