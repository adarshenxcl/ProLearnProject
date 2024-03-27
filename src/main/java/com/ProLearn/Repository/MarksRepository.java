package com.ProLearn.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.ProLearn.Bean.xcl_marks;
@Repository
public interface MarksRepository extends JpaRepository<xcl_marks,Integer>{
	@Query("Select s from xcl_marks s where s_id=?1")
	List<xcl_marks> findBys_id(int s_id);

}
