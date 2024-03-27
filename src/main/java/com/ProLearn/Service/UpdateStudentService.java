package com.ProLearn.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ProLearn.Bean.xcl_student;
import com.ProLearn.Repository.UpdateStudentRepository;

@Service
public class UpdateStudentService {
	@Autowired
	UpdateStudentRepository updatestudentRepository;
	public List<xcl_student> findById(String s_id){
		return updatestudentRepository.findByS_id(s_id);
		
	}
	
	public void updateStudentDetails(String s_id, String s_name, String s_level, String s_ci, String s_center, String s_mode) {
        updatestudentRepository.updateStudentDetails(s_id, s_name, s_level, s_ci, s_center, s_mode);
    }


}