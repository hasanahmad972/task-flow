import React,{useState} from 'react'


import { User, Trash2 } from "lucide-react";

import { delUserApi } from '../../api/adminApi';
import AddTask from './AddTask';
import TaskCreatedPopup from './TaskCreatedPopup';


export default function UserCard({ user, onDeleteSuccess }) {
  
  const [showform, setShowform] = useState(false);
  
  const [popupData, setPopupData] = useState(null);
  const delUsers = async (id) => {
    try {
      const res = await delUserApi(id);
      console.log(res.data);
      onDeleteSuccess();


    } catch (err) {
      console.error(err);
    }
  }
  
  return (
   <div
  className="flex items-center gap-6 rounded-2xl
             bg-white/90 backdrop-blur
             p-5 border border-indigo-100
             shadow-sm hover:shadow-lg
             transition-all duration-200"
>
  {/* Left: User Info */}
  <div className="flex items-center gap-4 shrink-0">
    <div
      className="flex h-12 w-12 items-center justify-center rounded-xl
                 bg-gradient-to-br from-indigo-100 to-purple-100"
    >
      <User className="h-6 w-6 text-indigo-600" />
    </div>

    <div>
      <p className="text-xs text-gray-500">
        User ID: <span className="font-medium">{user.id}</span>
      </p>
      <p className="text-base font-semibold text-gray-800">
        {user.username}
      </p>
    </div>
  </div>

  {/* Spacer */}
  <div className="flex-1" />

  {/* Right: Actions */}
  <div className="flex items-center gap-3 shrink-0">
    {/* Add Task */}
    <button
      onClick={() => setShowform(true)}
      className="flex items-center gap-2
                 rounded-xl px-4 py-2 text-sm font-semibold text-white
                 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700
                 shadow-sm hover:shadow-md
                 transition-all duration-200"
    >
      + Add Task
    </button>

    {showform && (
      <AddTask
        onClose={() => setShowform(false)}
        id={user.id}
        onSuccess={(data) => setPopupData(data)}
      />
    )}

    {popupData && (
      <TaskCreatedPopup
        data={popupData}
        onClose={() => setPopupData(null)}
      />
    )}

    {/* Delete */}
    <button
      onClick={() => delUsers(user.id)}
      className="flex h-10 w-10 items-center justify-center
                 rounded-xl border border-red-200
                 text-red-600
                 hover:bg-red-50 hover:border-red-300
                 transition"
      title="Delete User"
    >
      <Trash2 className="h-4 w-4" />
    </button>
  </div>
</div>





  );
}

