package com.ProLearn.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ProLearn.Bean.xcl_marks;
@Repository
public interface AddMarksRepository extends JpaRepository<xcl_marks, Integer> {

}
