package com.ProLearn.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ProLearn.Bean.xcl_student;
import com.ProLearn.Service.StudentFileService;

//Assuming you have a class StudentFileController with a method uploadJsonData

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class StudentFileController {

 @Autowired
 private StudentFileService studentfileService;

 @PostMapping("/uploadJson")
 public ResponseEntity<String> handleJsonUpload(@RequestBody List<xcl_student> students) {
   
     try {
         // Save the JSON data to the database
         studentfileService.uploadJsonData(students);
         return ResponseEntity.ok("{\"message\": \"JSON data saved successfully!\"}");
     } catch (Exception e) {
         return ResponseEntity.badRequest().body("{\"error\": \"Error saving JSON data: " + e.getMessage() + "\"}");
     }
 }
}
