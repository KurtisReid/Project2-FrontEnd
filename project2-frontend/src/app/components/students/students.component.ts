import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentutilService } from 'src/app/services/studentutil.service';
import { Router } from '@angular/router';
import { StudenttrackerService } from 'src/app/services/studenttracker.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor(private studentTracker:StudenttrackerService,  private router:Router, private studentSevice:StudentutilService) { }

  students:Student[] = [];

  ngOnInit(): void {
    (async () => {
      this.students = await this.studentSevice.getAllStudents();
      this.students = this.students.sort((s1,s2) => {
        if(s1.lastName < s2.lastName) return -1
        else if(s1.lastName > s2.lastName) return 1
        else return 0
      })
    })();
  }

  async deleteStudent(id:number){
    const stringId:string = id.toString(); 
    const deleted = await this.studentSevice.terminateStudent(stringId);
    this.students = await this.studentSevice.getAllStudents();
  }

  goToStudent(student:Student):void{
    this.studentTracker.setStudent(student);
    this.router.navigateByUrl("/grades-page");
  }
}
