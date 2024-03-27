package com.ProLearn.Repository;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.ProLearn.Bean.xcl_student;

public interface StudentRepository extends JpaRepository<xcl_student, String> {

    @Query("SELECT s.s_id,s.s_name,s.s_level,s.s_ci,s.s_center,s.s_mode,m.m_prodigy_ci, MAX(m.m_totalscore) " +
           "FROM xcl_student s FULL JOIN xcl_marks m ON s.s_id = m.s_id " +
           "GROUP BY s.s_id, s.s_name, s.s_level, s.s_center, s.s_ci, m.m_prodigy_ci")
    List<Object[]> findCombinedData();
    
    
    
    @Query("SELECT s, m FROM xcl_student s FULL JOIN xcl_marks m ON s.s_id = m.s_id WHERE s.s_id = ?1 and m.m_prodigy_ci=?2")
    List<Object[]> findByS_id(String s_id,String m_prodigy_ci);



	
}
