package com.ProLearn.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ProLearn.Service.RemoveStudentService;

@RestController
@RequestMapping("/api/students")
@CrossOrigin(origins = "http://localhost:3000")
public class RemoveStudentController {

    @Autowired
    private RemoveStudentService removeStudentService;

    @DeleteMapping("/remove/{s_id}")
    public String removeStudentById(@PathVariable("s_id") String studentId) {
        removeStudentService.removeStudentById(studentId);
        return "Student with ID " + studentId + " has been removed successfully.";
    }
}
