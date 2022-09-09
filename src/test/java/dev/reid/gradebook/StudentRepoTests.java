package dev.reid.gradebook;

import dev.reid.entities.Student;
import dev.reid.repos.StudentRepo;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import javax.transaction.Transactional;
import java.util.List;

@SpringBootTest
@Transactional
public class StudentRepoTests {

    @Autowired
    StudentRepo studentRepo;

    @Test
    public void create_student()
    {
        Student student = new Student(0,"kh", "rg", "GU");
        Student savedStudent = this.studentRepo.save(student);
        Assertions.assertNotEquals(0, savedStudent.getId());
        System.out.println(savedStudent);
    }

    @Test
    void get_all_students(){
        Student student1 = new Student(0, "Billy", "Idol", "Elizabeth Idol");
        Student savedStudent1 = this.studentRepo.save(student1);

        Student student2 = new Student(0, "David", "Bowie", "Ziggy Bowie");
        Student savedStudent2 = this.studentRepo.save(student2);

        List<Student> students = this.studentRepo.findAll();
        Assertions.assertTrue(students.size()>=2);
    }

    @Test
    void get_student_by_id(){
        Student student1 = new Student(0, "Billy", "Idol", "Elizabeth Idol");
        Student savedStudent1 = this.studentRepo.save(student1);

        Student student2 = new Student(0, "David", "Bowie", "Ziggy Bowie");
        Student savedStudent2 = this.studentRepo.save(student2);

        List<Student> students = this.studentRepo.findAll();
        System.out.println(students);
        Assertions.assertEquals("kh", this.studentRepo.findById(2).get().getFirstName());
    }

    @Test
    void get_student_by_name(){
        Student student1 = new Student(0, "Billy", "Idol", "Elizabeth Idol");
        Student savedStudent1 = this.studentRepo.save(student1);

        Student student2 = new Student(0, "David", "Bowie", "Ziggy Bowie");
        Student savedStudent2 = this.studentRepo.save(student2);

        List<Student> students = this.studentRepo.findStudentsByFirstName("David");
        System.out.println(students);
        Assertions.assertEquals("David", students.get(0).getFirstName());
    }

}
