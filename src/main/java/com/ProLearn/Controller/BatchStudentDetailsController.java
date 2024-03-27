package com.ProLearn.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ProLearn.Bean.xcl_student;
import com.ProLearn.Service.BatchStudentDetailsService;

@RestController
@RequestMapping("/api/batchstudentdetails")
@CrossOrigin(origins = "http://localhost:3000")
public class BatchStudentDetailsController {
	@Autowired
	BatchStudentDetailsService batchstudentdetailsService;
		 @GetMapping("/{b_id}")
		  public List<xcl_student>findByb_id(@PathVariable int b_id) {
			  System.out.println(b_id);
		      return batchstudentdetailsService.findByb_id( b_id);
		  }
		  
		  
}
