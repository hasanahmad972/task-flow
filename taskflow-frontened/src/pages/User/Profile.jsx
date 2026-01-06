import React, { useEffect, useState } from 'react'
import { getTaskData } from '../../api/adminApi';
import StatCars from '../../component/utils/StatCars';
export default function Profile() {
   const[taskData,setTaskData]=useState(null);
   const[error,setError]=useState("");
   const[loading,setLoading]=useState(true);

  useEffect(()=>{
   fetchTaskData();
  },[]);
   const fetchTaskData=async()=>{
      try{
            const res=await getTaskData();
            setTaskData(res.data)
      }
      catch(err){
         setError("Failed to load")
      }
      finally{
           setLoading(false);
      }

    };
  
  return (
    <div className="p-6">
      <div >
        {loading&&<p className='p-6'>Loading ...</p>}
        {error&&<p className='p-4 text-red-500'>{error}</p>}

       {!loading && <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCars
        title="Total Tasks"
        value={taskData.totaltasks}
        color="bg-blue-100 text-blue-700"
        />
        <StatCars
        title="Performance"
        value={taskData.performance}
        color="bg-purple-100 text-purple-700"
        />
        <StatCars
        title="Completed Tasks"
        value={taskData.completedtasks}
        color="bg-green-100 text-green-700"
        />
        <StatCars
        title="InProgress Tasks"
        value={taskData.inprogress}
        color="bg-blue-100 text-blue-700"
        />
        <StatCars
        title="Pending Tasks"
        value={taskData.pending}
        color="bg-red-100 text-red-700"
        />
        </div>}
      </div>
     </div>
  )
}
// public class TaskDataDTO {
// 	private Long totaltasks;
// 	private Long completedtasks;
// 	private Long inprogress;
// 	private Long pending;
// 	private float performance;
// 	public Long getTotaltasks() {
// 		return totaltasks;
// 	}

// export const updatePass=(newPass)=>API.put(`/user/changepassword`,null,{params:{newPass}});
// export const getTaskData=()=>API.get("user/getTaskData");
//  @PutMapping("/changepassword/newPass")
//     public ResponseEntity<String> updatePass(@RequestParam  String newPass){
//     	Authentication auth=SecurityContextHolder.getContext().getAuthentication();
// 		String username=auth.getName();
//     	return us.updatePass(username,newPass);
//     }
//     @GetMapping("/getTaskData")
//     public ResponseEntity<TaskDataDTO> getData(){
//     	Authentication auth=SecurityContextHolder.getContext().getAuthentication();
// 		String username=auth.getName();
// 		return ResponseEntity.ok(us.task_data(username));
    	
//     }