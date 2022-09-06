import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentutilService } from 'src/app/services/studentutil.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor(private studentSevice:StudentutilService) { }

  students:Student[] = [];

  ngOnInit(): void {
    (async () => {
      this.studentSevice.getAllStudents();
    })();
  }

  async deleteStudent(){
    
  }

}
