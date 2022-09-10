import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Grade } from '../models/grade';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GradeutilService {

  constructor(private http: HttpClient) { }

  baseUrl:string = "http://localhost:8080";

  async getAllGrades():Promise<Grade[]>{
    const observable = this.http.get<Grade[]>("/grades");
    const grades = await firstValueFrom(observable);
    return grades;
  }

  async createGrade(grade:Grade):Promise<Grade>{
    const observable = this.http.post<Grade>(this.baseUrl + "/grades", grade);
    const savedGrade = await firstValueFrom(observable);
    return savedGrade;
  }

  async getGradeByStudentId(id:number):Promise<Grade[]>{
    console.log(id);
    const observable = this.http.get<Grade[]>(this.baseUrl + "/grades/" + id);
    const grades = await firstValueFrom(observable);
    console.log("grade4s" + grades);
    return grades;
  }

  async updateGrade(grade:Grade):Promise<Grade>{
    const observable = this.http.put<Grade>(this.baseUrl + "/grades", grade);
    const savedGrade = await firstValueFrom(observable);
    return savedGrade;
  }

  async deleteGrade(id:number):Promise<string>{
    const observable = this.http.delete<string>(this.baseUrl + "/grades/" + id);
    //const grades = await firstValueFrom(observable);
    try{
      const deleted = await firstValueFrom(observable);
      return deleted;
    }catch(e){
      console.log("some error with firstValueFrom");
      return "Error";
    }
    //return grades;
  }
}
