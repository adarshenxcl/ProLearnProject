package com.ProLearn.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.ProLearn.Bean.xcl_student;
import com.ProLearn.Service.NewStudentService;
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class NewStudentController {

    @Autowired
    private NewStudentService newstudentService;

    @PostMapping("/api/createStudent")
    public ResponseEntity<String> createStudent(
            @RequestBody xcl_student student
            ) {

        
        newstudentService.saveStudent(student);

        ResponseEntity<String> Success = null;
		return Success;
}
}
