import { Component, OnInit } from '@angular/core';

import { Grade } from 'src/app/models/grade';
import { Student } from 'src/app/models/student';
@Component({
  selector: 'app-grades-page',
  templateUrl: './grades-page.component.html',
  styleUrls: ['./grades-page.component.css'],
})
export class GradesPageComponent implements OnInit {
  constructor() {}

  enableGradeForm:boolean = true;

  ngOnInit(): void { 
    const savedRole = localStorage.getItem("role");
    if(savedRole === "teacher"){
      this.enableGradeForm = true;
    }else{
      this.enableGradeForm = false;
    }
  }
}
