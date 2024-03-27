package com.ProLearn.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.ProLearn.Service.ProdigyCiService;

@RestController

@CrossOrigin(origins = "http://localhost:3000") 
public class ProdigyCiController {
	@Autowired
	ProdigyCiService prodigyciService;
	@GetMapping("/prodigyci/{s_id}")
    @ResponseBody
    public List<String> getbatchbys_id(@PathVariable String s_id) {
    	System.out.println(s_id);
    	return prodigyciService.getbys_id(s_id);
       
    }
	

}
