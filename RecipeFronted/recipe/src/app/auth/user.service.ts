import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../user';
import { Router } from '@angular/router';
import { Token } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  isLoggedIn=false;
  httpClient: any;
  
  configUrl =  "http://127.0.0.1:8000/api/"; 
  username: any=""
  

  httpOptions ={
    headers: new HttpHeaders ({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer'

    })
  }

  constructor(private http: HttpClient, private router:Router ) { }
  doLogin() {
    this.isLoggedIn=true;
  }
  

  doLogout() {
  this.isLoggedIn=true;
  }
  loginUser(User: User){
     this.http.post<any>(this.configUrl + "login", User, this.httpOptions).pipe(catchError(this.handleError)).subscribe(res=>{
      console.log(res)
      localStorage.setItem("token", res.token)
     })
  }

  logoutUser(User: User){
    this.http.post<any>(this.configUrl + "logout", User, this.httpOptions).pipe(catchError(this.handleError)).subscribe(res=>{
     console.log(res)
     localStorage.removeItem('token')
    })
 }
 signUp(user: User): Observable<any> {
  let api = `${this.configUrl}/login`;
  return this.http.post(api, user).pipe(catchError(this.handleError));
}

/* remove(){
  return localStorage.removeItem('token');
} */


  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
