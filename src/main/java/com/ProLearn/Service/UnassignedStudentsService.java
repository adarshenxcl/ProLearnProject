package com.ProLearn.Service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.ProLearn.Bean.xcl_student;
import com.ProLearn.Repository.UnassignedStudentsRepository;

@Service
public class UnassignedStudentsService {
	private final UnassignedStudentsRepository unassignedStudentRepository;

    public UnassignedStudentsService(UnassignedStudentsRepository unassignedStudentRepository) {
        this.unassignedStudentRepository = unassignedStudentRepository;
    }

    public List<xcl_student> getUnassignedStudents() {
        return unassignedStudentRepository.findStudentsNotInAnyBatch();
    }
}


