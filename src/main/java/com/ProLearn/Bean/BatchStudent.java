package com.ProLearn.Bean;

import jakarta.persistence.*;

@Entity
@Table(name = "batchstudents")
public class BatchStudent {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int bs_id;

    private String s_id;
    private int b_id;

    // Constructors, getters, and setters...

    public BatchStudent() {
        // Default constructor is required by JPA
    }

    // Getters and setters...

    public int getBs_id() {
        return bs_id;
    }

    public void setBs_id(int bs_id) {
        this.bs_id = bs_id;
    }

    public String getS_id() {
        return s_id;
    }

    public void setS_id(String s_id) {
        this.s_id = s_id;
    }

    public int getB_id() {
        return b_id;
    }

    public void setB_id(int b_id) {
        this.b_id = b_id;
    }

    // Constructors...

    public BatchStudent(int bs_id, String s_id, int b_id) {
        this.bs_id = bs_id;
        this.s_id = s_id;
        this.b_id = b_id;
    }
}
