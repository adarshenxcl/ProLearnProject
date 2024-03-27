package com.ProLearn.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ProLearn.Bean.xcl_student;
import com.ProLearn.Repository.BatchStudentDetailsRepository;
@Service
public class BatchStudentDetailsService {
	@Autowired
	BatchStudentDetailsRepository batchstudentdetailsRepository;
	public List<xcl_student> findByb_id(int b_id) {
	return batchstudentdetailsRepository.findByBId(b_id);
	}
}


