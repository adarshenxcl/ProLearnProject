package com.ProLearn.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.ProLearn.Bean.Batch;
import com.ProLearn.Bean.BatchStudent;

@Repository
public interface ProdigyCiRepository extends JpaRepository<BatchStudent, Integer>{
	@Query("SELECT b.b_prodigy_ci FROM Batch b JOIN BatchStudent bs ON bs.b_id = b.b_id WHERE bs.s_id = ?1")
	List<String> getBys_id(String s_id);

}
