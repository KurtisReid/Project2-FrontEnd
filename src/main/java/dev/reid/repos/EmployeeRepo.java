package dev.reid.repos;

import dev.reid.entities.Employee;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RestController;


@Repository
public interface EmployeeRepo extends MongoRepository<Employee, String> {
    @Query("{'username':'?0'}")
    Employee findByUsername(String username);
}
