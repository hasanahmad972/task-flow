package com.example.demo.controller;





import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.*;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import com.example.demo.dto.AuthResponse;
import com.example.demo.dto.AuthRequest;
import com.example.demo.security.CustomUserDetailsService;
import com.example.demo.security.JwtUtil;
import com.example.demo.dto.SignupRequest;
import com.example.demo.model.Admin;
import com.example.demo.repository.AdminRepository;
import com.example.demo.repository.UserRepository;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/auth")
public class AuthController {
	@Autowired
	private CustomUserDetailsService userDetailsService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtUtil jwtUtil;
    
    @Autowired
    private PasswordEncoder passwordEncoder;
    
    @Autowired
    private AdminRepository ar;

    @PostMapping("/login")
    public AuthResponse login(@RequestBody AuthRequest request) {

        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.username, request.password));
        String token=jwtUtil.generateToken(request.username);
        
        // 2️⃣ Load user details (role yahin se aata hai)
            UserDetails userDetails =
                userDetailsService.loadUserByUsername(request.getUsername());

            // 3️⃣ Role extract karo
            String role = userDetails.getAuthorities()
                                     .iterator()
                                     .next()
                                     .getAuthority();
            System.out.println(role);
            // 5️⃣ Response return
            return new AuthResponse(token,role,userDetails.getUsername());
            }
           

    
    @PostMapping("/signup")
    public String signup(@RequestBody SignupRequest req) {
    	System.out.println(req.getUsername());
    	System.out.println(req.getPassword());
    	if(ar.findByUsername(req.getUsername()).isPresent()) {
    		throw new RuntimeException("Username Already Present");
    	}
    	else {
    		Admin a=new Admin();
    		a.setUsername(req.getUsername());
    		a.setPassword(passwordEncoder.encode(req.getPassword()));
    		 Admin ad=ar.save(a);
    		if(ad==null) {
    			throw new RuntimeException("Internal server Error");
    		}
    		else {
    			return "Admin registered successfully";
    		}
    	}
		
    	 
    }
}
