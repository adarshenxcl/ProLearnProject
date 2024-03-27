package com.ProLearn.Bean;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="xcl_marks")
public class xcl_marks {
	
	public xcl_marks(){
		super();
	}
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)

     private int m_id;        
	 private String s_id;        
	 private int m_roundnumber; 
	 private int m_abacusscore;
	 private int m_visualscore; 
	 private int m_muldivscore; 
	 private int  m_totalscore;  
	 private String m_prodigy_ci;  
	 private String m_remarks;     
	 private Date m_date;
//Getters and Setters
	public int getM_id() {
		return m_id;
	}
	public void setM_id(int m_id) {
		this.m_id = m_id;
	}
	public String getS_id() {
		return s_id;
	}
	public void setS_id(String s_id) {
		this.s_id = s_id;
	}
	public int getM_roundnumber() {
		return m_roundnumber;
	}
	public void setM_roundnumber(int m_roundnumber) {
		this.m_roundnumber = m_roundnumber;
	}
	public int getM_abacusscore() {
		return m_abacusscore;
	}
	public void setM_abacusscore(int m_abacusscore) {
		this.m_abacusscore = m_abacusscore;
	}
	public int getM_visualscore() {
		return m_visualscore;
	}
	public void setM_visualscore(int m_visualscore) {
		this.m_visualscore = m_visualscore;
	}
	public int getM_muldivscore() {
		return m_muldivscore;
	}
	public void setM_muldivscore(int m_muldivscore) {
		this.m_muldivscore = m_muldivscore;
	}
	public int getM_totalscore() {
		return m_totalscore;
	}
	public void setM_totalscore(int m_totalscore) {
		this.m_totalscore = m_totalscore;
	}
	public String getM_prodigy_ci() {
		return m_prodigy_ci;
	}
	public void setM_prodigy_ci(String m_prodigy_ci) {
		this.m_prodigy_ci = m_prodigy_ci;
	}
	public String getM_remarks() {
		return m_remarks;
	}
	public void setM_remarks(String m_remarks) {
		this.m_remarks = m_remarks;
	}
	public Date getM_date() {
		return m_date;
	}
	public void setM_date(Date m_date) {
		this.m_date = m_date;
	}
	 //Constructor
	public xcl_marks(int m_id, String s_id, int m_roundnumber, int m_abacusscore, int m_visualscore, int m_muldivscore,
			int m_totalscore, String m_prodigy_ci, String m_remarks, Date m_date) {
		super();
		this.m_id = m_id;
		this.s_id = s_id;
		this.m_roundnumber = m_roundnumber;
		this.m_abacusscore = m_abacusscore;
		this.m_visualscore = m_visualscore;
		this.m_muldivscore = m_muldivscore;
		this.m_totalscore = m_totalscore;
		this.m_prodigy_ci = m_prodigy_ci;
		this.m_remarks = m_remarks;
		this.m_date = m_date;
	}
	
}
