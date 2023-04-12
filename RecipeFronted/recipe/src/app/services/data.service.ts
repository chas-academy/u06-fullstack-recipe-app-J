import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Register } from '../public/register/register.model';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }

  registerUser(data: Register){
    return this.httpClient.post('https://u06-fullstack-recipe-app-j-production.up.railway.app/api/register',data);
  }
}
