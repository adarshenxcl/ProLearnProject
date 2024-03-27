package com.ProLearn.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.*;
import com.ProLearn.Bean.Registration;
import com.ProLearn.Service.RegistrationService;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:3000") 
public class RegistrationController {

    @Autowired
    private RegistrationService registrationService;

    @PostMapping("/role-and-name")
    public Map<String, String> getUserRole(@RequestBody Registration user) {
        String uName = user.getU_name();
        String uPassword = user.getU_password();

        System.out.println("Received data - Username: " + uName + ", Password: " + uPassword);

        String role = registrationService.findRoleByu_nameandu_password(uName, uPassword);
        String name = registrationService.findNameByu_nameandu_password(uName, uPassword);
        String u_name = registrationService.findu_nameByu_nameandu_password1(uName, uPassword);

        System.out.println("Role = " + role);
        System.out.println("Name = " + name);
        System.out.println("u_name = " + u_name); // Print u_name

        Map<String, String> response = new HashMap<>();
        response.put("role", role);
        response.put("name", name);
        response.put("u_name", u_name);

        return response;
    }
    @GetMapping("/name")
    public List<String> findallname() {
        List<String> names = registrationService.findallname();
        System.out.println("Names sent to frontend: " + names); // Log the data
        return names;
    }
}
