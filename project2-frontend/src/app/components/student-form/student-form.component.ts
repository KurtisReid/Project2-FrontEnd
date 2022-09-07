import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentutilService } from 'src/app/services/studentutil.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  constructor(private studentService:StudentutilService) { }

  firstName:string = "";
  lastName:string = "";
  guardianUsername:string = "";
  savedId:number = 0;

  ngOnInit(): void {
  }

  async register(){
    const student: Student = {id:0, firstName:this.firstName, lastName:this.lastName, guardianUsername:this.guardianUsername};
    const savedStudent: Student = await this.studentService.createStudent(student);
    this.savedId = savedStudent.id;
  }

}
