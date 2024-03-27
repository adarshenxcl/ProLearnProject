package com.ProLearn.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.ProLearn.Bean.BatchStudent;
import com.ProLearn.Bean.xcl_student;

@Repository
public interface BatchStudentDetailsRepository extends JpaRepository<BatchStudent, Integer> {
    
    // Adjust the query to use entities and their fields
    @Query("SELECT xs FROM xcl_student xs JOIN BatchStudent bs ON xs.s_id = bs.s_id WHERE bs.b_id = ?1")
    List<xcl_student> findByBId(int bId); // Adjust method name to follow Java conventions
}
