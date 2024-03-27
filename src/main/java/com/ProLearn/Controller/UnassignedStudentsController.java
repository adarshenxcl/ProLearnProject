package com.ProLearn.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ProLearn.Bean.xcl_student;
import com.ProLearn.Service.UnassignedStudentsService;
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UnassignedStudentsController {
	@Autowired
	UnassignedStudentsService unassignedstudentsService;
	@GetMapping("/api/unassignedstudents")
	public List<xcl_student> getAllUnassignedStudents() {
	    return unassignedstudentsService.getUnassignedStudents();
	}

}
