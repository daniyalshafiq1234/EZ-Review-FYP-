package com.example.fyp.controller;

import com.example.fyp.request.RegistrationRequest;
import com.example.fyp.service.RegistrationService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/registration")
@AllArgsConstructor
public class RegistrationController {

    @Autowired
    RegistrationService registrationService;

    @PostMapping("/addUser")
    public String register (@RequestBody RegistrationRequest request){
        return registrationService.register(request);
    }
    @GetMapping("/confirm")
    public String confirm (@RequestParam("token") String token){
    return registrationService.confirmToken(token);
    }

}
