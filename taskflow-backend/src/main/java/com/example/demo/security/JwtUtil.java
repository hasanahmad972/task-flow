package com.example.demo.security;


import io.jsonwebtoken.security.Keys;
import java.util.Date;
import java.security.Key;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Component;


@Component
public class JwtUtil {

	   private static final Key key =
	            Keys.secretKeyFor(SignatureAlgorithm.HS256); // ✅ 256-bit+

    private final long EXPIRATION = 1000 * 60 * 60; // 1 hour

    public String generateToken(String username) {
    	 return Jwts.builder()
                 .setSubject(username)
                 .setIssuedAt(new Date())
                 .setExpiration(
                         new Date(System.currentTimeMillis() + EXPIRATION)
                 )
                 .signWith(key)   // ✅ correct
                 .compact();
    }

    public String extractUsername(String token) {
    	 return Jwts.parserBuilder()
                 .setSigningKey(key)
                 .build()
                 .parseClaimsJws(token)
                 .getBody()
                 .getSubject();
    }
}
