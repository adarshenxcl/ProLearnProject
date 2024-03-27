package com.ProLearn.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ProLearn.Bean.BatchStudent;
import com.ProLearn.Service.BatchStudentService;

import java.util.List;

@RestController
@RequestMapping("/api/batchstudents")
@CrossOrigin(origins = "http://localhost:3000")
public class BatchStudentController {

    @Autowired
    BatchStudentService batchStudentService;
    @PostMapping("/save")
    public ResponseEntity<String> addBatchStudents(@RequestBody List<BatchStudent> batchStudents) {
        batchStudentService.addBatchStudents(batchStudents);

        // Return a success message in JSON format
        String successMessage = "{\"message\": \"Batch students added successfully\"}";
        return ResponseEntity.ok(successMessage);
    }

  }

