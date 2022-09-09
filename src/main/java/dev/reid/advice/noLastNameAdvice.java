package dev.reid.advice;

import dev.reid.exceptions.NoLastNameException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
public class noLastNameAdvice {

    @ResponseBody
    @ExceptionHandler(NoLastNameException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    String noLastNameHandler(NoLastNameException e){
        return e.getMessage();
    }
}
