import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/models/student';
import { StudentutilService } from 'src/app/services/studentutil.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private studentService:StudentutilService, private router: Router) { }

  ngOnInit(): void {
  }

  enteredName: string = ""
  async getStudent(enteredName:string)
  {
    const searchedStudent: Student[] = await this.studentService.getStudentByName(this.enteredName);
    console.log(searchedStudent);
    localStorage.setItem("students", searchedStudent.toString());
    this.router.navigateByUrl("/students-page");
  }
  
  

}
