package com.ProLearn.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ProLearn.Bean.xcl_student;
@Repository
public interface NewStudentRepository extends JpaRepository<xcl_student, String> {

}
