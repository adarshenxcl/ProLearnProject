package com.ProLearn.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ProLearn.Bean.xcl_student;
import com.ProLearn.Repository.StudentFileRepository;
@Service
public class StudentFileService {

    @Autowired
    StudentFileRepository studentfileRepository;

    public void uploadJsonData(List<xcl_student> students) {
        // Process and save the JSON data to the database
        studentfileRepository.saveAll(students);
    }
}
