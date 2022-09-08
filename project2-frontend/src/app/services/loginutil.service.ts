import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginutilService {

  constructor(private http: HttpClient) { }

  async sendLoginCredentials(login:Login):Promise<String>{
    const observable = this.http.post<String>("http://localhost:8080/login", login);
    console.log(observable);
    try{
      const jwt = await firstValueFrom(observable);
      return jwt;
    } catch (error)
    {
      console.log(error);
    }
    
    //console.log(jwt);
    return "it isnt sucessful";
    
  }


}
