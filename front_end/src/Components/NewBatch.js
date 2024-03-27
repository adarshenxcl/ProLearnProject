import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons'; // Import the desired FontAwesome icon


const NewBatch = () => {
  const [ciList, setCiList] = useState([]);
  const [formData, setFormData] = useState({
    b_prodigy_ci: '',
    b_day: '',
    b_startdate: '',
    b_enddate: '',
    b_time: '',
    b_duration: '',
    center: '',
    b_mode: '',
  });
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCiList = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/users/name');
        if (response.ok) {
          const data = await response.json();
          setCiList(data.map(item => item));
        } else {
          console.error('Failed to fetch CI names:', response.status);
        }
      } catch (error) {
        console.error('Error fetching CI names:', error);
      }
    };

    fetchCiList();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/api/createBatch', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        const responseData = await response.json();
        console.log('Server response:', responseData);
      } else {
        console.log('Server response is not JSON');
      }

      setIsSubmitSuccessful(true);

      setTimeout(() => {
        setFormData({
          b_prodigy_ci: '',
          b_day: '',
          b_startdate: '',
          b_enddate: '',
          b_time: '',
          b_duration: '',
          center: '',
          b_mode: '',
        });
        setIsSubmitSuccessful(false);
      }, 1000);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <Header />
      <Sidebar />
      
      <div className='main' style={{ marginTop: '102px' }}>
        {/* <h5 className="text-center mt-3" style={{ paddingTop: '40px', paddingBottom: '20px' ,marginLeft:'-300px'}}> <FontAwesomeIcon icon={faBook} style={{ marginRight: '10px' }} />Prodigy Practice Batches</h5> */}
        <div className="container" style={{ maxWidth: '800px',marginLeft:'500px' }}>
        <div style={{marginLeft:'580px',marginBottom:'10px'}}>
        <Link to="/view-batch" className="btn btn-primary" style={{ marginTop:'60px',backgroundColor: '#EF9A3B', border: 'none', color: 'black' }}>View Existing Batches</Link>
      </div>
          <div className="card p-5">
          
            <form onSubmit={handleSubmit} className="form-horizontal">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="b_prodigy_ci" className="form-label">Prodigy CI:</label>
                  <select
                    id="b_prodigy_ci"
                    className="form-select"
                    name="b_prodigy_ci"
                    value={formData.b_prodigy_ci}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Prodigy CI</option>
                    {ciList.map((ciName, index) => (
                      <option key={index} value={ciName}>{ciName}</option>
                    ))}
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="b_day" className="form-label">Day:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="b_day"
                    name="b_day"
                    value={formData.b_day}
                    required
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="b_startdate" className="form-label">Start Date:</label>
                  <input
                    type="date"
                    className="form-control"
                    id="b_startdate"
                    name="b_startdate"
                    value={formData.b_startdate}
                    required
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="b_enddate" className="form-label">End Date:</label>
                  <input
                    type="date"
                    className="form-control"
                    id="b_enddate"
                    name="b_enddate"
                    value={formData.b_enddate}
                    required
                    onChange={handleChange}
                    min={formData.b_startdate}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="b_time" className="form-label">Time:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="b_time"
                    name="b_time"
                    value                    ={formData.b_time}
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="b_duration" className="form-label">Duration (in hours):</label>
                  <input
                    type="text"
                    className="form-control"
                    id="b_duration"
                    name="b_duration"
                    value={formData.b_duration}
                    required
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="center" className="form-label">Center:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="center"
                    name="center"
                    value={formData.center}
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="b_mode" className="form-label">Mode:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="b_mode"
                    name="b_mode"
                    value={formData.b_mode}
                    required
                    onChange={handleChange}
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-primary"style={{backgroundColor: '#EF9A3B', border: 'none', color: 'black'}}>Create Batch</button>
            </form>

            {isSubmitSuccessful && (
              <div className="alert alert-success mt-3">Batch added successfully!</div>
            )}
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default NewBatch;

