package com.ProLearn.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ProLearn.Bean.BatchStudent;
import com.ProLearn.Repository.BatchStudentRepository;

@Service
public class BatchStudentService {

    @Autowired
    private BatchStudentRepository batchStudentRepository;

    public void addBatchStudents(List<BatchStudent> batchStudents) {
        batchStudentRepository.saveAll(batchStudents);
    }
}
