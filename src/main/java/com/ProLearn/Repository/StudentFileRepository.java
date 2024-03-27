package com.ProLearn.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.ProLearn.Bean.xcl_student;

public interface StudentFileRepository extends JpaRepository<xcl_student, String > {
}
