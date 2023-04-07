import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OnlineComponent } from './online/online.component';
import{ RouterModule, Routes } from '@angular/router';
import{ NgImageSliderModule} from 'ng-image-slider';
import{ FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PublicModule } from './public/public.module';
import { SecureComponent } from './secure/secure.component';
import { AppRoutingModule } from './app-routing.module';
import { RegisterComponent } from './public/register/register.component';
import { ReceptComponent } from './recept/recept.component';
import { RecipeComponent } from './recipe/recipe/recipe.component';
import { ContactComponent } from './contact/contact.component';
/* import { CommonModule } from '@angular/common';
import { UserService } from './auth/user.service'; */






const routes: Routes = [
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'recept',
    component: ReceptComponent
  },

  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path:'online',
    component: OnlineComponent
  },
  {
    path:'contact',
    component: ContactComponent
  },

];

@NgModule({
  declarations: [
    AppComponent,
    ReceptComponent,
    HomeComponent,
    OnlineComponent,
    SecureComponent,
    RegisterComponent,
    RecipeComponent,
    ContactComponent,
  
   
    
  ],


  imports: [
    NgImageSliderModule,
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    //CommonModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
