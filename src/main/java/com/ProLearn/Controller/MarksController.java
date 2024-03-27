package com.ProLearn.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ProLearn.Bean.xcl_marks;
import com.ProLearn.Service.MarksService;

@RestController
@RequestMapping("/api/marks")
public class MarksController {
	@Autowired
MarksService marksService;
	 @GetMapping("/id/{s_id}")
	  public List<xcl_marks>findBys_id(@PathVariable int s_id) {
	      return marksService.findBys_id( s_id);
	  }
}
