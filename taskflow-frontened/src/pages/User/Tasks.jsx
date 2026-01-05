import React, { useState, useEffect } from 'react'
import { getUserTask, updateStatus2 } from '../../api/adminApi';
export default function Tasks() {
  const formatDate = (dateStr) => {
    if (!dateStr) return "-";
    return new Date(dateStr).toLocaleString();
  };

  const [tasks, setTasks] = useState([]);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);
  const [assignedDate, setAssignedDate] = useState(null);
  const [deadlineDate, setDeadlineDate] = useState(null);
  const [errmssg, setErrmssg] = useState("");


  useEffect(() => {
    fetchTasks();
  }, [page, size, assignedDate, deadlineDate]);
  const username = localStorage.getItem("username");
  const fetchTasks = async () => {
    try {
      const params = {
        page,
        size,
        username,
      };


      if (assignedDate) params.assignedDate = assignedDate;
      if (deadlineDate) params.deadlineDate = deadlineDate;

      const res = await getUserTask(params);
      setTasks(res.data.content || []);
      setErrmssg("");
    } catch (err) {
      setErrmssg(err.response?.data?.message || err.message);
    }
  };
  //export const updateStatus=(id,status)=>API.put(`/user/tasks/${id}/status`,{status});
  const updateStatus = async (taskId, status) => {
    try {
      const response = await updateStatus2(taskId, status);
      fetchTasks(); // list refresh
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="p-6 from-indigo-50 via-purple-50 to-indigo-100 min-h-screen">
      {/* 🔍 Filters */}
      <div className="rounded-xl shadow-md p-4 mb-6 bg-indigo-50/60 border border-indigo-100">
        <div className="flex flex-wrap gap-4 items-end">
          {/* Assigned Date */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-indigo-700 mb-1">
              Assigned Date
            </label>
            <input
              type="date"
              value={assignedDate || ""}
              onChange={(e) => setAssignedDate(e.target.value || null)}
              className="h-10 px-3 rounded-lg border border-indigo-200 bg-white
                   focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
          </div>

          {/* Deadline Date */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-indigo-700 mb-1">
              Deadline
            </label>
            <input
              type="date"
              value={deadlineDate || ""}
              onChange={(e) => setDeadlineDate(e.target.value || null)}
              className="h-10 px-3 rounded-lg border border-indigo-200 bg-white
                   focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
          </div>
          {/* Page Size */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-indigo-700 mb-1">
              Rows
            </label>
            <select
              value={size}
              onChange={(e) => {
                setSize(Number(e.target.value));
                setPage(0); // reset page when size changes
              }}
              className="h-10 px-3 rounded-lg border border-indigo-200 bg-white
               focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
            </select>
          </div>



        </div>
      </div>


      {/* Error */}
      {errmssg && (
        <p className="text-red-600 mb-3 font-medium">
          {errmssg}
        </p>
      )}

      {/* 📋 Table */}
      <div className="bg-white rounded-xl shadow-md overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100">
            <tr className="text-left text-sm font-semibold text-gray-700">
              <th className="px-4 py-3">ID</th>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Description</th>
              <th className="px-4 py-3">Assigned Date</th>
              <th className="px-4 py-3">Deadline</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {tasks.length === 0 ? (
              <tr>
                <td
                  colSpan="6"
                  className="text-center py-6 text-gray-500"
                >
                  No tasks found
                </td>
              </tr>
            ) : (
              tasks.map((task) => (
                <tr
                  key={task.id}
                  className="border-t text-sm hover:bg-gray-50 transition"
                >

                  <td className="px-4 py-3">{task.id}</td>
                  <td className="px-4 py-3 font-medium">{task.taskname}</td>
                  <td className="px-4 py-3 font-medium">{task.description}</td>
                  <td className="px-4 py-3">
                    {formatDate(task.assignedDate)}
                  </td>
                  <td className="px-4 py-3">
                    {formatDate(task.deadline)}
                  </td>
                  <td className="px-4 py-3">
                    {task.status === "COMPLETED" ? (
                      // COMPLETED → read-only badge
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                        {task.status}
                      </span>
                    ) : (
                      // PENDING / IN_PROGRESS → dropdown with SAME default value
                      <select
                        value={task.status}   // enum value
                        onChange={(e) => updateStatus(task.id, e.target.value)}
                        className={`px-3 py-1 rounded-full text-xs font-semibold cursor-pointer
    ${task.status === "PENDING" ? "bg-yellow-100 text-yellow-800" : "bg-blue-100 text-blue-800"}
    focus:outline-none`}
                      >
                        <option value="PENDING">PENDING</option>
                        <option value="IN_PROGRESS">IN PROGRESS</option> {/* value correct, display alag */}
                        <option value="COMPLETED">COMPLETED</option>
                      </select>

                    )}
                  </td>

                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* ⏮ Pagination */}
      <div className="flex justify-center items-center gap-4 mt-6">
        <button
          disabled={page === 0}
          onClick={() => setPage((p) => p - 1)}
          className="px-4 py-2 rounded-lg border
                 disabled:opacity-40 disabled:cursor-not-allowed
                 hover:bg-gray-100"
        >
          Prev
        </button>

        <span className="font-medium text-gray-700">
          Page {page + 1}
        </span>

        <button
          onClick={() => setPage((p) => p + 1)}
          className="px-4 py-2 rounded-lg border
                 hover:bg-gray-100"
        >
          Next
        </button>
      </div>
    </div>
  )
}
