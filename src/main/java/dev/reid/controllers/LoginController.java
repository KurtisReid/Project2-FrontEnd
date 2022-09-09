package dev.reid.controllers;

import dev.reid.dtos.LoginCredentials;
import dev.reid.services.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class LoginController {
    @Autowired
    LoginService loginService;

    @PostMapping("/login")
    public String login(@RequestBody LoginCredentials loginCredentials)
    {
        System.out.println("login controller");
        String jw = loginService.authenticateUser(loginCredentials);
        System.out.println(loginService.authenticateUser(loginCredentials));

        return jw;
    }
}
