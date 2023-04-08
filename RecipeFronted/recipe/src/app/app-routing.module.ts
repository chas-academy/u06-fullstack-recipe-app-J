import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './public/login/login.component';
import { LogoutComponent } from './public/logout/logout.component';

import { PublicComponent } from './public/public.component';
import { RegisterComponent } from './public/register/register.component';
import { ReceptComponent } from './recept/recept.component';
import { RecipeComponent } from './recipe/recipe/recipe.component';
import { SecureComponent } from './secure/secure.component';



const routes: Routes = [
  {
    path: '', 
    component: PublicComponent,
    children:[
          {path: '', component: ReceptComponent},
         {path: 'login', component: LoginComponent},
         {path: 'logout', component: LogoutComponent},
        // {path: '**', component: HomeComponent},
    
           
     ]
},
  {path: 'secure', component: SecureComponent},
  {path: 'register', component: RegisterComponent},
 {path: 'recipe/:id', component: RecipeComponent},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }