package com.ProLearn.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ProLearn.Bean.Batch;
import com.ProLearn.Repository.BatchRepository;

@Service
public class BatchService {
    @Autowired
   BatchRepository batchRepository;

    public List<Batch> getAllBatches() {
        return batchRepository.findAll();
   }
}