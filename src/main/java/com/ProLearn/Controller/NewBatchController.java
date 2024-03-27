package com.ProLearn.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ProLearn.Bean.Batch;
import com.ProLearn.Service.NewBatchService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class NewBatchController {
	@Autowired
    private NewBatchService newbatchservice;
	private String Success;

    @PostMapping("/api/createBatch")
    public String createBatch(@RequestBody Batch batch) {
        // Assuming your form sends a POST request to "/api/createBatch"
    	 System.out.println("Received Batch: " + batch.toString());
        newbatchservice.saveBatch(batch);
      return Success;
    }
}