package com.ProLearn.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ProLearn.Bean.Batch;
import com.ProLearn.Repository.TimeTableRepository;

@Service
public class TimeTableService {
    
    @Autowired
    TimeTableRepository timetableRepository;

    public List<Batch> getbys_id(String s_id) {
        return timetableRepository.getBys_id(s_id);
    }
}
