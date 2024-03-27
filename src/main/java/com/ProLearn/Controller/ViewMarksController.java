package com.ProLearn.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ProLearn.Bean.xcl_marks;
import com.ProLearn.Service.ViewMarksService;

@RestController
@RequestMapping("/api/viewmarks")
@CrossOrigin(origins = "http://localhost:3000")
public class ViewMarksController {
	@Autowired
	ViewMarksService viewMarksService;
		 @GetMapping("/{s_id}")
		  public List<xcl_marks>findByb_id(@PathVariable int s_id) {
			  System.out.println(s_id);
		      return viewMarksService.findBys_id( s_id);
		  }
}
