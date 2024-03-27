package com.ProLearn.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ProLearn.Bean.Batch;
import com.ProLearn.Repository.ProdigyCiRepository;

@Service
public class ProdigyCiService {
	@Autowired
	ProdigyCiRepository prodigyciRepository;
	public List<String> getbys_id(String s_id) {
        return prodigyciRepository.getBys_id(s_id);
    }

}
