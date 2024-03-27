import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import { FaEye } from 'react-icons/fa'; // Import the Eye icon from Font Awesome
const ViewBatch = () => {
  const [batches, setBatches] = useState([]);
  const navigate = useNavigate();

  const handleViewClick = (batchId, b_prodigy_ci) => {
    // Navigate to another page with batch details and pass b_prodigy_ci as a parameter
    navigate(`/view-batch-details/${batchId}`);
  };

  useEffect(() => {
    const fetchBatches = async () => {
      try {
        const response = await fetch('http://localhost:8080/batch');
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

    fetchBatches();
  }, []);

  return (
    <div>
    <Header />
    <div className="container" style={{marginTop: '102px' }}>
    
      <Sidebar/>
      <h4 style={{marginLeft:'250px',paddingTop:'30px'}} className="mt-4">Prodigy Practice Batch Details</h4>
     
      <div  style={{marginLeft:'1100px',marginBottom:'2px',marginTop:'70px'}}>
          <Link  to="/batch-students" className="btn btn-success " style={{backgroundColor: '#EF9A3B', border: 'none', color: 'black'}}>
            Add Students to Batch
          </Link>
        </div>
      <table style={{marginTop:'15px',marginLeft:'250px',width:'80%',textAlign:'center'}} className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Sl.No</th>
            <th>Day</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Time</th>
            <th>Duration</th>
            <th>Prodigy Ci</th>
            <th>Center</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {batches.map((batch, index) => (
            <tr key={batch.b_id}>
              <td>{index + 1}</td>
              <td>{batch.b_day}</td>
              <td>{batch.b_startdate}</td>
              <td>{batch.b_enddate}</td>
              <td>{batch.b_time}</td>
              <td>{batch.b_duration || 'N/A'}</td>
              <td>{batch.b_prodigy_ci}</td>
              <td>{batch.center}</td>
              <td>
              <button onClick={() => handleViewClick(batch.b_id)} className="btn btn-primary"style={{background:'none',color:'black',border:'none'}}>
                    <FaEye /> {/* Replace "View" text with Eye icon */}
                  </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <div className="row">
        
        <div className="col-6 text-right">
          <button onClick={() => navigate(-1)} className="btn btn-secondary">
            Back
          </button>
        </div>
      </div> */}
    </div>
    </div>
  );
};

export default ViewBatch;
