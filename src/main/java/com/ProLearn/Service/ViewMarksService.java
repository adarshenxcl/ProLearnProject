package com.ProLearn.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ProLearn.Bean.xcl_marks;
import com.ProLearn.Repository.ViewMarksRepository;
@Service
public class ViewMarksService {
	@Autowired
	ViewMarksRepository viewMarksRepository;
	public List<xcl_marks> findBys_id(int s_id) {
	return viewMarksRepository.findByBId(s_id);
	}
}
