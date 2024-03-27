import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from './Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const WelcomeMessage = ({ name }) => (
  <h2>{`Welcome ${name}`}</h2>
);

const UserHome = () => {
  const [batches, setBatches] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const name = location?.state?.name || '';
  const u_name = location?.state?.u_name || '';

  useEffect(() => {
    // Fetch batches when the component mounts
    fetchBatches(u_name);
  }, [u_name]);

  const fetchBatches = async (u_name) => {
    try {
      const response = await fetch(`http://localhost:8080/api/batches/${u_name}`);
      if (response.ok) {
        const data = await response.json();
        setBatches(data);
      } else {
        console.error('Failed to fetch batches:', response.status);
      }
    } catch (error) {
      console.error('Error during batch fetching:', error);
    }
  };

  const handleViewClick = (batchId) => {
    // Navigate to another page with batch details and provide the batchId and prodigy_ci
    navigate(`/batch-details/${batchId}`, { state: { name, prodigy_ci: name } });
  };

  const handleStatusChange = (batchId, selectedStatus) => {
    // Handle status change for the batch with batchId
    console.log(`Batch ID: ${batchId}, Status: ${selectedStatus}`);
  };

  return (
    <div>
      <Header name={name} />
      <div className="container">
        <h4 className="mt-3 mb-4" style={{ paddingTop: '200px', marginLeft: '10px', paddingBottom: '30px' }}>Prodigy Practices-Batches</h4>
        {batches.length > 0 ? (
          <table className="table table-striped table-bordered" style={{ textAlign: 'center' }}>
            <thead>
              <tr>
                <th>Sl.No</th>
                <th>Batch Id</th>
                <th>Day</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Time</th>
                <th>Duration</th>
                <th>Mode</th>
                <th>View</th>
              </tr>
            </thead>
            <tbody>
              {batches.map((batch, index) => (
                <tr key={batch.b_id}>
                  <td>{index + 1}</td>
                  <td>{batch.b_id}</td>
                  <td>{batch.b_day}</td>
                  <td>{batch.b_startdate}</td>
                  <td>{batch.b_enddate}</td>
                  <td>{batch.b_time}</td>
                  <td>{batch.b_duration || 'N/A'}</td>
                  <td>{batch.b_mode}</td>
                  <td>
                    <FontAwesomeIcon icon={faEye} onClick={() => handleViewClick(batch.b_id)} style={{ cursor: 'pointer' }} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No batches available.</p>
        )}
      </div>
    </div>
  );
};

export default UserHome;
