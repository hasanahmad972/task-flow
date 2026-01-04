package com.example.demo.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Table
@Entity
public class Admin {
	  @Column
	   @Id
	   @GeneratedValue(strategy=GenerationType.IDENTITY)
	   private Long id;
	   
	   @Column
	   private String username;
	   @Column
	   private String password;
	  
	   public Long getId() {
		return id;
	   }
	   public void setId(Long id) {
		this.id = id;
	   }
	   public String getUsername() {
		return username;
	   }
	   public void setUsername(String user) {
		this.username = user;
	   }
	   public String getPassword() {
		return password;
	   }
	   public void setPassword(String password) {
		this.password = password;
	   }
}
