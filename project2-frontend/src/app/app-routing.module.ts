import { GradesPageComponent } from './components/grades-page/grades-page.component';
import { StudentsComponent } from './components/students/students.component';
import { GradesComponent } from './components/grades/grades.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'grades-page', component: GradesPageComponent },
  { path: 'students-page', component: StudentsComponent },
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
