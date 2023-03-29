import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/auth/user.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html'
})
export class LogoutComponent {

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.userService.logout();
    this.router.navigate(['login']);
  }

  me = {
    id: 1,
    name :"",
    email: "",
    password: "",
   }
  


  logout(){
    this.userService.logoutUser(this.me)
  }

}
