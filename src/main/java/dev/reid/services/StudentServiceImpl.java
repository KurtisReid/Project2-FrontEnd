package dev.reid.services;

import dev.reid.entities.Student;
import dev.reid.exceptions.NoFirstNameException;
import dev.reid.exceptions.NoLastNameException;
import dev.reid.exceptions.NoStudentFoundException;
import dev.reid.repos.StudentRepo;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.stereotype.Service;

import java.sql.SQLOutput;
import java.util.List;
import java.util.Optional;

@Service
public class StudentServiceImpl implements StudentService{

    Logger logger = LogManager.getLogger(StudentServiceImpl.class);

    @Autowired
    JmsTemplate jmsTemplate;

    @Autowired
    StudentRepo studentRepo;

    @Override
    public Student addStudent(Student student) {

        if(student.getFirstName().length() == 0){
            throw new RuntimeException("Must enter a first name");
        }
        if(student.getLastName().length() == 0){
            throw new RuntimeException("Must enter a last name");

        }

        String msg = "Student " + student + " was added";
        System.out.println(msg);
        jmsTemplate.convertAndSend("message-queue", msg);

        return this.studentRepo.save(student);
    }

    @Override
    public Student getStudentById(int id) {
        Optional<Student> possibleStudent = this.studentRepo.findById(id);
        if(possibleStudent.isPresent()){
            return possibleStudent.get();
        }else{
            this.logger.error("A student could not be found with id " + id);
            throw new NoStudentFoundException("No student found");
        }
    }

    @Override
    public List<Student> getStudentsByGuardian(String guardian) {
        List<Student> possibleStudents = this.studentRepo.findByGuardianUsername(guardian);
        if(!possibleStudents.isEmpty()){
            return possibleStudents;
        }else{
            this.logger.error("A student could not be found with guardian: " + guardian);
            throw new NoStudentFoundException("No student found");
        }
    }

    @Override
    public List<Student> getAllStudents() {
        return this.studentRepo.findAll();
    }

    @Override
    public List<Student> getStudentByName(String firstName) {
        return this.studentRepo.findStudentsByFirstName(firstName);
    }

    @Override
    public boolean deleteStudent(int id) {
        String msg = "Student " + getStudentById(id) + " was deleted";
        System.out.println(msg);
        if(this.studentRepo.existsById(id)){
            this.studentRepo.deleteById(id);

            jmsTemplate.convertAndSend("message-queue", msg);
            return true;
        }else {
            return false;
        }
    }
}
