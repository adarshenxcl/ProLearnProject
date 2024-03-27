package com.ProLearn.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ProLearn.Bean.xcl_marks;
import com.ProLearn.Service.AddMarksService;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class AddMarksController {

    @Autowired
    AddMarksService addMarksService;

    // Handle POST requests to the "/api/submit-scores" endpoint
    @PostMapping("api/submit-scores")
    public ResponseEntity<String> saveMarks(@RequestBody List<xcl_marks> marksList) {
        try {
            // Print received marks to the console
            System.out.println("Received marks: " + marksList);

            // Call the service to save the marks
            addMarksService.saveMarks(marksList);

            // Return a success response with a 200 OK status code
            return ResponseEntity.ok("Marks submitted successfully");
        } catch (Exception e) {
            // Return an error response in case of an exception with a 500 Internal Server Error status code
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to submit marks: " + e.getMessage());
        }
    }
}
