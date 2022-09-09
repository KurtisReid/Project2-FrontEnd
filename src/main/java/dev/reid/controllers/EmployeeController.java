package dev.reid.controllers;

import com.auth0.jwt.JWT;
import com.auth0.jwt.interfaces.DecodedJWT;
import dev.reid.entities.Employee;
import dev.reid.repos.EmployeeRepo;
import dev.reid.services.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin // CORS is evil and I despise it
public class EmployeeController {

    @Autowired
    EmployeeRepo employeeRepo;

    @Autowired
    JwtService jwtService;

    @GetMapping("/teachers")
    public List<Employee> getAllEmployees(@RequestHeader("auth") String jwt)
    {

        System.out.println(jwt);
        if (jwtService.validateJwt(jwt))
        {
            DecodedJWT decodedJwt = JWT.decode(jwt);
            String role = decodedJwt.getClaim("role").asString();

            if (role.equals("admin"))
            {
                return employeeRepo.findAll();
            }
            else {
                throw new RuntimeException("You must be an admin to see these grades");
            }
        }
        throw new RuntimeException("invalid JWT");
    }

    @GetMapping("/role")
    public String getRole(@RequestHeader("auth") String jwt)
    {
        System.out.println("Get role");
        System.out.println(jwt);
        if (jwtService.validateJwt(jwt))
        {
            DecodedJWT decodedJwt = JWT.decode(jwt);
            String role = decodedJwt.getClaim("role").asString();

            if (role.equals("guardian"))
            {
                return "guardian";
            }
            else if (role.equals("admin"))
            {
                return "admin";
            }
            else if (role.equals("teacher"))
            {
                return "teacher";
            }

            else {
                throw new RuntimeException(role);
            }
        }
        throw new RuntimeException("invalid JWT");
    }
}
