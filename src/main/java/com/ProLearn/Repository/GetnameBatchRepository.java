package com.ProLearn.Repository;

import org.hibernate.type.descriptor.converter.spi.JpaAttributeConverter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.ProLearn.Bean.Registration;
@Repository
public interface GetnameBatchRepository extends JpaRepository<Registration,Integer > {
	@Query("SELECT name FROM Registration WHERE u_name=?1")
	String findnameByu_name(String u_name);


}
