package dev.reid.services;

import dev.reid.dtos.LoginCredentials;

public interface LoginService {
    String authenticateUser(LoginCredentials loginCredentials);
}
