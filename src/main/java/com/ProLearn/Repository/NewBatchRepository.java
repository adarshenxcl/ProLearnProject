package com.ProLearn.Repository;

import org.springframework.data.jpa.repository.JpaRepository;


import com.ProLearn.Bean.Batch;

public interface NewBatchRepository extends JpaRepository<Batch, Integer>{
	
	

}
