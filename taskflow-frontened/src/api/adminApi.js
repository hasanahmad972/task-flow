import axios from "axios";

const API=axios.create({baseURL:"http://localhost:8081",});

API.interceptors.request.use((req)=>{
    const token =localStorage.getItem("token");
    if(token){
        req.headers.Authorization=`Bearer ${token}`;
    }
    return req;
});

export const getUserApi=()=>API.get("/admin/list-user");
export const addUserApi=(data)=>API.post("/admin/add-user",data)
export const delUserApi=(id)=>API.delete(`/admin/delete-user/${id}`)
export const addTask=(id,data)=>API.post(`/admin/add-task/${id}`,data);
export const listTask=(params)=>API.get("/admin/list-tasks",{params});





