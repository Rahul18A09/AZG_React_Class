// import React from 'react'
// import { Routes, Route, Navigate} from 'react-router-dom'
// import ProtectedRoute from './ProtectedRoute'
// import AdminLayout from '../admin/layout/AdminLayout'
// import Dashboard from '../admin/pages/Dashboard'
// import Doctors from '../admin/pages/Doctors'
// import Appointments from '../admin/pages/Appointments'

// const AdminRoutes = () => {
//   return (
   
//    <Routes>
//     <Route index element={<Navigate to="dashboard" replace/>}/>
//     <Route path='dashboard' element={<ProtectedRoute><AdminLayout><Dashboard/></AdminLayout></ProtectedRoute>}/>
//     <Route path='doctors' element={<ProtectedRoute><AdminLayout><Doctors/></AdminLayout></ProtectedRoute>}/>
//     <Route path='appointments' element={<ProtectedRoute><Appointments/></ProtectedRoute>}/>
//    </Routes>
//   )
// }

// export default AdminRoutes


import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import AdminLayout from "../admin/layout/AdminLayout";
import Dashboard from "../admin/pages/Dashboard";
import Doctors from "../admin/pages/Doctors";
import Appointments from "../admin/pages/Appointments";

const AdminRoutes = () => {
  return (
    <Routes>
      {/* default /admin */}
      <Route index element={<Navigate to="dashboard" replace />} />

      <Route
        path="dashboard"
        element={
          <ProtectedRoute>
            <AdminLayout>
              <Dashboard />
            </AdminLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="doctors"
        element={
          <ProtectedRoute>
            <AdminLayout>
              <Doctors />
            </AdminLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="appointments"
        element={
          <ProtectedRoute>
            <AdminLayout>
              <Appointments />
            </AdminLayout>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AdminRoutes;

