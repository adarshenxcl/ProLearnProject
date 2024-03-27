package com.ProLearn.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ProLearn.Bean.Batch;
import com.ProLearn.Service.CiService;

@RestController
@RequestMapping("/api/batches")
@CrossOrigin(origins = "http://localhost:3000")
public class CiController {

  @Autowired
  private CiService ciService;

  @GetMapping("/{u_name}")  
  public List<Batch> getBatchesByUName(@PathVariable("u_name") String uName) {
    List<Batch> batches = ciService.getBatchesByUNname(uName);
    System.out.println("Received u_name: " + uName); // Add this line
    System.out.println("Fetched batches: " + batches);
    return batches;
  }
}
