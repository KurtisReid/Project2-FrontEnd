import { Injectable } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentutilService } from 'src/app/services/studentutil.service';

@Injectable({
  providedIn: 'root'
})
export class StudenttrackerService {

  currentStudent:Student = {id : 0,firstName:"",lastName:"",guardianUsername:""};

  constructor(private studentService:StudentutilService) { }

  ngOnInit(): void{ 
    const currentStudent = localStorage.getItem('currentStudent');
    if(currentStudent != null){
      console.log("init is on refresh");
      this.currentStudent = JSON.parse(currentStudent);
    }
  }

  setStudent(s:Student):void{
    this.currentStudent = s;
    localStorage.setItem('currentStudent', JSON.stringify(this.currentStudent));
  }

  getStudent():Student{
    const currentStudent = localStorage.getItem('currentStudent');
    if(currentStudent != null){
      return JSON.parse(currentStudent);
    }
    return this.currentStudent;
  }
}
