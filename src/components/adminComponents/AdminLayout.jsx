import React from "react";
import Sidebar from "./Sidebar";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex justify-items-end">
      <Sidebar />
      <div className="flex-1 p-6 bg-gray-100 min-h-screen mt-30">{children}</div>
    </div>
  );
};

export default AdminLayout;
