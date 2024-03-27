package com.ProLearn.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ProLearn.Bean.xcl_marks;
import com.ProLearn.Repository.MarksRepository;

@Service
public class MarksService {
	@Autowired
	MarksRepository marksRepository;
	public List<xcl_marks> findBys_id(int s_id) {
	return marksRepository.findBys_id(s_id);
	}
}
