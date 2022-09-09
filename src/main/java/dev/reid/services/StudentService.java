package dev.reid.services;

import dev.reid.entities.Student;

import java.util.List;

public interface StudentService {

    Student addStudent(Student student);

    Student getStudentById(int id);

    List<Student> getStudentsByGuardian(String guardian);

    List<Student> getAllStudents();

    List<Student> getStudentByName(String firstName);

    boolean deleteStudent(int id);
}
