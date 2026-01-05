package com.example.demo.model;

import java.time.LocalDate;
import java.time.LocalDateTime;

import jakarta.persistence.*;

@Entity
@Table(name="tasks")
public class Task {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;
    @Column
	private String taskname;
	@Column
	private String description;
	@Column
	private LocalDateTime deadline;
	@Column
	private LocalDateTime assignedDate;
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="user_id",nullable=false)
	private User user;
	@Column
	@Enumerated(EnumType.STRING)
	private TaskStatus status=TaskStatus.PENDING;
	@PrePersist
	protected void onCreate() {
		this.assignedDate=LocalDateTime.now();
	}
	
	
	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
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

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public TaskStatus getStatus() {
		return status;
	}

	public void setStatus(TaskStatus status) {
		this.status = status;
	}


	


	


	

	
	
	
	

}

