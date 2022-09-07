
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

  studentId:number = 0;
  timeReported:number = 0;
  note:string = "";
  behavior:string = "";
  savedId:number = 0;
  // grade: Grade = {
  //   gId: 0,
  //   studentId: 0,
  //   timeReported: 0,
  //   note: '',
  //   behavior: '',
  // };

  ngOnInit(): void {}

  async createNewGrade() {
    const newGrade: Grade = {
      gId: 0,
      studentId: 0,
      timeReported: this.timeReported,
      note: this.note,
      behavior: this.behavior,
    };
    const savedGrade: Grade = await this.gradeService.createGrade(newGrade);
    this.savedId = savedGrade.gId;
  }
}
