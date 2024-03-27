package com.ProLearn.Bean;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="xcl_student")
//Default Constructor
public class xcl_student {
	public xcl_student(){
	super();
	}
@Id
private String s_id;     
private String s_name; 
private String s_level;  
private String s_ci;    
private String s_center;
private String s_mode;
public String getS_id() {
	return s_id;
}
public void setS_id(String s_id) {
	this.s_id = s_id;
}
public String getS_name() {
	return s_name;
}
public void setS_name(String s_name) {
	this.s_name = s_name;
}
public String getS_level() {
	return s_level;
}
public void setS_level(String s_level) {
	this.s_level = s_level;
}
public String getS_ci() {
	return s_ci;
}
public void setS_ci(String s_ci) {
	this.s_ci = s_ci;
}
public String getS_center() {
	return s_center;
}
public void setS_center(String s_center) {
	this.s_center = s_center;
}
public String getS_mode() {
	return s_mode;
}
public void setS_mode(String s_mode) {
	this.s_mode = s_mode;
}
public xcl_student(String s_id, String s_name, String s_level, String s_ci, String s_center, String s_mode) {
	super();
	this.s_id = s_id;
	this.s_name = s_name;
	this.s_level = s_level;
	this.s_ci = s_ci;
	this.s_center = s_center;
	this.s_mode = s_mode;
}

}

