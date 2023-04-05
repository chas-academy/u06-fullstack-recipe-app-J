import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';







@NgModule({
  declarations: [
    PublicComponent,
    LoginComponent,
    LogoutComponent,

    
  
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,

  ]
})
export class PublicModule { }
