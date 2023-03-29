import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReceptComponent } from './recept/recept.component';
import { OnlineComponent } from './online/online.component';
import{ RouterModule, Routes } from '@angular/router';
import{ NgImageSliderModule} from 'ng-image-slider';
import{ FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PublicModule } from './public/public.module';
import { LogoutComponent } from './public/logout/logout.component';
import { SecureComponent } from './secure/secure.component';
import { AppRoutingModule } from './app-routing.module';
import { RegisterComponent } from './public/register/register.component';


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
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReceptComponent,
    OnlineComponent,
    SecureComponent,
    LogoutComponent,
    RegisterComponent,
    
  ],


  imports: [
    NgImageSliderModule,
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    PublicModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
