package com.ProLearn.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.ProLearn.Bean.BatchStudent;

@Repository
public interface RemoveStudentRepository extends JpaRepository<BatchStudent, Integer> {

    // To delete a record based on the s_id sent from the frontend
    @Modifying
    @Query("DELETE FROM BatchStudent b WHERE b.s_id = ?1")
    void removeStudentById(String s_id);
}
