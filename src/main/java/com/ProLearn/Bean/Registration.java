package com.ProLearn.Bean;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Registration")
public class Registration {
    
    public Registration(){
        super();
    }

    @Id
    private int u_id;
    private String u_name;
    private String name;
    private String u_password;
    private String u_role;

    public int getU_id() {
        return u_id;
    }

    public void setU_id(int u_id) {
        this.u_id = u_id;
    }

    public String getU_name() {
        return u_name;
    }

    public void setU_name(String u_name) {
        this.u_name = u_name;
    }

    public String getU_password() {
        return u_password;
    }

    public void setU_password(String u_password) {
        this.u_password = u_password;
    }

    public String getU_role() {
        return u_role;
    }

    public void setU_role(String u_role) {
        this.u_role = u_role;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Registration(int u_id, String u_name, String name, String u_password, String u_role) {
        super();
        this.u_id = u_id;
        this.u_name = u_name;
        this.name = name;
        this.u_password = u_password;
        this.u_role = u_role;
    }    
}
