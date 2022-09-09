package dev.reid.controllers;

import dev.reid.entities.Student;
import dev.reid.services.StudentService;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class StudentController {

    Logger logger = LogManager.getLogger(GradesController.class);



    @Autowired
    StudentService studentService;

    @PostMapping("/students")
    public Student createStudent(@RequestBody Student student){
        logger.info("POST student request");
        Student savedStudent = this.studentService.addStudent(student);
        return savedStudent;
    }

    @GetMapping("/students/byId/{id}")
    public Student getStudentById(@PathVariable String id){
        logger.info("Get student by id request");
        int studentId = Integer.parseInt(id);
        Student returnStudent = this.studentService.getStudentById(studentId);
        return returnStudent;

    }

    @GetMapping("/students/byName/{name}")
    public List<Student> getStudentByName(@PathVariable String name){
        logger.info("Get student by name request");
        List<Student> returnStudents = this.studentService.getStudentByName(name);
        return returnStudents;
    }

    @GetMapping("/students")
    public List<Student> getAllStudents(){
        logger.info("Get all student request");
        List<Student> returnStudents = this.studentService.getAllStudents();
        return returnStudents;
    }

    @PutMapping("/students")
    public String updateStudent(){
        return "PUT request not available\nPlease delete and create new student";
    }


    @DeleteMapping("/students/{id}")
    public ResponseEntity<String> deleteStudent(@PathVariable String id){
        logger.info("Delete student request");
        int studentId = Integer.parseInt(id);
        if(this.studentService.deleteStudent(studentId)){
            return new ResponseEntity<>("Student with id: " +id+ " successfully deleted", HttpStatus.ACCEPTED);
        }
        return new ResponseEntity<>("Student with id: " +id+ " not found", HttpStatus.NOT_FOUND);
    }
}
