package com.ProLearn.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.ProLearn.Bean.Batch;

public interface BatchRepository extends JpaRepository<Batch, Integer> {

}