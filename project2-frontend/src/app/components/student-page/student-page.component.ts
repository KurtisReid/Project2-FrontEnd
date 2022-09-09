import { Component, OnInit } from '@angular/core';
import { LoginutilService } from 'src/app/services/loginutil.service';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.css']
})
export class StudentPageComponent implements OnInit {

  constructor(private loginService:LoginutilService) { }

  enableForm:boolean = true;

  ngOnInit(): void {
    const savedRole = localStorage.getItem("role");
    if(savedRole === "teacher"){
      this.enableForm = true;
    }else{
      this.enableForm = false;
    }
  }

}
