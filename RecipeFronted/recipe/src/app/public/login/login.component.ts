import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',

})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  loggedIn = false;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.form = this.fb.group({
      email: '',
      password: ''
    });
  }

  submit() {
    const formData = this.form.getRawValue();

    const data = {
      email: formData.email,
      password: formData.password
    };

    this.http.post('http://127.0.0.1:8000/api/login', data).subscribe(
      (result: any) => {
        localStorage.setItem('token', result.access_token);
        this.loggedIn = true;
        this.router.navigate(['/secure']);
      },
      error => {
        console.log('error');
        console.log(error);
      }
    );
  }


}