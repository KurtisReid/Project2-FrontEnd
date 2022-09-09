import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentutilService } from 'src/app/services/studentutil.service';
import { Router } from '@angular/router';
import { StudenttrackerService } from 'src/app/services/studenttracker.service';
import { LoginutilService } from 'src/app/services/loginutil.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor(private studentTracker:StudenttrackerService,  private router:Router, private studentSevice:StudentutilService, private loginService:LoginutilService) { }

  students:Student[] = [];

  ngOnInit(): void {
    (async () => {
      const role = localStorage.getItem("role");
      if(role === "teacher"){
        this.students = await this.studentSevice.getAllStudents();
      }else if(role === "guardian"){
        const username = localStorage.getItem("username");
        if(username != null){
          this.students = await this.studentSevice.getStudentsByGuardian(username);
        }
      }

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
