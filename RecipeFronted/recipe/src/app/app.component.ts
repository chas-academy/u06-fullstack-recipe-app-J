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


  constructor (private http:HttpClient,private router: Router,
    public userService: UserService) { }

 localStorage: any;
 logoutUser:any
  title = 'Recipe';
  isloggedIn = false;


  ngOnInit(): void{

  /* this.loggedIn = localStorage.getItem('token') !== null;
    const headers = new HttpHeaders ({
      Authorization: `Bearer ${localStorage.removeItem('token')}`
    });
    console.log(localStorage.getItem('token'));
    this.http.post('http://127.0.0.1:8000/api/logout', {headers}).subscribe(
      result => console.log(result)
    ); 
   */
  
  
  
  }

/*   logout(event:MouseEvent){
event.preventDefault();  
this.User.remove();
this.router.navigateByUrl('/login');  
   
  } */
 }