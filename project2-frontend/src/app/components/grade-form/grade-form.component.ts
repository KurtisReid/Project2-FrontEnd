import { StudentutilService } from './../../services/studentutil.service';
import { Student } from './../../models/student';
import { Component, OnInit, Input } from '@angular/core';
import { GradeutilService } from 'src/app/services/gradeutil.service';

import { Grade } from 'src/app/models/grade';

import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpStatusCode, HttpClient } from '@angular/common/http';

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
    private fb: FormBuilder
  ) {}

  studentId: number = 0; //This needs to be changed to grab Id from url
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
    //I think we need to get studentId in here
    this.studentId;
  }

  async createNewGrade() {
    console.log('Clicked Create Grade button');
    let radioGrade = this.gradesFormGroup.get('gradesRadio')?.value;

    const newGrade: Grade = {
      gId: 0,
      studentId: this.studentId,
      timeReported: Date.now() / 1000,
      note: this.note,
      behavior: radioGrade,
    };

    const savedGrade: Grade = await this.gradeService.createGrade(newGrade);
    this.savedId = savedGrade.gId;
    console.log('Saved timeReported: ' + this.timeReported);
    console.log('Saved note: ' + this.note);
    console.log('Saved radio grade: ' + radioGrade);
    
    alert(this.firstName + `'s grade has been saved!`);

    // timeReported = 0;
    // note = '';
    // behavior = ''; //grade
    // savedId = 0;
  }
}
