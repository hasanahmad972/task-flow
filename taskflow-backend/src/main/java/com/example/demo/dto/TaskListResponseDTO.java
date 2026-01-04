package com.example.demo.dto;



import java.time.LocalDateTime;

import com.example.demo.model.TaskStatus;

public class TaskListResponseDTO {

    private Long id;
    private String taskname;
    private String description;

    private LocalDateTime assignedDate;
    private LocalDateTime deadline;

    private TaskStatus status;

    // user info (flat, safe)
    private Long userId;
    private String username;

    // 🔹 Constructors
    public TaskListResponseDTO() {
    }

    {
        this.id = id;
        this.taskname = taskname;
        this.description = description;
        this.assignedDate = assignedDate;
        this.deadline = deadline;
        this.status = status;
        this.userId = userId;
        this.username = username;
    }

    // 🔹 Getters & Setters
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

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}