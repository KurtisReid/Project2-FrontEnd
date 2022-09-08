import { Component, OnInit } from '@angular/core';
import { GradeutilService } from 'src/app/services/gradeutil.service';
import { Grade } from 'src/app/models/grade';
import { Student } from 'src/app/models/student';
import { StudentutilService } from 'src/app/services/studentutil.service';
import { StudenttrackerService } from 'src/app/services/studenttracker.service';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.css']
})
export class GradesComponent implements OnInit {

  constructor(private gradeService:GradeutilService, private studentService:StudentutilService, private studentTracker:StudenttrackerService) { }
  grades:Grade[] = [];
  students:Student = {id : 0,firstName:"",lastName:"",guardianUsername:""}
  id:number = 1;
  gIds:number = 0;
  retStr:string = "hello";


  ngOnInit(): void {
    (async () => {
      this.students = await this.studentTracker.getStudent();
      this.grades = await this.gradeService.getGradeByStudentId(this.students.id);
      //this.students = {id : 1,firstName:"John",lastName:"Jacob",guardianUsername:"Astor"}
      //this.grades = [{gId: 1, studentId:1, timeReported:1220, note: "he is a monster", behavior:"EVIL"}, {gId: 2 , studentId:1, timeReported:1220, note: "he is petty baby", behavior:"EVIL"}];
    })();


  }

  async deleteGrade(gIds:number)
  {
    const deletedGrade: string = await this.gradeService.deleteGrade(gIds);
    this.retStr = deletedGrade;

  }

}


