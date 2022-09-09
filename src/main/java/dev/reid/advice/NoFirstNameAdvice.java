package dev.reid.advice;

import dev.reid.exceptions.NoFirstNameException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
public class NoFirstNameAdvice {

    @ResponseBody
    @ExceptionHandler(NoFirstNameException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    String noFirstNameHandler(NoFirstNameException e){
        return e.getMessage();
    }
}
