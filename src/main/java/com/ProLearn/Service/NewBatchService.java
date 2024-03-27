package com.ProLearn.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ProLearn.Bean.Batch;
import com.ProLearn.Repository.NewBatchRepository;
@Service
public class NewBatchService {
	@Autowired
    private NewBatchRepository newBatchRepository;

    public void saveBatch(Batch batch) {
        newBatchRepository.save(batch);
    }

    // Add other methods as needed
}