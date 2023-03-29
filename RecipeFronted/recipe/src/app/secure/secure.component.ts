import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',

})
export class SecureComponent implements OnInit {



  constructor(private http:HttpClient,
              private router: Router){

  }
  ngOnInit(): void {
    const headers = new HttpHeaders ({
      Authorization: `Bearer ${localStorage.getItem('token')}`
    });
    console.log(localStorage.getItem('token'));
    this.http.get('http://127.0.0.1:8000/api/logout/', {headers}).subscribe(
      result => console.log(result)
    );
  }
  }
