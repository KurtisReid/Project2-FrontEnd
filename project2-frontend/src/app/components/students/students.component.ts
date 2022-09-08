import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentutilService } from 'src/app/services/studentutil.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor(private router:Router, private studentSevice:StudentutilService) { }

  students:Student[] = [];

  ngOnInit(): void {
    (async () => {
      this.students = await this.studentSevice.getAllStudents();
    })();
  }

  async deleteStudent(id:number){
    const stringId:String = id.toString(); 
    console.log(stringId);
    const deleted = await this.studentSevice.terminateStudent(stringId);
    console.log(deleted);
    this.students = await this.studentSevice.getAllStudents();
  }
}
