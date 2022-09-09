import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root',
})


export class LoginutilService {

getJWT(jwt:string):string
{
    return jwt;
}

  constructor(private http: HttpClient) { }

  baseUrl:string = "http://localhost:8080";

  async getRole(sendjwt:string):Promise<string>
  {
    const httpOptions = 
    {
      headers : new HttpHeaders({
      'Content-Type' : 'application/json',
      'auth' : sendjwt
      })
    }
    
    const observable = this.http.get<string>(this.baseUrl + "/role", httpOptions);
    try{
      console.log("getRole");
      const jwt = await firstValueFrom(observable);
      //console.log("Sucess ");
      return jwt;

    } catch (error)
    {
      
      var errStr = JSON.stringify(error);
      var strarr = errStr.split("text");
      var jwtstrarr = strarr[1].split("}");
      //console.log("jwtstrarr " + jwtstrarr[0]);

      const newstr = jwtstrarr[0].substring(1);
      console.log("newstr why dont you see me" + newstr);

      return newstr;
    }
    
    return "it isnt sucessful";
  }


  async sendLoginCredentials(login:Login):Promise<string>{
    const observable = this.http.post<string>(this.baseUrl + "/login", login);
    //console.log(observable);



    try{
      const jwt = await firstValueFrom(observable);
      return jwt;
    } catch (error)
    {
      var errStr = JSON.stringify(error);
      var strarr = errStr.split("text");
      var jwtstrarr = strarr[1].split("}");
      const newstr = jwtstrarr[0].substring(3);
      return newstr.slice(0, -1);
    }

    //console.log(jwt);
    return 'it isnt sucessful';
  }


}

