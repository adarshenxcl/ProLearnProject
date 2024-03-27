package com.ProLearn.Service;

import java.util.*;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ProLearn.Bean.xcl_student;
import com.ProLearn.Repository.StudentRepository;

@Service
public class StudentService {
    @Autowired
     StudentRepository studentRepository;

   

        public List<Object[]> getCombinedData() {
            return studentRepository.findCombinedData();
        }
        
        public List<Object[]> findXcl_students(String s_id,String m_prodigy_ci){
        	return studentRepository.findByS_id(s_id, m_prodigy_ci);
        }
    }
