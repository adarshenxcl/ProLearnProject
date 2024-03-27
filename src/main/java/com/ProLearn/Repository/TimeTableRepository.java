package com.ProLearn.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.ProLearn.Bean.Batch;

public interface TimeTableRepository extends JpaRepository<Batch, Integer> {
	
	@Query("SELECT b FROM Batch b JOIN BatchStudent bs ON bs.b_id = b.b_id WHERE bs.s_id = ?1")
	List<Batch> getBys_id(String s_id);

}
