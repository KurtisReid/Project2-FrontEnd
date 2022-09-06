import { StudentutilService } from './../../services/studentutil.service';
import { Component, OnInit, Input } from '@angular/core';
import { GradeutilService } from 'src/app/services/gradeutil.service';

import { Grade } from 'src/app/models/grade';
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-grade-form',
  templateUrl: './grade-form.component.html',
  styleUrls: ['./grade-form.component.css'],
})
export class GradeFormComponent implements OnInit {
  // @Input() grades: Grade[] = [];
  // @Input() students: Student = {
  //   id: 0,
  //   firstName: '',
  //   lastName: '',
  //   guardianUsername: '',
  // };

  constructor(
    private gradeService: GradeutilService,
    private studentService: StudentutilService
  ) {}

  gId: number = 0;
  firstName: string = 'Test Name';
  grade: string = '';
  date: number = 0;
  notes: string = '';

  ngOnInit(): void {
    // async () => {
    //   this.students = {
    //     id: 1,
    //     firstName: 'John',
    //     lastName: 'Jacob',
    //     guardianUsername: 'Astor',
    //   };
    // };
  }

  async createNewGrade() {
    const newGrade: Grade = {
      gId: 0,
      studentId: 0,
      timeReported: this.date,
      note: this.notes,
      behavior: this.grade,
    };
    const savedGrade: Grade = await this.gradeService.createGrade(newGrade);
    this.gId = savedGrade.gId;
  }
}
