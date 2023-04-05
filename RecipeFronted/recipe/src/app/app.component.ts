import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './auth/user.service';
import { HttpErrorResponse } from '@angular/common/http';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{


  constructor (private http:HttpClient,private router: Router) {

  }



  title = 'Recipe';
  
   
  loggedIn = false;


  ngOnInit(): void{
    this.loggedIn = localStorage.getItem('token') !== null;
    const headers = new HttpHeaders ({
      Authorization: `Bearer ${localStorage.getItem('token')}`
    });
    console.log(localStorage.getItem('token'));
    this.http.post('http://127.0.0.1:8000/api/logout', {headers}).subscribe(
      result => console.log(result)
    );
  
  
  
  
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
   
  }
 }