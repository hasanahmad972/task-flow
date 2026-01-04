import React, { useState } from 'react'
import { addUserApi } from '../../api/adminApi';
export default function AddUserModel({isOpen,onClose,onSuccess}) {
    const[form,setForm]=useState({
        username:"",
        password:"",
    })
    
    const [error,setError]=useState();
    if(!isOpen) return null;
    const handleChange=(e)=>{
        setForm({...form,[e.target.name]:e.target.value})
    }
    const handleSubmit=async(e)=>{
         e.preventDefault();
         setError("");
         try {
           await addUserApi(form);
           
            onSuccess({
               username: form.username,
               password:form.password
            });
            
            
            onClose();
            setForm({username:"",password:""});
            
            
         
         } catch (error) {
            setError(error.response?.data||"Error adding user")
         }
    }
  return (
     <div style={overlayStyle}>
      <div style={modalStyle}>
        <h3>Add User</h3>

        <form onSubmit={handleSubmit}>
          <input
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            required
          />

          <br /><br />

          <input
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <br /><br />

          <button type="submit">Add</button>
          <button
            type="button"
            onClick={onClose}
            style={{ marginLeft: "10px" }}
          >
            Cancel
          </button>
        </form>

        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </div>
  );
}

/* 🔹 simple inline styles (later Tailwind bana sakte ho) */
const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: "rgba(0,0,0,0.4)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000,
};

const modalStyle = {
  background: "#fff",
  padding: "20px",
  width: "300px",
  borderRadius: "6px",
};
