package com.ProLearn.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ProLearn.Bean.BatchStudent;

@Repository
public interface BatchStudentRepository extends JpaRepository<BatchStudent, Integer> {
    // Add custom query methods if needed
}
