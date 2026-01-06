package com.example.demo.dto;
//Total task,completed task,in progress,pending,performance rate per 10
public class TaskDataDTO {
	private Long totaltasks;
	private Long completedtasks;
	private Long inprogress;
	private Long pending;
	private float performance;
	public Long getTotaltasks() {
		return totaltasks;
	}
	public void setTotaltasks(Long totaltasks) {
		this.totaltasks = totaltasks;
	}
	public Long getCompletedtasks() {
		return completedtasks;
	}
	public void setCompletedtasks(Long completedtasks) {
		this.completedtasks = completedtasks;
	}
	public Long getInprogress() {
		return inprogress;
	}
	public void setInprogress(Long inprogress) {
		this.inprogress = inprogress;
	}
	public Long getPending() {
		return pending;
	}
	public void setPending(Long pending) {
		this.pending = pending;
	}
	public float getPerformance() {
		return performance;
	}
	public void setPerformance(float performance) {
		this.performance = performance;
	}
	
	

}
