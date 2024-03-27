package com.ProLearn.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ProLearn.Bean.Batch;
import com.ProLearn.Service.BatchService;

@RestController
@CrossOrigin(origins = "http://localhost:3000") 
public class BatchController {
    @Autowired
    BatchService batchService;

    @GetMapping("/batch")
    public List<Batch> getAllBatches() {
        return batchService.getAllBatches();
    }
}