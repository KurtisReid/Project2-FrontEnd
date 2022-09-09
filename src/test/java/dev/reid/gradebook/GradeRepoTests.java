package dev.reid.gradebook;

import dev.reid.entities.Behavior;
import dev.reid.entities.Grade;
import dev.reid.entities.Student;
import dev.reid.repos.GradeRepo;
import dev.reid.repos.StudentRepo;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Set;

@SpringBootTest
@Transactional
public class GradeRepoTests {
    @Autowired
    StudentRepo studentRepo;
    @Autowired
    GradeRepo gradeRepo;


    @Test
    public void create_grade()
    {
        // hello
        Student student = new Student(0, "test", "case", "createGrade");
        Student savedStudent = this.studentRepo.save(student);

        Grade grade = new Grade(1, 2, 1010, "bad student", Behavior.EVIL);
        Grade savedGrade = this.gradeRepo.save(grade);
        System.out.println(savedGrade);
        Assertions.assertNotEquals(0, savedGrade.getgId());
    }

    @Test
    public void get_grades_by_sId(){
        Student student1 = new Student(0, "test", "1", "bySId");
        Student student2 = new Student(0, "test", "2", "bySId");
        Student savedStudent1 = this.studentRepo.save(student1);
        Student savedStudent2 = this.studentRepo.save(student2);

        Grade grade1 = new Grade(0,3,1010, "bad student", Behavior.EVIL);
        Grade grade2 = new Grade(0,4,1010, "bad student", Behavior.GOOD);
        Grade grade3 = new Grade(0,5,1010, "bad student", Behavior.EVIL);
        Grade savedGrade1 = this.gradeRepo.save(grade1);
        Grade savedGrade2 = this.gradeRepo.save(grade2);
        Grade savedGrade3 = this.gradeRepo.save(grade3);
        List<Grade> grades = this.gradeRepo.findGradesByStudentId(savedStudent1.getId());
        //Set<Grade> grades = savedStudent1.getGrades();
        System.out.println("\n\n" + grades + "\n\n");
    }



}
