
import { Component, OnInit} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
  
})
export class RegisterComponent implements OnInit{


form: any;
  router: any;
  http: any;

  constructor(private fb: FormBuilder) {
    
  }
  ngOnInit(){
   this.form = this.fb.group({
    first_name: ['', Validators.required],
    last_name: ['', Validators.required],
    email: ['', [Validators.required,Validators.email]],
    password: ['', [Validators.required]],
    password_confirmation: ['', Validators.required],
    
   });
  }


  submit(){
    const formData = this.form.getRawValue();

    this.http.post('http://localhost:800/register', formData).subscribe(
    );
  }


}
