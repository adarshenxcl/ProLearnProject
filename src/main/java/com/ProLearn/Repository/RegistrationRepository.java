package com.ProLearn.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.ProLearn.Bean.Registration;

public interface RegistrationRepository extends JpaRepository<Registration, Integer> {
	
	@Query("SELECT u_role FROM Registration WHERE u_name = ?1 and u_password = ?2")
	String findRoleByu_nameandu_password(String u_name, String u_password);
	@Query("SELECT name FROM Registration WHERE u_name = ?1 and u_password = ?2")
	String findNameByu_nameandu_password(String uName, String uPassword);
	@Query("SELECT u_name FROM Registration WHERE u_name = ?1 and u_password = ?2")
	String findu_nameByu_nameandu_password1(String uName, String uPassword);
	@Query("SELECT r.name FROM Registration r WHERE r.u_role='CI'")
	List<String> findallname();

}