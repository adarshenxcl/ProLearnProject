// App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import AdminHome from './Components/AdminHome';
import UserHome from './Components/UserHome';
import NewBatch from './Components/NewBatch';
import ViewBatch from './Components/ViewBatch';
import NewStudent from './Components/NewStudent';
import Viewstudents from './Components/Viewstudents';
import BatchStudents from './Components/BatchStudents'
import BatchStudentDetails from './Components/BatchStudentDetails';
import ViewBatchStudentDetails from './Components/ViewBatchStudentDetails';
import AddScore from './Components/AddScore'
import Summary from './Components/Summary';
import TimeTable from './Components/TimeTable';
import UpdateDetails from './Components/UpdateDetails';
import level from './Components/level';
import SidebarCI from './Components/SidebarCI';
import HomeUser from './Components/HomeUser'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admin-home" element={<AdminHome />} />
          <Route path="/user-home" element={<UserHome />} />
          <Route path="/new-batch-creation" element={<NewBatch />} />
          <Route path="/view-batch" element={<ViewBatch />} />
          <Route path="/new-student" element={<NewStudent />} />
          <Route path="/view-students" element={<Viewstudents />} />
          <Route path="/batch-students" element={<BatchStudents />} />
          <Route path="/batch-details/:batchId" element={<BatchStudentDetails />} />
          <Route path="/view-batch-details/:batchId" element={<ViewBatchStudentDetails />} />
          <Route path="/add-scores/:studentId" element={<AddScore />} />
          <Route path="/summary/:studentId/:prodigyci" element={<Summary />} />
          <Route path="/xcl_student/:s_id" element={<TimeTable />} />
          <Route path="/update-details/:s_id" element={<UpdateDetails />} />
          <Route path="/level" element={<level/>} />
          <Route path="/sidebar-ci" element={<SidebarCI/>} />
          <Route path="/home-user" element={<HomeUser/>} />



        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
