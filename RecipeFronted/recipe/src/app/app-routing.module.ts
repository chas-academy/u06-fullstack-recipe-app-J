import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './public/login/login.component';
import { LogoutComponent } from './public/logout/logout.component';

import { PublicComponent } from './public/public.component';
import { RegisterComponent } from './public/register/register.component';
import { SecureComponent } from './secure/secure.component';



const routes: Routes = [
  {
    path: '', 
    component: PublicComponent,
    children:[
          {path: '', component: HomeComponent},
          {path: 'login', component: LoginComponent},
          {path: 'logout', component: LogoutComponent},
          
     ]
},
  {path: 'secure', component: SecureComponent},
  {path: 'register', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
