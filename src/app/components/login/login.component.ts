import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';
import { LoginutilService } from 'src/app/services/loginutil.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:LoginutilService, private router: Router) { }
  username:string = "";
  password:string = "";
  savedJwt: string = "";
  

  ngOnInit(): void {
    
  }
  
  async registerLogin()
  {
    console.log("registerLogin");
    const login: Login = {username:this.username, password:this.password}
    const jwt: string = await this.loginService.sendLoginCredentials(login);
    
    
    this.savedJwt = jwt;
    // check if gaurdian or teacher
    const role: string = await this.loginService.getRole(this.savedJwt);
    localStorage.setItem("role", role);
    localStorage.setItem("username", this.username);
    // router
    this.router.navigateByUrl("/students-page");




  }

}
