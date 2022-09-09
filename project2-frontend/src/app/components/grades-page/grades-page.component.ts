import { Component, OnInit } from '@angular/core';

import { Grade } from 'src/app/models/grade';
import { Student } from 'src/app/models/student';
import { StudenttrackerService } from 'src/app/services/studenttracker.service';
@Component({
  selector: 'app-grades-page',
  templateUrl: './grades-page.component.html',
  styleUrls: ['./grades-page.component.css'],
})
export class GradesPageComponent implements OnInit {

  constructor(private studentTracker: StudenttrackerService) {}

  students: Student = {
    id: 0,
    firstName: '',
    lastName: '',
    guardianUsername: '',
  };

  enableGradeForm:boolean = true;

  ngOnInit(): void { 
   this.students = this.studentTracker.getStudent();
    const savedRole = localStorage.getItem("role");
    if(savedRole === "teacher"){
      this.enableGradeForm = true;
    }else{
      this.enableGradeForm = false;
    }

  }
}
