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

  constructor(private loginService:LoginutilService) { }
  username:string = "";
  password:string = "";
  savedJwt: string = "";
  

  ngOnInit(): void {
    
  }
  
  async registerLogin()
  {
    console.log("registerLogin");
    const login: Login = {username:this.username, password:this.password}
    const jwt: String = await this.loginService.sendLoginCredentials(login);
    console.log("i got it");
    console.log(jwt);
    this.savedJwt = jwt;
    // check if gaurdian or teacher
    const role: string = await this.loginService.getRole(this.savedJwt);
    localStorage.setItem("role", role);
    localStorage.setItem("username", this.username);
    // router
    this.router.navigateByUrl("/students-page");




  }

}
