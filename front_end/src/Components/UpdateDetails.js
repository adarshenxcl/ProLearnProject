import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

const UpdateStudent = () => {
  const { s_id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState({
    s_name: '',
    s_level: '',
    s_ci: '',
    s_center: '',
    s_mode: '',
  });
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [cis, setCIs] = useState([]);

  useEffect(() => {
    const fetchStudentDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/updatedetails/student/${s_id}`);
        if (response.ok) {
          const data = await response.json();
          setStudent(data[0]);
        } else {
          console.error('Failed to fetch student details:', response.status);
          // Handle error
        }
      } catch (error) {
        console.error('Error during student details fetching:', error);
        // Handle error
      }
    };

    fetchStudentDetails();
  }, [s_id]);

  useEffect(() => {
    const fetchCIs = async () => {
      try {
        const ciResponse = await fetch('http://localhost:8080/api/users/name');

        if (ciResponse.ok) {
          const ciData = await ciResponse.json();
          setCIs(ciData);
        } else {
          console.error('Failed to fetch CI names');
        }
      } catch (error) {
        console.error('Error fetching CI names:', error);
      }
    };

    fetchCIs();
  }, []);

  const goBack = () => {
    navigate(-1);
  };

  const handleUpdate = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/updatedetails/update/${s_id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(student),
      });

      if (response.ok) {
        console.log('Student updated successfully');
        setUpdateSuccess(true);
        setTimeout(() => {
          navigate(`/view-students`);
        }, 1000);
      } else {
        console.error('Failed to update student:', response.status);
        // Handle error
      }
    } catch (error) {
      console.error('Error during student update:', error);
      // Handle error
    }
  };

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div style={{  minHeight: '100vh', paddingTop: '100px' }}>
      <Header />
      <Sidebar />
      <div className="container">
        <h4 style={{ marginBottom: '20px' ,marginTop:'80px',marginLeft:'450px'}}>Update Student</h4>
        <form className="form-horizontal" style={{marginLeft:'700px', maxWidth: '600px', margin: '0 auto', background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <div className="form-group">
            <label>Name:</label>
            <input type="text" className="form-control" name="s_name" value={student.s_name} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Level:</label>
            <select className="form-control" name="s_level" value={student.s_level} onChange={handleChange}>
              <option value="">Select Level</option>
              <option value="Level 1">Level 1</option>
              <option value="Level 2">Level 2</option>
              <option value="Level 3">Level 3</option>
              <option value="Level 4">Level 4</option>
              <option value="Level 5">Level 5</option>
              <option value="Level 6">Level 6</option>
              <option value="Level 7">Level 7</option>
              <option value="Level 8">Level 8</option>
              <option value="GM">GM</option>
              <option value="ALU">ALU</option>
            </select>
          </div>
          <div className="form-group">
            <label>Center Instructor:</label>
            <select className="form-control" name="s_ci" value={student.s_ci} onChange={handleChange}>
              <option value="">Select CI's Name</option>
              {cis.map((ci) => (
                <option key={ci} value={ci}>{ci}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Center:</label>
            <select className="form-control" name="s_center" value={student.s_center} onChange={handleChange}>
              <option value="">Select Center</option>
              <option value="Haripad">Haripad</option>
              <option value="Kayamkulam">Kayamkulam</option>
              <option value="Neyyattinkara">Neyyattinkara</option>
            </select>
          </div>
          <div className="form-group">
            <label>Mode:</label>
            <select className="form-control" name="s_mode" value={student.s_mode} onChange={handleChange}>
              <option value="">Select Mode</option>
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>
          <button type="button"style={{backgroundColor: '#EF9A3B', border: 'none', color: 'black' ,marginTop:'20px'}} className="btn btn-primary" onClick={handleUpdate}>Save</button><br />
          {updateSuccess && <p style={{ color: 'green', textAlign: 'center', marginTop: '10px' }}>Student updated successfully!</p>}
          {/* <button type="button" className="btn btn-secondary" style={{ marginLeft: '1200px' }} onClick={goBack}>Back</button> */}
        </form>
      </div>
    </div>
  );
};

export default UpdateStudent;
