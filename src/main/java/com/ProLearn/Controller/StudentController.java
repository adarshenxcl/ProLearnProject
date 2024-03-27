package com.ProLearn.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.ProLearn.Bean.Batch;
import com.ProLearn.Bean.xcl_student;
import com.ProLearn.Service.StudentService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class StudentController {

    @Autowired
    private StudentService studentService;

    @GetMapping("/xcl_student")
    @ResponseBody
    public List<Object[]> getCombinedData() {
        List<Object[]> combinedData = studentService.getCombinedData();

        

        return combinedData;
    }
    @GetMapping("/api/xcl_student/{s_id}/{m_prodigy_ci}")
    @ResponseBody
    public List<Object[]> getstudentbys_id(@PathVariable String s_id ,@PathVariable String m_prodigy_ci) {
        System.out.println(s_id);
        return studentService.findXcl_students(s_id, m_prodigy_ci);
    }

    }