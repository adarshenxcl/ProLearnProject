package com.ProLearn.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.ProLearn.Repository.RemoveStudentRepository;

import jakarta.transaction.Transactional;
@Service
public class RemoveStudentService {

    @Autowired
    private RemoveStudentRepository removeStudentRepository;
    @Transactional
    public void removeStudentById(String s_id) {
        removeStudentRepository.removeStudentById(s_id);
    }
}
