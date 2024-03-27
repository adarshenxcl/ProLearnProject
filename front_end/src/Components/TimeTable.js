import React, { useState, useEffect } from 'react';
import { useLocation,useParams,useNavigate} from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

const TimeTable = () => {
  const [batches, setBatches] = useState([]);
  const location = useLocation();
  const { s_id } = useParams(); // Use useParams to get the s_id from the URL


  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  useEffect(() => {
    // Fetch batches when the component mounts
    fetchBatches(s_id);
  }, [s_id]);

  const fetchBatches = async (s_id) => {
    try {
        console.log(s_id)
      const response = await fetch(`http://localhost:8080/timetable/${s_id}`);
      if (response.ok) {
        const data = await response.json();
        console.log('Received students data:', data);

        setBatches(data);
      } else {
        console.error('Failed to fetch batches:', response.status);
      }
    } catch (error) {
      console.error('Error during batch fetching:', error);
    }
  };

  return (
    <div >
      <Header />
      <Sidebar />
      <div>
      <h4 style={{paddingTop:'100px', width: '300px',height:'100px',paddingLeft:'450px',marginTop:'100px' }} >TimeTable</h4>
      {/* Render batches or display a loading message */}
      {batches.length > 0 ? (
         <table className="table table-bordered"style={{width:'60%',marginLeft:'450px',marginTop:'50px'}}>
         <thead className="sticky-header">
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              
              <th>Batch Id</th>
              <th>Batch Day</th>
              <th>Batch Start Date</th>
              <th>Batch End Date</th>
              <th>Batch Time</th>
              <th>Batch Duration</th>
              <th>Batch Mode</th>
              
              {/* Add more headers based on your Batch entity */}
            </tr>
          </thead>
          <tbody>
            {batches.map((batch, index) => (
              <tr key={batch.b_id} style={{ borderBottom: '1px solid #ddd' }}>
                
                <td>{batch.b_id}</td>
                <td>{batch.b_day}</td>
                <td>{batch.b_startdate}</td>
                <td>{batch.b_enddate}</td>
                <td>{batch.b_time}</td>
                <td>{batch.b_duration}</td>
                <td>{batch.b_mode}</td>
                {/* Add more cells based on your Batch entity */}
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}
      {/* <button className="btn btn-secondary" style={{marginLeft:'1300px',marginTop:'270px'}}onClick={goBack}>Back</button> */}

    </div>
    </div>
  );
};

export default TimeTable;
