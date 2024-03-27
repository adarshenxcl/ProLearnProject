package com.ProLearn.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ProLearn.Repository.RegistrationRepository;

@Service
public class RegistrationService {

    @Autowired
    private RegistrationRepository registrationRepository;

    public String findRoleByu_nameandu_password(String uName, String uPassword) {
        return registrationRepository.findRoleByu_nameandu_password(uName, uPassword);
    }

    public String findNameByu_nameandu_password(String uName, String uPassword) {
        // Implement the logic to fetch and return the name based on username and password
        // For example, you might have a similar query in your repository for the name
        return registrationRepository.findNameByu_nameandu_password(uName, uPassword);
    }
    public String findu_nameByu_nameandu_password1(String uName, String uPassword) {
        // Implement the logic to fetch and return the name based on username and password
        // For example, you might have a similar query in your repository for the name
        return registrationRepository.findu_nameByu_nameandu_password1(uName, uPassword);
    }
    public List<String> findallname(){
    	return registrationRepository.findallname();
    	
    }
   
}

