import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Grade } from '../models/grade';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GradeutilService {

  constructor(private http: HttpClient) { }

  async getAllGrades():Promise<Grade[]>{
    const observable = this.http.get<Grade[]>("http://localhost:8080/grades");
    const grades = await firstValueFrom(observable);
    return grades;
  }

  async createGrade(grade:Grade):Promise<Grade>{
    const observable = this.http.post<Grade>("http://localhost:8080/grades", grade);
    const savedGrade = await firstValueFrom(observable);
    return savedGrade;
  }

  async getGradeByStudentId(id:number):Promise<Grade[]>{
    const observable = this.http.get<Grade[]>("http://localhost:8080/grades/" + id);
    const grades = await firstValueFrom(observable);
    return grades;
  }

  async updateGrade(grade:Grade):Promise<Grade>{
    const observable = this.http.put<Grade>("http://localhost:8080/grades", grade);
    const savedGrade = await firstValueFrom(observable);
    return savedGrade;
  }

  async deleteGrade(id:number):Promise<string>{
    const observable = this.http.delete<string>("http://localhost:8080/grades/" + id);
    const grades = await firstValueFrom(observable);
    return grades;
  }
}
