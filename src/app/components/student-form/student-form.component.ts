import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentutilService } from 'src/app/services/studentutil.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private studentService:StudentutilService) { }

  // firstName:string = "";
  // lastName:string = "";
  // guardianUsername:string = "";
  // savedId:number = 0;

  registerForm!: FormGroup;
  submitted = false;

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      guardianUsername: ['', [Validators.required]],
    });
  }
  async onSubmit(){
    this.submitted = true;
    
    if (this.registerForm.invalid) {
      return;
    }
    const student: Student = {id:0, firstName:this.registerForm.controls['firstName'].value, lastName:this.registerForm.controls['lastName'].value, guardianUsername:this.registerForm.controls['guardianUsername'].value};
    const savedStudent: Student = await this.studentService.createStudent(student);
    location.reload();
  }
}
