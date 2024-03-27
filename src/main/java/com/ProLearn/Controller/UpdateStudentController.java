package com.ProLearn.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ProLearn.Bean.xcl_student;
import com.ProLearn.Service.UpdateStudentService;

@RestController
@RequestMapping("/api/updatedetails")
@CrossOrigin(origins = "http://localhost:3000")
public class UpdateStudentController {
	@Autowired
	UpdateStudentService updatestudentService;
	@GetMapping("/student/{s_id}")
	  public List<xcl_student>findByb_id(@PathVariable String s_id) {
		  System.out.println(s_id);
	      return updatestudentService.findById( s_id);
	  }
	  @PutMapping("/update/{s_id}")
	    public ResponseEntity<String> updateStudentDetails(@PathVariable String s_id,
	                                                       @RequestBody xcl_student updatedStudent) {
	        try {
	            // Assuming your updatedStudent object contains the updated details
	            updatestudentService.updateStudentDetails(s_id, updatedStudent.getS_name(), updatedStudent.getS_level(),
	                    updatedStudent.getS_ci(), updatedStudent.getS_center(), updatedStudent.getS_mode());
	            return new ResponseEntity<>("Student details updated successfully", HttpStatus.OK);
	        } catch (Exception e) {
	            return new ResponseEntity<>("Failed to update student details", HttpStatus.INTERNAL_SERVER_ERROR);
	        }}
}




