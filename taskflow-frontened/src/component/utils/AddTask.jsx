import React,{useState} from 'react'
import {addTask} from "../../api/adminApi"
export default function AddTask({onClose,id,onSuccess}) {
  const [taskname,setTaskname]=useState("");
  const [description,setDescription]=useState("");
  const[deadline,setDeadline]=useState("");
  const[error,setError]=useState("");
  const handleSubmit=async(e)=>{
      e.preventDefault();
      setError("");
      try{
        const data={taskname,description,deadline};
          
        const res=await addTask(id,data);
        console.log(res.data);
        onSuccess(res.data);
        onClose();
        setTaskname("");
        setDeadline("");
        setDescription("");
       }
      catch(error){
       setError(error.response?.data||"ERROR IN assigning task")
      }
      
  }


  return (
   <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-96">
        <h2 className="text-lg font-semibold mb-4">Add Task</h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            placeholder="Task name"
            value={taskname}
            onChange={(e) => setTaskname(e.target.value)}
            required
            className="w-full border p-2 rounded"
          />

          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="w-full border p-2 rounded"
          />

          <input
            type="datetime-local"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            required
            className="w-full border p-2 rounded"
          />

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              Assign Task
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}




