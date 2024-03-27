import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons';

const ViewBatchStudentDetails = () => {
  const { batchId } = useParams();
  const [studentDetails, setStudentDetails] = useState([]);
  const [removedStudentId, setRemovedStudentId] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/batchstudentdetails/${batchId}`);
        if (response.ok) {
          const data = await response.json();
          setStudentDetails(data);
        } else {
          console.error('Failed to fetch student details:', response.status);
          alert('Failed to fetch student details. Please try again.');
        }
      } catch (error) {
        console.error('Error during student details fetching:', error);
        alert('Error during student details fetching. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [batchId, removedStudentId, refresh]);

  const removeStudent = async (s_id) => {
    try {
      console.log('Removing student with ID:', s_id);

      const response = await fetch(`http://localhost:8080/api/students/remove/${s_id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setRemovedStudentId(s_id);
        console.log('Student removed successfully');
        alert('Student removed successfully');
        setRefresh((prevRefresh) => !prevRefresh);
      } else {
        console.error('Failed to remove student:', response.status);
        alert('Failed to remove student. Please try again.');
      }
    } catch (error) {
      console.error('Error during student removal:', error);
      alert('Error during student removal. Please try again.');
    }
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div>
       <Header />
       <Sidebar / >
    <div className="container">
     
  
      <h4 style={{marginLeft:'200px',paddingTop:'150px',marginBottom:'30px'}}>Student Details</h4>

      {loading ? (
        <p>Loading...</p>
      ) : studentDetails.length > 0 ? (
        <table style={{textAlign:'center',marginTop:'-200px',marginLeft:'200px',width:'80%'}} className="table table-striped table-bordered mt-0">
          <thead>
            <tr>
              <th>Sl.No</th>
              <th>Name</th>
              <th>Level</th>
              <th>Center</th>
              <th>Mode</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {studentDetails.map((student, index) => (
              <tr key={student.s_id}>
                <td>{index + 1}</td>
                <td>{student.s_name}</td>
                <td>{student.s_level}</td>
                <td>{student.s_center}</td>
                <td>{student.s_mode}</td>
                <td>
                  <button onClick={() => removeStudent(student.s_id)} className="btn btn-danger" style={{ border: 'none', color: 'black'}}>
                    <FontAwesomeIcon icon={faExchangeAlt} style={{ marginRight: '5px' }} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No students found for Batch {batchId}</p>
      )}

      {/* <button style={{marginLeft:'1200px',marginTop:'270px',marginBottom:'20px'}} onClick={goBack} className="btn btn-secondary mt-3">Back</button> */}
    </div>
    </div>
  );
};

export default ViewBatchStudentDetails;
