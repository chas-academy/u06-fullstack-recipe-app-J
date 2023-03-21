import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReceptComponent } from './recept/recept.component';
import { OnlineComponent } from './online/online.component';
import{ RouterModule, Routes } from '@angular/router';


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
    OnlineComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
