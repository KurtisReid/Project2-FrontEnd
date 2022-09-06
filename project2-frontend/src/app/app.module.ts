import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GradeFormComponent } from './components/grade-form/grade-form.component';
import { GradesComponent } from './components/grades/grades.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { StudentFormComponent } from './components/student-form/student-form.component';
import { StudentsComponent } from './components/students/students.component';
import { GradesPageComponent } from './components/grades-page/grades-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginPageComponent,
    StudentFormComponent,
    StudentsComponent,
    GradeFormComponent,
    GradesComponent,
    GradesPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
