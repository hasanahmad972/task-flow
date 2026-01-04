import React, { useEffect } from "react";
export default function UserCreatedPopup({ data, onClose }) {
  if (!data) return null;

     useEffect(()=>{
       if(!data) return;
        const timer=setTimeout(onClose,20000);
        return()=>clearTimeout(timer);
     },[data])
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-80 shadow-xl">
        <h2 className="text-green-600 font-bold mb-3">
          User Created Successfully
        </h2>

        <p><b>Username:</b> {data.username}</p>
        <p><b>Password:</b> {data.password}</p>

        <p className="text-xs text-gray-500 mt-2">
          This card will close automatically in 20 seconds
        </p>

        <button
          onClick={onClose}
          className="mt-4 w-full bg-gray-800 text-white py-1 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
}
