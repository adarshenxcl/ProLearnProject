package com.ProLearn.Repository;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.ProLearn.Bean.xcl_marks;
@Repository
public interface ViewMarksRepository extends JpaRepository<xcl_marks, Integer>{
	 @Query("SELECT m FROM xcl_marks m  WHERE m.s_id = ?1")
	    List<xcl_marks> findByBId(int sId); // Adjust method name to follow Java conventions
	}



