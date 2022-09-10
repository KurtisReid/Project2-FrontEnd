import { StudentutilService } from './../../services/studentutil.service';
import { Student } from './../../models/student';
import { Component, OnInit, Input } from '@angular/core';
import { GradeutilService } from 'src/app/services/gradeutil.service';

import { Grade } from 'src/app/models/grade';

import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpStatusCode, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { StudenttrackerService } from 'src/app/services/studenttracker.service';

@Component({
  selector: 'app-grade-form',
  templateUrl: './grade-form.component.html',
  styleUrls: ['./grade-form.component.css'],
})
export class GradeFormComponent implements OnInit {
  gradesFormGroup!: FormGroup;
  gradesRadio: FormControl = new FormControl();

  constructor(
    private gradeService: GradeutilService,
    private studentService: StudentutilService,
    private fb: FormBuilder,
    private router: Router,
    private studentTracker: StudenttrackerService
  ) {}

  students:Student = {id : 0,firstName:"",lastName:"",guardianUsername:""}
  firstName: string = 'John McClain';
  // firstName: this.studentService.
  timeReported: number = 0;
  note: string = '';
  behavior: string = ''; //grade
  savedId: number = 0;

  ngOnInit(): void {
    this.gradesFormGroup = this.fb.group({
      gradesRadio: this.gradesRadio,
    });
    this.students = this.studentTracker.getStudent();
    console.log(this.students.id);
    
  }

  async createNewGrade() {
    console.log('Clicked Create Grade button');
    let radioGrade = this.gradesFormGroup.get('gradesRadio')?.value;

    const newGrade: Grade = {
      gId: 0,
      studentId: this.students.id,
      timeReported: (Date.now() / 1000).toString(),
      note: this.note,
      behavior: radioGrade,
    };

    const savedGrade: Grade = await this.gradeService.createGrade(newGrade);
    this.savedId = savedGrade.gId;
    console.log('Saved timeReported: ' + this.timeReported);
    console.log('Saved note: ' + this.note);
    console.log('Saved radio grade: ' + radioGrade);
    console.log(savedGrade.studentId);
    alert(this.students.firstName + `'s grade has been saved!`);

    location.reload();

    // timeReported = 0;
    // note = '';
    // behavior = ''; //grade
    // savedId = 0;
  }
}
