package com.ProLearn.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.ProLearn.Bean.Batch;
import com.ProLearn.Service.TimeTableService;

@RestController
@CrossOrigin(origins = "http://localhost:3000") 
public class TimeTableController {
    
    @Autowired
    TimeTableService timetableService;
    
    @GetMapping("/timetable/{s_id}")
    @ResponseBody
    public List<Batch> getbatchbys_id(@PathVariable String s_id) {
    	System.out.println(s_id);
    	return timetableService.getbys_id(s_id);
       
    }
}
