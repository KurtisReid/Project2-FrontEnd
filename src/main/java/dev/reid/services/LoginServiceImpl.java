package dev.reid.services;

import dev.reid.dtos.LoginCredentials;
import dev.reid.entities.Employee;
import dev.reid.repos.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginServiceImpl implements LoginService{
    @Autowired
    EmployeeRepo employeeRepo;

    @Autowired
    JwtService jwtService;


    @Override
    public String authenticateUser(LoginCredentials loginCredentials) {
        Employee employee = employeeRepo.findByUsername(loginCredentials.getUsername());
        if (!employee.getPassword().equals(loginCredentials.getPassword()))
        {
            throw new RuntimeException("password does not match");
        }
        return jwtService.createJwtWithUsernameAndRole(employee.getUsername(), employee.getRole());
    }
}
