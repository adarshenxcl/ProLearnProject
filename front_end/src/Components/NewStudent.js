import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import * as XLSX from 'xlsx';
import './NewStudent.css';
import Sidebar from './Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

const NewStudent = () => {
  const [formData, setFormData] = useState({
    s_id: '',
    s_name: '',
    p_level: '',
    s_level: '',
    s_ci: '',
    s_center: '',
    s_mode: '',
  });
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);
  const [uploadMessage, setUploadMessage] = useState('');
  const [cis, setCIs] = useState([]);
  const [isFileUploadSuccessful, setIsFileUploadSuccessful] = useState(false);
  const navigate = useNavigate();

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const studentData = {
      s_id: formData.s_id,
      s_name: formData.s_name,
      p_level: formData.p_level,
      s_level: formData.s_level,
      s_ci: formData.s_ci,
      s_center: formData.s_center,
      s_mode: formData.s_mode,
    };

    try {
      const response = await fetch('http://localhost:8080/api/createStudent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(studentData),
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
      setUploadMessage('Student added successfully!');

      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevFormData) => ({
      ...prevFormData,
      file,
    }));
  };

  const handleFileUpload = () => {
    const { file } = formData;
    if (file) {
      processFile(file);
    }
  };

  const processFile = (file) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const data = event.target.result;
      const workbook = XLSX.read(data, { type: 'binary' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const fileData = XLSX.utils.sheet_to_json(sheet);
      console.log('File data:', fileData);

      sendFileDataToBackend(fileData);
    };
    reader.readAsBinaryString(file);
  };

  const sendFileDataToBackend = async (fileData) => {
    try {
      const response = await fetch('http://localhost:8080/api/uploadJson', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(fileData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Upload successful:', result);

      setIsFileUploadSuccessful(true);
      setUploadMessage('File data uploaded successfully!');

      setTimeout(() => {
        setIsFileUploadSuccessful(false);
        setUploadMessage('');
      }, 1500);
    } catch (error) {
      console.error('Error uploading file data:', error);
    }
  };

  return (
    <div>
      <Header />
      <Sidebar />
      <div className="container" style={{ marginTop: '100px' }}>
        <div className="row justify-content-center">
          <div className="col-md-8" style={{ marginTop: '40px', marginLeft: '270px' }}>
            <div className="card p-5">
              <span className="mb-2 d-flex align-items-center" style={{ paddingBottom: '20px' }}>
                <FontAwesomeIcon icon={faUserPlus} size="lg" style={{ marginRight: '10px' }} />
                <h4>Add New Student</h4>
              </span>
              <form className="form-horizontal" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-sm-4 col-form-label">Student ID:</label>
                      <div className="col-sm-8">
                        <input
                          type="text"
                          className="form-control"
                          name="s_id"
                          value={formData.s_id}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-sm-4 col-form-label">Student Name:</label>
                      <div className="col-sm-8" style={{ paddingBottom: '20px' }}>
                        <input
                          type="text"
                          className="form-control"
                          name="s_name"
                          value={formData.s_name}
                          onChange={handleInputChange}
                          required
                          style={{ paddingBottom: '10px' }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row" style={{ paddingBottom: '20px' }}>
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-sm-4 col-form-label">Prodigy Level:</label>
                      <div className="col-sm-8">
                        <select
                          className="form-control"
                          name="p_level"
                          value={formData.p_level}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="">Select Level</option>
                          <option value="Level 1">Level 1</option>
                          <option value="Level 2">Level 2</option>
                          <option value="Level 3">Level 3</option>
                          <option value="Level 4">Level 4</option>
                          <option value="              Level 5">Level 5</option>
                          <option value="Level 6">Level 6</option>
                          <option value="Level 7">Level 7</option>
                          <option value="Level 8">Level 8</option>
                          <option value="GM">GM</option>
                          <option value="ALU">ALU</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-sm-4 col-form-label">Current Level:</label>
                      <div className="col-sm-8">
                        <select
                          className="form-control"
                          name="s_level"
                          value={formData.s_level}
                          onChange={handleInputChange}
                          required
                        >
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
                    </div>
                  </div>
                </div>
                <div className="row" style={{ paddingBottom: '20px' }}>
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-sm-4 col-form-label">CI's Name:</label>
                      <div className="col-sm-8">
                        <select
                          className="form-control"
                          name="s_ci"
                          value={formData.s_ci}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="">Select CI's Name</option>
                          {cis.map((ci) => (
                            <option key={ci} value={ci}>{ci}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-sm-4 col-form-label">Center:</label>
                      <div className="col-sm-8">
                        <select
                          className="form-control"
                          name="s_center"
                          value={formData.s_center}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="">Select Center</option>
                          <option value="Haripad">Haripad</option>
                          <option value="Kayamkulam">Kayamkulam</option>
                          <option value="Neyyattinkara">Neyyattinkara</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-sm-4 col-form-label">Mode:</label>
                      <div className="col-sm-8">
                        <select
                          className="form-control"
                          name="s_mode"
                          value={formData.s_mode}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="">Select Mode</option>
                          <option value="Online">Online</option>
                          <option value="Offline">Offline</option>
                          <option value="Hybrid">Hybrid</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6"></div>
                </div>
                <div className="row">
                  <div className="col-md-12 d-flex justify-content-end">
                    <button type="submit" style={{ backgroundColor: '#EF9A3B', marginRight: '20px', width: '90px', borderRadius: '6px', border: 'none' }}>Save</button>
                    <button type="button" className="btn btn-secondary mr-2" onClick={() => setFormData({
                      s_id: '',
                      s_name: '',
                      p_level: '',
                      s_level: '',
                      s_ci: '',
                      s_center: '',
                      s_mode: '',
                    })}>
                      Cancel
                    </button>
                  </div>
                </div>
                {isSubmitSuccessful && (
                  <div style={{ color: 'green' }}>{uploadMessage}</div>
                )}
              </form>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-2">
          <div className="col-md-8" style={{ marginLeft: '270px' }}>
            <div className="card p-3">
              <div className="col mt-3">
                <span className="d-flex align-items-center" style={{ paddingBottom: '10px', paddingLeft: '40px' }}>
                  <FontAwesomeIcon icon={faUserPlus} size="lg" style={{ marginRight: '10px' }} />
                  <h4>Add New Students</h4>
                </span>
                <label htmlFor="file-upload" className="upload-label" style={{ marginRight: '20px', marginLeft: '140px' }}>
                  Attach your excel file
                </label>
                <input
                  type="file"
                  id="file-upload"
                  className="file-upload"
                  accept=".xlsx, .xls"
                  onChange={handleFileChange}
                />
                <button
                  className="mr-2"
                  type="button"
                  onClick={handleFileUpload}
                  style={{ backgroundColor: '#EF9A3B', borderRadius: '8px', width: '90px', height: '40px', border: 'none' }}
                >
                  Upload
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => {
                    document.getElementById('file-upload').value = null; // Reset file input value
                    setFormData((prevFormData) => ({
                      ...prevFormData,
                      file: null,
                    }));
                  }}
                  style={{ marginLeft: '20px' }}
                >
                  Cancel
                </button>
              </div>
              {isFileUploadSuccessful && (
                <div style={{ color: 'green' }}>{uploadMessage}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewStudent;

