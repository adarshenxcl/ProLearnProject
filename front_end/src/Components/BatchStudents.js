import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

const BatchStudents = () => {
  const [students, setStudents] = useState([]);
  const [batches, setBatches] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [levelFilter, setLevelFilter] = useState('');
  const [ciFilter, setCiFilter] = useState('');
  const [centerFilter, setCenterFilter] = useState('');
  const [prodigyciFilter, setProdigyciFilter] = useState('');
  const [centerbFilter, setCenterbFilter] = useState('');
  const [modeFilterStudents, setModeFilterStudents] = useState('');
  const [modeFilterBatches, setModeFilterBatches] = useState('');
  const [selectedStudents, setSelectedStudents] = useState([]); // Track selected students
  const [selectedBatch, setSelectedBatch] = useState(null); // Track selected batch
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch unassigned students from the API
    fetch('http://localhost:8080/api/unassignedstudents')
      .then(response => response.json())
      .then(data => setStudents(data))
      .catch(error => console.error('Error fetching unassigned students:', error));

    // Fetch batch data from the API
    fetch('http://localhost:8080/batch')
      .then(response => response.json())
      .then(data => {
        setBatches(data);
        console.log('Fetched batches:', data); // Log batches to the console
      })
      .catch(error => console.error('Error fetching batches:', error));
  }, []);

  // Apply filters to students based on filter values
  const filteredStudents = students.filter(student => (
    student.s_name.toLowerCase().includes(nameFilter.toLowerCase()) &&
    student.s_level.toLowerCase().includes(levelFilter.toLowerCase()) &&
    student.s_ci.toLowerCase().includes(ciFilter.toLowerCase()) &&
    student.s_center.toLowerCase().includes(centerFilter.toLowerCase()) &&
    (modeFilterStudents === '' || student.s_mode.toLowerCase() === modeFilterStudents.toLowerCase())
  ));
  const filteredBatch = batches.filter(batch => (
    batch &&
    batch.b_prodigy_ci &&
    batch.center &&
    batch.b_prodigy_ci.toLowerCase().includes(prodigyciFilter.toLowerCase()) &&
    batch.center.toLowerCase().includes(centerbFilter.toLowerCase()) &&
    (modeFilterBatches === '' || batch.b_mode.trim().toLowerCase() === modeFilterBatches.trim().toLowerCase())
  ));

  const goBack = () => {
    navigate(-1);
  };

  // Handle student checkbox change
  const handleStudentCheckboxChange = (studentId) => {
    const updatedSelectedStudents = [...selectedStudents];
    const index = updatedSelectedStudents.indexOf(studentId);

    if (index === -1) {
      updatedSelectedStudents.push(studentId);
    } else {
      updatedSelectedStudents.splice(index, 1);
    }

    setSelectedStudents(updatedSelectedStudents);
  };

  // Handle batch checkbox change
  const handleBatchCheckboxChange = (batch) => {
    setSelectedBatch(batch);
  };

  // Handle "Add to Batch" button click
  const handleAddToBatchClick = () => {
    if (!selectedBatch || selectedStudents.length === 0) {
      setSuccessMessage('');
      console.error('No batch selected or no students selected. Please select a batch and students.');
      setErrorMessage('Please select a batch and at least one student.');
      setTimeout(() => {
        window.location.reload();
      }, 1000);
      return;
    }

    // Create an array of objects with s_id and b_id pairs
    const dataToSend = selectedStudents.map(studentId => ({
      s_id: studentId,
      b_id: selectedBatch.b_id,
    }));

    // Log the data before making the API request
    console.log('Data to be sent to the backend:', dataToSend);

    // Send a request to the backend to add students to the selected batch
    fetch('http://localhost:8080/api/batchstudents/save', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataToSend),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Students added to batch successfully:', data);
        setSuccessMessage('Students added to batch successfully!');
        // You may want to update the UI or show a success message
        // After adding students to the batch, refresh the entire page
        // Wait for 3 seconds before refreshing the page
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      })
      .catch(error => {
        console.error('Error adding students to batch:', error);
        setSuccessMessage('');
        setErrorMessage('Error adding students to batch. Please try again.');
      });
  };

  return (
    <div>
      <Header />
      <div className="container" style={{ marginTop: '102px' }}>
        <Sidebar />
        <div className="mt-4">
          {/* <h1 className="text-center" style={{ paddingTop: '30px' }}>Prodigy Practice Batch Details</h1> */}
          <div>
          <div>
          <h4 style={{marginLeft:'200px',paddingTop:'20px',paddingBottom:'20px'}}>PRODIGY PRACTICE BATCH DETAILS</h4>
              <div className="mb-2" style={{ width: '35%', display: 'flex', height: '35px', marginTop:'50px',marginLeft:'200px',marginBottom:'2px'}}>
                <label>Prodigy CI:</label>
                <input type="text" className="form-control" value={prodigyciFilter} onChange={(e) => setProdigyciFilter(e.target.value)} />
                <label>Center:</label>
                <input type="text" className="form-control" value={centerbFilter} onChange={(e) => setCenterbFilter(e.target.value)} />
                <label>Mode:</label>
                <select className="form-control" value={modeFilterBatches} onChange={(e) => setModeFilterBatches(e.target.value)}>
                  <option value="">All</option>
                  <option value="online">Online</option>
                  <option value="offline">Offline</option>
                  <option value="hybrid">Hybrid</option>
                </select>
              </div>
              <div className="table-wrapper" style={{ width: '90%', height: '250px', overflow: 'auto', margin: '0 auto 0 190px', textAlign: 'center' }}>
              <table className="table table-bordered">
                <thead className="sticky-header">
                    <tr>
                      <th>Select</th>
                      <th>Batch ID</th>
                      <th>Day</th>
                      <th>Time</th>
                      <th>Prodigy CI</th>
                      <th>Mode</th>
                      <th>Center</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredBatch.map(batch => (
                      <tr key={batch.b_id}>
                        <td>
                          <input
                            type="checkbox"
                            onChange={() => handleBatchCheckboxChange(batch)}
                            checked={selectedBatch && selectedBatch.b_id === batch.b_id}
                          />
                        </td>
                        <td>{batch.b_id}</td>
                        <td>{batch.b_day}</td>
                        <td>{batch.b_time}</td>
                        <td>{batch.b_prodigy_ci}</td>
                        <td>{batch.b_mode}</td>
                        <td>{batch.center}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
            <div >
              
              <div className="mb-3" style={{ width: '50%', display: 'flex', height: '30px',marginLeft:'200px',marginTop:'40px'}}>
                <label>Name:</label>
                <input type="text" className="form-control" value={nameFilter} onChange={(e) => setNameFilter(e.target.value)} />
                <label>Level:</label>
                <input type="text" className="form-control" value={levelFilter} onChange={(e) => setLevelFilter(e.target.value)} />
                <label>CI:</label>
                <input type="text" className="form-control" value={ciFilter} onChange={(e) => setCiFilter(e.target.value)} />
                <label>Center:</label>
                <input type="text" className="form-control" value={centerFilter} onChange={(e) => setCenterFilter(e.target.value)} />
                <label>Mode:</label>
                <select className="form-control" value={modeFilterStudents} onChange={(e) => setModeFilterStudents(e.target.value)}>
                  <option value="">All</option>
                  <option value="online">Online</option>
                  <option value="offline">Offline</option>
                  <option value="hybrid">Hybrid</option>
                  
                </select>
              </div>
              <div className="table-wrapper" style={{ width: '90%', height: '300px', overflow: 'auto', margin: '0 auto 0 190px', textAlign: 'center' }}>
              <table className="table table-bordered">
                <thead className="sticky-header">
                                       <tr>
                      <th>Select</th>
                      <th>Student ID</th>
                      <th>Name</th>
                      <th>Level</th>
                      <th>CI</th>
                      <th>Center</th>
                      <th>Mode</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredStudents.map(student => (
                      <tr key={student.s_id}>
                        <td>
                          <input
                            type="checkbox"
                            onChange={() => handleStudentCheckboxChange(student.s_id)}
                            checked={selectedStudents.includes(student.s_id)}
                          />
                        </td>
                        <td>{student.s_id}</td>
                        <td>{student.s_name}</td>
                        <td>{student.s_level}</td>
                        <td>{student.s_ci}</td>
                        <td>{student.s_center}</td>
                        <td>{student.s_mode}</td>
                      </tr>
                    ))}
                  </tbody> 
                </table>
            
          <div className="text-center">
            <button className="btn btn-primary"style={{backgroundColor: '#EF9A3B', border: 'none', color: 'black'}} onClick={handleAddToBatchClick}>Add to Batch</button>
          </div>
          </div>
          </div>
          {/* Success message */}
          {successMessage && <div className="alert alert-success mt-3" style={{ width: 'fit-content', margin: '0 auto', marginTop: '20px' }}>{successMessage}</div>}
          {/* Error message */}
          {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}
          <div className="text-center mt-3">
            {/* <button className="btn btn-secondary" onClick={goBack}>Back</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BatchStudents;

