package dev.reid.services;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class JwtServiceImpl implements JwtService{

    private Algorithm algorithm = Algorithm.HMAC256("Live long and prosper");

    @Autowired
    JmsTemplate jmsTemplate;


    @Override
    public String createJwtWithUsernameAndRole(String username, String role) {
        String msg = username + " Login time:" + LocalDateTime.now();
        jmsTemplate.convertAndSend("message-queue", msg);
        System.out.println(msg);
        String jwt = JWT.create().withClaim("username", username).withClaim("role", role).sign(algorithm);
        return jwt;
    }

    @Override
    public boolean validateJwt(String jwt) {
        JWTVerifier verifier = JWT.require(algorithm).build();
        try
        {
            verifier.verify(jwt);
            return true;
        } catch (Exception e)
        {
            return false;
        }

    }
}
