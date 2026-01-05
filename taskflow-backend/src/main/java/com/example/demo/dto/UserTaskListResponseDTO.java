package com.example.demo.dto;

import java.time.LocalDateTime;

import com.example.demo.model.TaskStatus;

public class UserTaskListResponseDTO {
	 private Long id;
	    private String taskname;
	    private String description;

	    private LocalDateTime assignedDate;
	    private LocalDateTime deadline;

	    private TaskStatus status;

	  
	    // 🔹 Constructors
	    public UserTaskListResponseDTO() {
	    }

	    {
	        this.id = id;
	        this.taskname = taskname;
	        this.description = description;
	        this.assignedDate = assignedDate;
	        this.deadline = deadline;
	        this.status = status;
	       
	    }

		public Long getId() {
			return id;
		}

		public void setId(Long id) {
			this.id = id;
		}

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

		public LocalDateTime getAssignedDate() {
			return assignedDate;
		}

		public void setAssignedDate(LocalDateTime assignedDate) {
			this.assignedDate = assignedDate;
		}

		public LocalDateTime getDeadline() {
			return deadline;
		}

		public void setDeadline(LocalDateTime deadline) {
			this.deadline = deadline;
		}

		public TaskStatus getStatus() {
			return status;
		}

		public void setStatus(TaskStatus status) {
			this.status = status;
		}

}
