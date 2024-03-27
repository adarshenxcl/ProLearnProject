package com.ProLearn.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.ProLearn.Bean.xcl_student;
@Repository
public interface UnassignedStudentsRepository extends JpaRepository<xcl_student, String>{
	

    // Custom query to find students not assigned to any batch
	//
    @Query("SELECT xs FROM xcl_student xs WHERE xs.s_id NOT IN (SELECT DISTINCT bs.s_id FROM BatchStudent bs)")
    List<xcl_student> findStudentsNotInAnyBatch();
}


