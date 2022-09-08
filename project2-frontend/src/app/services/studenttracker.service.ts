import { Injectable } from '@angular/core';
import { Student } from 'src/app/models/student';

@Injectable({
  providedIn: 'root'
})
export class StudenttrackerService {

  currentStudent:Student = {id : 0,firstName:"",lastName:"",guardianUsername:""};

  constructor() { }

  setStudent(s:Student):void{
    this.currentStudent = s;
  }

  getStudent():Student{
    return this.currentStudent;
  }
}
