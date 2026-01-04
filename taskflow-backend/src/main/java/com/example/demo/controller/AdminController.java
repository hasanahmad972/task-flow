package com.example.demo.controller;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.AuthRequest;
import com.example.demo.dto.TaskAssignRequest;
import com.example.demo.dto.TaskAssignResponse;
import com.example.demo.dto.TaskListResponseDTO;
import com.example.demo.model.Task;
import com.example.demo.model.User;
import com.example.demo.service.AdminService;
import com.example.demo.service.TaskService;

@CrossOrigin(origins="http://localhost:5173")
@RestController
@RequestMapping("/admin")
public class AdminController {
	@Autowired
	private AdminService as;
	@Autowired
	private TaskService ts;
	
	
	@GetMapping("/list-tasks")
	public ResponseEntity<Page<TaskListResponseDTO>> getTasks(
			@RequestParam(defaultValue="0") int page,
			@RequestParam(defaultValue="10") int size,
			@RequestParam(required=false)  Long userId,
			@RequestParam(required=false)  
			@DateTimeFormat(iso=DateTimeFormat.ISO.DATE)
			LocalDate assignedDate,
			@RequestParam(required=false)  
			@DateTimeFormat(iso=DateTimeFormat.ISO.DATE)
			LocalDate deadlineDate){
				return ResponseEntity.ok(ts.getFilteredTasks(page,size,userId,assignedDate,deadlineDate)
						);
		
	}
			
			
			
	
	@PostMapping("/add-task/{userId}")
	private ResponseEntity<TaskAssignResponse> assignTask(@PathVariable Long userId,
			                               @RequestBody TaskAssignRequest tar){
							return ResponseEntity.ok(ts.assignTaskToUser(userId,tar));		
		}
	@PostMapping("/add-user")
	private ResponseEntity<?> add_user(@RequestBody AuthRequest request){
		 return as.addUser(request);
		}
	@GetMapping("/list-user")
	private ResponseEntity<?> list_user(){
		return as.getMyUsers();
		}
	@DeleteMapping("/delete-user/{id}")
	private ResponseEntity<?> deleteuser(@PathVariable Long id){
		try {
		return as.delMyUsers(id);
		}
		catch(Exception e) {
			return ResponseEntity
					.status(HttpStatus.INTERNAL_SERVER_ERROR)
					.body("Failed to remove user due to server error");
		  }
	
        }
	}
