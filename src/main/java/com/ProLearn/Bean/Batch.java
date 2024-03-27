package com.ProLearn.Bean;

import java.sql.Date;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
public class Batch {
	
	public Batch(){
		super();
	}
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "b_id")
	 private int b_id;      
	 private String b_prodigy_ci; 
	 private String b_day;       
	 private Date b_startdate; 
	private Date  b_enddate;    
	 private String b_time;     
	 private String b_duration;
	 private String b_mode;      
	 private String u_name;
	 private String center;
	 //Getters and Setters
	public int getB_id() {
		return b_id;
	}
	public void setB_id(int b_id) {
		this.b_id = b_id;
	}
	public String getB_prodigy_ci() {
		return b_prodigy_ci;
	}
	public void setB_prodigy_ci(String b_prodigy_ci) {
		this.b_prodigy_ci = b_prodigy_ci;
	}
	public String getB_day() {
		return b_day;
	}
	public void setB_day(String b_day) {
		this.b_day = b_day;
	}
	public Date getB_startdate() {
		return b_startdate;
	}
	public void setB_startdate(Date b_startdate) {
		this.b_startdate = b_startdate;
	}
	public Date getB_enddate() {
		return b_enddate;
	}
	public void setB_enddate(Date b_enddate) {
		this.b_enddate = b_enddate;
	}
	public String getB_time() {
		return b_time;
	}
	public void setB_time(String b_time) {
		this.b_time = b_time;
	}
	public String getB_duration() {
		return b_duration;
	}
	public void setB_duration(String b_duration) {
		this.b_duration = b_duration;
	}
	public String getB_mode() {
		return b_mode;
	}
	public void setB_mode(String b_mode) {
		this.b_mode = b_mode;
	}
	public String getU_name() {
		return u_name;
	}
	public void setU_name(String u_name) {
		this.u_name = u_name;
	}
	 
	public String getCenter() {
		return center;
	}
	public void setCenter(String center) {
		this.center = center;
	}
	public Batch(int b_id, String b_prodigy_ci, String b_day, Date b_startdate, Date b_enddate, String b_time,
			String b_duration, String b_mode, String u_name, String center) {
		super();
		this.b_id = b_id;
		this.b_prodigy_ci = b_prodigy_ci;
		this.b_day = b_day;
		this.b_startdate = b_startdate;
		this.b_enddate = b_enddate;
		this.b_time = b_time;
		this.b_duration = b_duration;
		this.b_mode = b_mode;
		this.u_name = u_name;
		this.center = center;
	}
	
}
	