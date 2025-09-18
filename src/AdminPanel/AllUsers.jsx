import React, { useEffect, useState } from "react";
import AdminLayout from "../components/adminComponents/AdminLayout";
import axios from "axios";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const token = localStorage.getItem("token"); // assuming admin token stored here

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/auth", {
          headers: token ? { Authorization: `Bearer ${token}` } : {},
        });
        if (res.data.success) setUsers(res.data.users);
      } catch (err) {
        console.error("Error fetching users:", err);
      }
    };

    fetchUsers();
  }, [token]);

  const handleDelete = (userId) => async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this user?");
    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem("token"); // Make sure token is fetched
      const res = await axios.delete(`http://localhost:5000/api/auth/delete/${userId}`, {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      });

      if (res.data.success) {
        alert("User deleted successfully");
        setUsers((prev) => prev.filter((u) => u._id !== userId));
      } else {
        alert(res.data.message || "Failed to delete user");
      }
    } catch (err) {
      console.error("Error deleting user:", err.response?.data || err.message);
      alert("Error deleting user. Check console for details.");
    }
  };


  return (
    <AdminLayout>
      <h2 className="text-3xl font-bold mb-4">Users</h2>
      <p>Here you can manage all users.</p>

      <div className="mt-6">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Phone</th>
              <th className="border px-4 py-2">Created At</th>
              <th className="border px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td className="border px-4 py-2">{user.name}</td>
                <td className="border px-4 py-2">{user.email}</td>
                <td className="border px-4 py-2">{user.phone}</td>
                <td className="border px-4 py-2">
                  {new Date(user.createdAt).toLocaleDateString()}
                </td>
                <td className="border px-4 py-2 text-center">
                  <button 
                    onClick={handleDelete(user._id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md">

                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
};

export default AllUsers;
