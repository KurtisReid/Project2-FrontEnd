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
  enableBtn:boolean = false;


  ngOnInit(): void {
    (async () => {
      this.students = this.studentTracker.getStudent();
      this.grades = await this.gradeService.getGradeByStudentId(this.students.id);
      
      const role = localStorage.getItem("role");
      if(role === `:"teacher"`){
        this.enableBtn = true;
      }else if(role === `:"guardian"`){
        this.enableBtn = false;
      }
      this.grades = this.getTime(this.grades);

      
    })();

  }

  getTime(g: Grade[])
  {
    
    for (let i = 0; i < g.length; i++)
    {
      var ti = Number(g[i].timeReported);
      var myDate = new Date( ti *1000);
      console.log(myDate);
      g[i].timeReported = myDate.toDateString();
      console.log(g[i].timeReported);
    }
    return g;


  }

  async deleteGrade(gIds:number)
  {
    if(confirm("Confirm Grade Cover-up")){
      const deletedGrade: string = await this.gradeService.deleteGrade(gIds);
      this.grades = await this.gradeService.getGradeByStudentId(this.students.id);
    }
  }

}


