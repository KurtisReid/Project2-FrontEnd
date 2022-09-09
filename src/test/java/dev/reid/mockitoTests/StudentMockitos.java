package dev.reid.mockitoTests;


import dev.reid.entities.Student;
import dev.reid.repos.StudentRepo;
import dev.reid.services.StudentService;
import dev.reid.services.StudentServiceImpl;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;


public class StudentMockitos {

    @Autowired
    StudentRepo studentRepo;

    @Autowired
    StudentService studentService;

    @Test
    public void create_student_mock(){
        StudentRepo studentTestRepo = Mockito.mock(StudentRepo.class);
        Student student = new Student(0, "", "idk", "guard");

        Mockito.when(studentTestRepo.save(student)).thenReturn(student);
        Assertions.assertThrows(RuntimeException.class, () ->{
            this.studentService.addStudent(student);
        });
    }


}
