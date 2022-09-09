package dev.reid.repos;

import dev.reid.entities.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface StudentRepo extends JpaRepository<Student, Integer> {

    List<Student> findStudentsByFirstName(String firstName);

    List<Student> findByGuardianUsername(String guardian);

}
