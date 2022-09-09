import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})


export class LoginutilService {

getJWT(jwt:string):string
{
    return jwt;
}

  constructor(private http: HttpClient) { }

  async getRole(sendjwt:string):Promise<string>
  {


        const httpOptions = 
        {
          headers : new HttpHeaders({
          'Content-Type' : 'application/json',
          'auth' : sendjwt
          })
        }
    
    const observable = this.http.get<string>("http://localhost:8080/role", httpOptions);
    //console.log(observable);



    try{
      console.log("getRole");
      const jwt = await firstValueFrom(observable);
      //console.log("Sucess ");
      return jwt;

    } catch (error)
    {
      
      //console.log(JSON.stringify(error));
      var errStr = JSON.stringify(error);
      var strarr = errStr.split("text");
      //console.log("Str " + strarr[0]);

      var jwtstrarr = strarr[1].split("}");
      //console.log("jwtstrarr " + jwtstrarr[0]);


      const newstr = jwtstrarr[0].substring(1);
      //console.log("newstr why dont you see me" + newstr);


      return newstr;
      //const newjwt = error.text;
      //newjwt.text;
      //console.log(error);
    }
    
    //console.log(jwt);
    return "it isnt sucessful";
  }


  async sendLoginCredentials(login:Login):Promise<string>{
    const observable = this.http.post<string>("http://localhost:8080/login", login);
    //console.log(observable);



    try{
      //console.log("trying");
      const jwt = await firstValueFrom(observable);
      //console.log("Sucess ");
      return jwt;

    } catch (error)
    {
      
      //console.log(JSON.stringify(error));
      var errStr = JSON.stringify(error);
      var strarr = errStr.split("text");
      //console.log("Str " + strarr[1]);

      var jwtstrarr = strarr[1].split("}");
      //console.log("jwtstrarr " + jwtstrarr[0]);
      const newstr = jwtstrarr[0].substring(3);
      //console.log("newstr why dont you see me " + newstr.slice(0, -1));

      return newstr.slice(0, -1);
      //const newjwt = error.text;
      //newjwt.text;
      //console.log(error);
    }
    
    //console.log(jwt);
    return "it isnt sucessful";
    
  }


}