
import { Component, OnInit} from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Register } from './register.model';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
  
})
export class RegisterComponent implements OnInit{
   register = new Register();
   data: any;
   message: any;
   


  constructor(private dataservice: DataService) {  }

  ngOnInit(){
   }

   submit(){
    this.dataservice.registerUser(this.register).subscribe(res=>{ 
      this.data = (res);
       this.message = this.data.message;
    })
   }
  
  
  
  }


