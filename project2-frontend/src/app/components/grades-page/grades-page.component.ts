import { Component, OnInit } from '@angular/core';

import { Grade } from 'src/app/models/grade';
import { Student } from 'src/app/models/student';
@Component({
  selector: 'app-grades-page',
  templateUrl: './grades-page.component.html',
  styleUrls: ['./grades-page.component.css'],
})
export class GradesPageComponent implements OnInit {
  constructor() {}
  
  // grades: Grade[] = [];
  // students: Student = {
  //   id: 0,
  //   firstName: '',
  //   lastName: '',
  //   guardianUsername: '',
  // };
  // id: number = 1;
  // gIds: number = 0;
  // retStr: string = 'hello';

  ngOnInit(): void {  }
}
