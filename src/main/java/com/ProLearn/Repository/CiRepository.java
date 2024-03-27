package com.ProLearn.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.ProLearn.Bean.Batch;

@Repository
public interface CiRepository extends JpaRepository<Batch, Integer> {

    @Query("SELECT b FROM Batch b WHERE b.u_name = ?1")
    List<Batch> findBatchesByUName(String u_name);
}
