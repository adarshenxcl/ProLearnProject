package com.ProLearn.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ProLearn.Bean.xcl_marks;
import com.ProLearn.Repository.AddMarksRepository;

@Service
public class AddMarksService {
	@Autowired
	AddMarksRepository addMarksRepository;
	 // Save the data to the database or perform other necessary operations
	public void saveMarks(List<xcl_marks> marksList) {
		addMarksRepository.saveAll(marksList);
		System.out.println("Received marks="+marksList);
	}

}
