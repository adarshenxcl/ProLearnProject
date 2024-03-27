package com.ProLearn.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ProLearn.Bean.Batch;

import com.ProLearn.Repository.CiRepository;

@Service
public class CiService {

    @Autowired
    private CiRepository ciRepository;

    public List<Batch> getBatchesByUNname(String u_name) {
        return ciRepository.findBatchesByUName(u_name);
    }
}
