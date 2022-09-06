import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentutilService {

  constructor(private http: HttpClient) { }

  async createStudent(student:Student):Promise<Student>{
    const observable = this.http.post<Student>("http://localhost:8080/students", student);
    const savedStudent = await firstValueFrom(observable);
    return savedStudent;
  }

  async getStudentById(id:number):Promise<Student>{
    const observable = this.http.get<Student>("http://localhost:8080/students/byId/" + id);
    const savedStudent = await firstValueFrom(observable);
    return savedStudent;
  }

  async getStudentByName(name:String):Promise<Student>{
    const observable = this.http.get<Student>("http://localhost:8080/students/" + name);
    const savedStudent = await firstValueFrom(observable);
    return savedStudent;
  }

  async getAllStudents():Promise<Student>{
    const observable = this.http.get<Student>("http://localhost:8080/students/");
    const savedStudent = await firstValueFrom(observable);
    return savedStudent;
  }

  async terminateStudent(id:number):Promise<string>{
    const observable = this.http.delete<string>("http://localhost:8080/students/" + id);
    const savedStudent = await firstValueFrom(observable);
    return savedStudent;
  }
}
