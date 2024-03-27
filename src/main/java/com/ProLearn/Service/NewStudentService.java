package com.ProLearn.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ProLearn.Bean.xcl_student;
import com.ProLearn.Repository.NewStudentRepository;
@Service
public class NewStudentService {
@Autowired
NewStudentRepository newstudentRepository;
public void saveStudent(xcl_student student) {
    newstudentRepository.save(student);
    System.out.println("Received Student: " + student.toString());
    
    // Save the data to the database or perform other necessary operations
}
}