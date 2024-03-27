package com.ProLearn.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.ProLearn.Bean.xcl_student;

import jakarta.transaction.Transactional;

import java.util.List;

@Repository
public interface UpdateStudentRepository extends JpaRepository<xcl_student, String>{
	
	@Query("Select s from xcl_student s where s_id=?1")
		List<xcl_student> findByS_id(String s_id);
		
		@Transactional
	    @Modifying
	    @Query("UPDATE xcl_student s SET s.s_name = :s_name, s.s_level = :s_level, s.s_ci = :s_ci, s.s_center = :s_center, s.s_mode = :s_mode WHERE s.s_id = :s_id")
	    

		void updateStudentDetails(String s_id, String s_name, String s_level, String s_ci, String s_center,
				String s_mode);

}
