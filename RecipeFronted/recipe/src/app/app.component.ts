import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './auth/user.service';
import { HttpErrorResponse } from '@angular/common/http';



interface LogoutResponse {
  message: string;
} 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor (private http:HttpClient,private router: Router, private userService: UserService) {

  }



  title = 'Recipe';
  
   
  loggedIn = false;


  

  logout() {

      localStorage.removeItem("token");
    }
  



}