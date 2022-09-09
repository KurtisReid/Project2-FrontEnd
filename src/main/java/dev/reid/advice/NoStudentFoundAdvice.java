package dev.reid.advice;

import dev.reid.exceptions.NoStudentFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
public class NoStudentFoundAdvice {

    @ResponseBody
    @ExceptionHandler(NoStudentFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    String noStudentFoundHandler(NoStudentFoundException e){
        return e.getMessage();
    }
}
