import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';




@NgModule({
  declarations: [
    PublicComponent,
    LoginComponent,
    RegisterComponent
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,

  ]
})
export class PublicModule { }
