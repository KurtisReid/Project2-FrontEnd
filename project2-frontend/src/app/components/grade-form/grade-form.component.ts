
import { Component, OnInit, Input } from '@angular/core';
import { GradeutilService } from 'src/app/services/gradeutil.service';

import { Grade } from 'src/app/models/grade';


@Component({
  selector: 'app-grade-form',
  templateUrl: './grade-form.component.html',
  styleUrls: ['./grade-form.component.css'],
})
export class GradeFormComponent implements OnInit {

  constructor(
    private gradeService: GradeutilService
  ) {}

  grade: Grade = {
    gId: 0,
    studentId: 0,
    timeReported: 0,
    note: '',
    behavior: '',
  };

  ngOnInit(): void {}

  async createNewGrade() {
    const newGrade: Grade = {
      gId: 0,
      studentId: 0,
      timeReported: this.grade.timeReported,
      note: this.grade.note,
      behavior: this.grade.behavior,
    };
    const savedGrade: Grade = await this.gradeService.createGrade(newGrade);
    this.gId = savedGrade.gId;
  }
}
