package com.example.demo.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.demo.dto.TaskDataDTO;
import com.example.demo.model.TaskStatus;
import com.example.demo.model.User;
import com.example.demo.repository.TaskRepository;
import com.example.demo.repository.UserRepository;

@Service
public class UserService {
	@Autowired
	private UserRepository ur;
	@Autowired
	private PasswordEncoder passwordEncoder;
	@Autowired
	private TaskRepository tr;

	public ResponseEntity<String> updatePass(String username, String newPass) {
		User u=ur.findByUsername(username).orElseThrow(()-> new RuntimeException("user not founnd"));
		u.setPassword(passwordEncoder.encode(newPass));
		ur.save(u);
		return ResponseEntity.ok("password updated succesfull");
	}
	//Total task,completed task,in progress,pending,performance rate per 10
	public TaskDataDTO task_data(String username){
		User u=ur.findByUsername(username).orElseThrow(()->new RuntimeException("user not found"));
		System.out.println(u.getId());
		long total=tr.countByUserId(u.getId());
		long complete=tr.countByUserIdAndStatus(u.getId(),TaskStatus.COMPLETED);
		long inprogres=tr.countByUserIdAndStatus(u.getId(),TaskStatus.IN_PROGRESS);
		long pending=tr.countByUserIdAndStatus(u.getId(), TaskStatus.PENDING);
		float performance=0;
		if(total>0) {
		 performance=(complete/total)*10;
		}
		TaskDataDTO dto=new TaskDataDTO();
		dto.setTotaltasks(total);
		dto.setCompletedtasks(complete);
		dto.setPending(pending);
		dto.setInprogress(inprogres);
		dto.setPerformance(performance);
		
		
		return dto;
	      
		
	}

}
