import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root',
})
export class LoginutilService {
  constructor(private http: HttpClient) {}

  async sendLoginCredentials(login: Login): Promise<string> {
    const observable = this.http.post<string>(
      'http://localhost:8080/login',
      login
    );
    //console.log(observable);

    try {
      console.log('trying');
      const jwt = await firstValueFrom(observable);
      console.log('Sucess ');
      return jwt;
    } catch (error) {
      console.log(JSON.stringify(error));
      var errStr = JSON.stringify(error);
      var strarr = errStr.split('text');
      console.log('Str ' + strarr[1]);

      var jwtstrarr = strarr[1].split('}');
      console.log('jwtstrarr ' + jwtstrarr[0]);

      return jwtstrarr[0];
      //const newjwt = error.text;
      //newjwt.text;
      //console.log(error);
    }

    //console.log(jwt);
    return 'it isnt sucessful';
  }
}
