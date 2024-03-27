package com.ProLearn.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ProLearn.Repository.GetnameBatchRepository;

@Service
public class GetnameBatchService {
	@Autowired
	GetnameBatchRepository getnamebatchRepository;
	 public String findnameByu_name(String u_name) {
	        
	        return getnamebatchRepository.findnameByu_name(u_name);
	    }

}
