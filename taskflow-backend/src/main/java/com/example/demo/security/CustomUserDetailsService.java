package com.example.demo.security;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import com.example.demo.model.Admin;
import com.example.demo.model.User;
import com.example.demo.repository.AdminRepository;
import com.example.demo.repository.UserRepository;

@Service
public class CustomUserDetailsService implements UserDetailsService {
	
	@Autowired
	private UserRepository ur;
	@Autowired
    private AdminRepository ar;
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException{
		
		Optional<User> u=ur.findByUsername(username);
				  
		
		if(u.isPresent()) {
			    User user=u.get();
		         return org.springframework.security.core.userdetails.User
				 .withUsername(user.getUsername())
	                .password(user.getPassword())
	                .roles("USER")
	                .build();
		}
		Optional<Admin> a=ar.findByUsername(username);
				  
		
		if(a.isPresent()) {
			  Admin user=a.get();
			  return org.springframework.security.core.userdetails.User
						 .withUsername(user.getUsername())
			                .password(user.getPassword())
			                .roles("ADMIN")
			                .build();
		}
		throw new UsernameNotFoundException("User not found");
	}
	

}
