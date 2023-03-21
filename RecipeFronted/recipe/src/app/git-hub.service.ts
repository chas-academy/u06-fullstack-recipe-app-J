import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
s

@Injectable({
  providedIn: 'root'
})
export class GitHubService {

  private apiUrl = 'https://api.github.com/users/iamshazaam/events';

  constructor(private http: HttpClient) {}

  getGithubEvents(): Observable<any> {
    //
    return this.http.get<any>(this.apiUrl);
  }

}
