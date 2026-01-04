package com.example.demo.dto;

import java.time.LocalDateTime;

public class TaskAssignRequest {
     private String taskname;
     private String description;
     private LocalDateTime deadline;
	 public String getTaskname() {
		 return taskname;
	 }
	 public void setTaskname(String taskname) {
		 this.taskname = taskname;
	 }
	 public String getDescription() {
		 return description;
	 }
	 public void setDescription(String description) {
		 this.description = description;
	 }
	 public LocalDateTime getDeadline() {
		 return deadline;
	 }
	 public void setDeadline(LocalDateTime deadline) {
		 this.deadline = deadline;
	 }
}
