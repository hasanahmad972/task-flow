package com.example.demo.dto;

import java.time.LocalDateTime;

import com.example.demo.model.TaskStatus;

public class TaskAssignResponse {
	
	 private Long taskId;
	    private String taskname;
	    private String description;
	    private LocalDateTime deadline;
	    private LocalDateTime assignedDate;
	    private TaskStatus status;
	    private Long userId;

	    // constructor
	    public TaskAssignResponse (Long taskId, String taskname, String description,
	                           LocalDateTime deadline, LocalDateTime assignedDate,
	                           TaskStatus status, Long userId) {
	        this.taskId = taskId;
	        this.taskname = taskname;
	        this.description = description;
	        this.deadline = deadline;
	        this.assignedDate = assignedDate;
	        this.status = status;
	        this.userId = userId;
	    }

		public Long getTaskId() {
			return taskId;
		}

		public void setTaskId(Long taskId) {
			this.taskId = taskId;
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

		public LocalDateTime getDeadline() {
			return deadline;
		}

		public void setDeadline(LocalDateTime deadline) {
			this.deadline = deadline;
		}

		public LocalDateTime getAssignedDate() {
			return assignedDate;
		}

		public void setAssignedDate(LocalDateTime assignedDate) {
			this.assignedDate = assignedDate;
		}

		public TaskStatus getStatus() {
			return status;
		}

		public void setStatus(TaskStatus status) {
			this.status = status;
		}

		public Long getUserId() {
			return userId;
		}

		public void setUserId(Long userId) {
			this.userId = userId;
		}


}


