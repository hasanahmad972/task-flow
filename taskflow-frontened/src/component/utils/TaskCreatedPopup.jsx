import React from 'react'

export default function TaskCreatedPopup({data,onClose}) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-96 text-center">
        
        <div className="text-green-600 text-4xl mb-3">✔</div>

        <h2 className="text-lg font-semibold mb-2">
          Task Created Successfully!
        </h2>

        <p className="text-sm text-gray-600 mb-4">
          <b>{data.taskname}</b> has been assigned successfully.
        </p>

        <button
          onClick={onClose}
          className="px-5 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          OK
        </button>
      </div>
    </div>
  )
}


