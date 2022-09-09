package dev.reid.controllers;


import dev.reid.entities.Grade;
import dev.reid.entities.Student;
import dev.reid.services.GradeService;
import dev.reid.services.StudentService;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Controller
@CrossOrigin
public class GradesController {

    Logger logger = LogManager.getLogger(GradesController.class);

    @Autowired
    GradeService gradeService;

    @Autowired
    StudentService studentService;


    @PostMapping("/grades")
    @ResponseBody
    public Grade createGrade(@RequestBody Grade grade){
        logger.info("POST grade request");
        Grade savedGrade = this.gradeService.createGrade(grade);
        return savedGrade;

    }


    @GetMapping("/grades/{id}")
    @ResponseBody
    public List<Grade> getGradeByStudentId(@PathVariable String id){
        logger.info("GET grade by id request");
        int studentId = Integer.parseInt(id);
        List<Grade> returnGrades = this.gradeService.getGradesByStudentId(studentId);
        return returnGrades;
    }

    @GetMapping("/grades/byGuardian/{guardian}")
    @ResponseBody
    public List<List<Grade>> getGradeByGuardian(@PathVariable String guardian){
        logger.info("GET grades by guardian request");
        List<Student> students = this.studentService.getStudentsByGuardian(guardian);
        List<List<Grade>> allGrades = new ArrayList<>();
        for(Student s : students){
            List<Grade> studentGrades = this.gradeService.getGradesByStudentId(s.getId());
            allGrades.add(studentGrades);
        }
        return allGrades;
    }


    @GetMapping("/grades")
    @ResponseBody
    public ResponseEntity<String> getAllGrades(){
        logger.info("GET all grade request");
        return new ResponseEntity<>("Route unavailable", HttpStatus.CONTINUE);
    }


    @PutMapping("/grades")
    @ResponseBody
    public ResponseEntity<String> updateGrade(@RequestBody Grade grade){
        logger.info("PUT grade request");
        return new ResponseEntity<>("PUT request not available\nPlease delete and create new grade", HttpStatus.CONTINUE);
    }


    @DeleteMapping("/grades/{id}")
    @ResponseBody
    public ResponseEntity<String> deleteGrade(@PathVariable String id){
        logger.info("DELETE grade request");
        int gradeId = Integer.parseInt(id);
        if(this.gradeService.deleteGradeById(gradeId)){
            return new ResponseEntity<>("Grade with id: " +id+ " successfully deleted", HttpStatus.CONTINUE);
        }else{
            return new ResponseEntity<>("Grade with id: " +id+ " not found", HttpStatus.NOT_FOUND);
        }
    }
}
