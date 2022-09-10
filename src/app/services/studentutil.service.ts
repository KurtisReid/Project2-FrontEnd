import { HttpClient } from '@angular/common/http';
import { DefaultIterableDiffer, Injectable } from '@angular/core';
import { catchError, firstValueFrom, of } from 'rxjs';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentutilService {

  constructor(private http: HttpClient) { }

  baseUrl:string = "http://localhost:8080";

  async createStudent(student:Student):Promise<Student>{
    const observable = this.http.post<Student>(this.baseUrl + "/students", student);
    const savedStudent = await firstValueFrom(observable);
    return savedStudent;
  }

  async getStudentById(id:number):Promise<Student>{
    const observable = this.http.get<Student>(this.baseUrl + "/students/byId/" + id);
    const savedStudent = await firstValueFrom(observable);
    return savedStudent;
  }

  async getStudentByName(name:string):Promise<Student[]>{
    const observable = this.http.get<Student[]>(this.baseUrl + "/students/byName/" + name);
    const savedStudent = await firstValueFrom(observable);
    return savedStudent;
  }
  async getStudentsByGuardian(guardian:string):Promise<Student[]>{
    const observable = this.http.get<Student[]>(this.baseUrl + "/students/byGuardian/" + guardian);
    const savedStudent = await firstValueFrom(observable);
    console.log(savedStudent);
    return savedStudent;
  }

  async getAllStudents():Promise<Student[]>{
    const observable = this.http.get<Student[]>(this.baseUrl + "/students/");
    const savedStudent = await firstValueFrom(observable);
    return savedStudent;
  }

  async terminateStudent(id:string):Promise<string>{
    const observable = this.http.delete<string>(this.baseUrl + "/students/" + id);

    //const deleted = await firstValueFrom(observable);
    //return deleted;
    try{
      const deleted = await firstValueFrom(observable);
      return deleted;
    }catch(e){
      console.log("some error with firstValueFrom");
      return "Error";
    }
  }
}
