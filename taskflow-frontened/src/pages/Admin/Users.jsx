import React from 'react'
import { useEffect, useState } from 'react';
import UserCard from '../../component/utils/UserCard';
import { getUserApi } from '../../api/adminApi';
import AddUserModel from '../../component/utils/AddUserModel';
import UserCreatedPopup from '../../component/utils/UserCreatedPopup';
export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showform, setShowform] = useState(false);
  const [popupData, setPopupData] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, [UserCard]);

  const fetchUsers = async () => {
    try {
      const res = await getUserApi();
      setUsers(res.data);
    } catch (err) {
      console.error(err);
    }
    finally {
      setLoading(false);
    }
  }



  return (
          <div className="p-6 min-h-screen
                bg-gradient-to-br
                from-indigo-50 via-purple-50 to-indigo-100">
  {/* Header */}
  <div className="flex items-center justify-between mb-6">
    <h2 className="text-2xl font-bold
                   bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700
                   bg-clip-text text-transparent">
      Users
    </h2>

    <button
      onClick={() => setShowform(true)}
      className="flex items-center gap-2 px-4 py-2
                 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700
                 text-white text-sm font-semibold rounded-xl
                 shadow-md hover:shadow-lg
                 transition-all duration-200"
    >
      + Add User
    </button>
  </div>

  {/* Add User Modal */}
  <AddUserModel
    isOpen={showform}
    onClose={() => setShowform(false)}
    onSuccess={(data) => {
      setPopupData(data);
      fetchUsers();
    }}
  />

  {/* Success Popup */}
  {popupData && (
    <UserCreatedPopup
      data={popupData}
      onClose={() => setPopupData(null)}
    />
  )}

  {/* Body */}
  {loading && (
    <p className="text-sm text-gray-600 mt-4">
      Loading users...
    </p>
  )}

  {!loading && users.length === 0 && (
    <p className="text-sm text-gray-600 mt-4">
      No users found
    </p>
  )}

  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {users.map((u) => (
      <UserCard
        key={u.id}
        user={u}
        onDeleteSuccess={fetchUsers}
      />
    ))}
  </div>
</div>



  )
}
