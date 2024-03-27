import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import Header from './Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEye } from '@fortawesome/free-solid-svg-icons';

const BatchStudentDetails = () => {
  const { batchId } = useParams();
  const location = useLocation();
  const { prodigy_ci } = location.state || {};

  const [studentDetails, setStudentDetails] = useState([]);

  useEffect(() => {
    fetchStudentDetails(batchId);
  }, [batchId]);

  const fetchStudentDetails = async (batchId) => {
    try {
      const response = await fetch(`http://localhost:8080/api/batchstudentdetails/${batchId}`);
      if (response.ok) {
        const data = await response.json();
        setStudentDetails(data);
      } else {
        console.error('Failed to fetch student details:', response.status);
      }
    } catch (error) {
      console.error('Error during student details fetching:', error);
    }
  };

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <Header />
      <div className="container" style={{ marginLeft: '100px' }}>
        <h4 className="mt-3" style={{ paddingTop: '200px', marginLeft: '10px', paddingBottom: '30px' }}>Student Details</h4>

        {studentDetails.length > 0 ? (
          <table className="table table-striped table-bordered" style={{ textAlign: 'center' }}>
            <thead className="thead-dark">
              <tr>
                <th>Sl.No</th>
                <th>Name</th>
                <th>Level</th>
                <th>Center</th>
                <th>Mode</th>
                <th>Add Score</th>
                <th>View Score</th>
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
                    <Link to={`/add-scores/${student.s_id}?name=${student.s_name}&level=${student.s_level}&prodigy_ci=${prodigy_ci}`}>
                      <FontAwesomeIcon icon={faPlus} style={{ color: 'black', marginRight: '10px' }} />
                    </Link>
                  </td>
                  <td>
                    <Link to={{ pathname: `/summary/${student.s_id}/${prodigy_ci}`, state: { error: false } }}>
                      <FontAwesomeIcon icon={faEye} style={{ color: 'black', marginRight: '10px' }} />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No students found for Batch {batchId}</p>
        )}

        <button className="btn btn-secondary" style={{ marginTop: '200px', marginLeft: '1200px' }} onClick={goBack}>Back</button>
      </div>
    </div>
  );
};

export default BatchStudentDetails;
