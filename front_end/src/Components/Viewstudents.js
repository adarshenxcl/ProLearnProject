import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import badge1 from './Images/badge1.avif';
import badge2 from './Images/badge2.avif';
import badge3 from './Images/badge3.avif';
import badge4 from './Images/badge4.avif';
import badge5 from './Images/badge5.jpg';
import Sidebar from './Sidebar';
import './Viewstudents.css';
import Header from './Header';
import { FaEye, FaClock, FaEdit } from 'react-icons/fa'; // Import icons
import { FaInfoCircle } from 'react-icons/fa'; // Import the icon

const Viewstudents = () => {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const handleSummaryClick = (totalScore, m_prodigy_ci, event) => {
    if (!totalScore) {
      event.preventDefault(); // Prevent the default behavior of the link
      alert('No scores inserted for this student!');
    }
  };

  const handleTimetableClick = (totalScore, m_prodigy_ci, event) => {
    if (!totalScore || !m_prodigy_ci) {
      event.preventDefault(); // Prevent the default behavior of the link
      alert('No Batch Available!');
    }
  };

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch('http://localhost:8080/xcl_student');
        if (response.ok) {
          const data = await response.json();
          setStudents(data);
        } else {
          console.error('Failed to fetch students:', response.status);
        }
      } catch (error) {
        console.error('Error during student fetching:', error);
      }
    };

    fetchStudents();
  }, []);

  const renderBadge = (bestTotalScore, s_level) => {
    let badgeName = '';
    let badgeImage = '';
    if (s_level === 'ALU') {
      if (bestTotalScore >= 136) {
        badgeName = 'Champion';
        badgeImage = badge1;
      } else if (bestTotalScore >= 81) {
        badgeName = '1st Runneer-Up';
        badgeImage = badge2;
      } else if (bestTotalScore >= 61) {
        badgeName = '2nd Runner-Up';
        badgeImage = badge3;
      } else if (bestTotalScore >= 36) {
        badgeName = '3rd Runner-Up';
        badgeImage = badge4;
      } else if (bestTotalScore >= 25) {
        badgeName = 'Best Performer';
        badgeImage = badge1;
      } else {
        badgeName = 'Nil';

      }
    } else if (s_level === 'GM') {
      if (bestTotalScore >= 131) {
        badgeName = 'Champion';
        badgeImage = badge1;
      } else if (bestTotalScore >= 86) {
        badgeName = '1st Runneer-Up';
        badgeImage = badge2;
      } else if (bestTotalScore >= 61) {
        badgeName = '2nd Runner-Up';
        badgeImage = badge3;
      } else if (bestTotalScore >= 36) {
        badgeName = '3rd Runner-Up';
        badgeImage = badge4;
      } else if (bestTotalScore >= 30) {
        badgeName = 'Best Performer';
        badgeImage = badge1;
      } else {


      }
    } else if (s_level === 'Level 8') {
      if (bestTotalScore >= 176) {
        badgeName = 'Champion';
        badgeImage = badge1;
      } else if (bestTotalScore >= 141) {
        badgeName = '1st Runneer-Up';
        badgeImage = badge2;
      } else if (bestTotalScore >= 96) {
        badgeName = '2nd Runner-Up';
        badgeImage = badge3;
      } else if (bestTotalScore >= 76) {
        badgeName = '3rd Runner-Up';
        badgeImage = badge4;
      } else if (bestTotalScore >= 60) {
        badgeName = 'Best Performer';
        badgeImage = badge1;
      } else {


      }
    } else if (s_level === 'Level 7') {
      if (bestTotalScore >= 211) {
        badgeName = 'Champion';
        badgeImage = badge1;
      } else if (bestTotalScore >= 141) {
        badgeName = '1st Runneer-Up';
        badgeImage = badge2;
      } else if (bestTotalScore >= 96) {
        badgeName = '2nd Runner-Up';
        badgeImage = badge3;
      } else if (bestTotalScore >= 76) {
        badgeName = '3rd Runner-Up';
        badgeImage = badge4;
      } else if (bestTotalScore >= 60) {
        badgeName = 'Best Performer';
        badgeImage = badge1;
      } else {

      }
    } else if (s_level === 'Level 6') {
      if (bestTotalScore >= 241) {
        badgeName = 'Champion';
        badgeImage = badge1;
      } else if (bestTotalScore >= 201) {
        badgeName = '1st Runneer-Up';
        badgeImage = badge2;
      } else if (bestTotalScore >= 141) {
        badgeName = '2nd Runner-Up';
        badgeImage = badge3;
      } else if (bestTotalScore >= 101) {
        badgeName = '3rd Runner-Up';
        badgeImage = badge4;
      } else if (bestTotalScore >= 70) {
        badgeName = 'Best Performer';
        badgeImage = badge1;
      } else {


      }
    } else if (s_level === 'Level 5') {
      if (bestTotalScore >= 241) {
        badgeName = 'Champion';
        badgeImage = badge1;
      } else if (bestTotalScore >= 201) {
        badgeName = '1st Runneer-Up';
        badgeImage = badge2;
      } else if (bestTotalScore >= 141) {
        badgeName = '2nd Runner-Up';
        badgeImage = badge3;
      } else if (bestTotalScore >= 101) {
        badgeName = '3rd Runner-Up';
        badgeImage = badge4;
      } else if (bestTotalScore >= 70) {
        badgeName = 'Best Performer';
        badgeImage = badge1;
      } else {


      }
    } else if (s_level === 'Level 4') {
      if (bestTotalScore >= 221) {
        badgeName = 'Champion';
        badgeImage =badge1;
      } else if (bestTotalScore >= 141) {
        badgeName = '1st Runneer-Up';
        badgeImage = badge2;
      } else if (bestTotalScore >= 101) {
        badgeName = '2nd Runner-Up';
        badgeImage = badge3;
      } else if (bestTotalScore >= 81) {
        badgeName = '3rd Runner-Up';
        badgeImage = badge4;
      } else if (bestTotalScore >= 60) {
        badgeName = 'Best Performer';
        badgeImage = badge1;
      } else {


      }
    } else if (s_level === 'Level 3') {
      if (bestTotalScore >= 150) {
        badgeName = 'Champion';
        badgeImage = badge1;
      } else if (bestTotalScore >= 100) {
        badgeName = '1st Runneer-Up';
        badgeImage = badge2;
      } else if (bestTotalScore >= 71) {
        badgeName = '2nd Runner-Up';
        badgeImage = badge3;
      } else if (bestTotalScore >= 51) {
        badgeName = '3rd Runner-Up';
        badgeImage = badge4;
      } else if (bestTotalScore >= 35) {
        badgeName = 'Best Performer';
        badgeImage = badge1;
      } else {


      }
    } else if (s_level === 'Level 2') {
      if (bestTotalScore >= 54) {
        badgeName = 'Champion';
        badgeImage = badge1;
      } else if (bestTotalScore >= 45) {
        badgeName = '1st Runneer-Up';
        badgeImage = badge2;
      } else if (bestTotalScore >= 40) {
        badgeName = '2nd Runner-Up';
        badgeImage = badge3;
      } else if (bestTotalScore >= 30) {
        badgeName = '3rd Runner-Up';
        badgeImage = badge4;
      } else if (bestTotalScore >= 20) {
        badgeName = 'Best Performer';
        badgeImage = badge1;
      } else {


      }
    } else if (s_level === 'Level 1') {
      if (bestTotalScore >= 45) {
        badgeName = 'Champion';
        badgeImage = badge1;
      } else if (bestTotalScore >= 40) {
        badgeName = '1st Runneer-Up';
        badgeImage = badge2;
      } else if (bestTotalScore >= 35) {
        badgeName = '2nd Runner-Up';
        badgeImage = badge3;
      } else if (bestTotalScore >= 30) {
        badgeName = '3rd Runner-Up';
        badgeImage = badge4;
      } else if (bestTotalScore >= 20) {
        badgeName = 'Best Performer';
        badgeImage = badge1;
      } else {


      }
    }
    return { badgeName: badgeName, imageUrl: badgeImage };
  };

  // Filter students based on search term
  const filteredStudents = students.filter(student => {
    return student[1].toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="container-fluid-2" style={{ marginTop: '102px', position: 'fixed' }}>
      <Header />
      <Sidebar />
      <div style={{ marginLeft: '90px' }}>
        <h4 style={{ paddingTop: '40px', marginRight: '550px' }} className="text-center">
          <FaInfoCircle title="Student Details" /> Students Details
        </h4>
        <div className="row mb-3">
          <div className="col-lg-10 offset-lg-2 text-lg-left">
            <Link to="/new-student" className="btn btn-primary" style={{ width: '190px', marginLeft: '1000px', marginTop: '20px', backgroundColor: '#EF9A3B', border: 'none', color: 'black' }}>
              Add Students
            </Link>
          </div>
        </div>
      </div>
      <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ marginLeft: '300px', marginBottom: '20px' }}
        />
      <div className="table-wrapper" style={{ width: '94%', height: '400px', overflow: 'auto', margin: '0 auto 0 300px', textAlign: 'center' }}>
        
        <table className="table table-bordered">
        <thead className="sticky-header">
  <tr>
    <th className="table-header">Sl.No</th>
    <th className="table-header">Name</th>
    <th className="table-header">Level</th>
    <th className="table-header">Course Instructor</th>
    <th className="table-header">Center</th>
    <th className="table-header">Mode</th>
    <th className="table-header">Prodigy CI</th>
    <th className="table-header">Best Total</th>
    <th className="table-header">Badge</th>
    <th className="table-header">Actions</th>
  </tr>
</thead>


          <tbody>
            {filteredStudents.map((studentArray, index) => {
              const { badgeName, imageUrl } = renderBadge(studentArray[7], studentArray[2]);
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{studentArray[1]}</td>
                  <td>{studentArray[2]}</td>
                  <td>{studentArray[3]}</td>
                  <td>{studentArray[4]}</td>
                  <td>{studentArray[5]}</td>
                  <td>{studentArray[6]}</td>
                  <td>{studentArray[7]}</td>
                  <td>
                    <img src={imageUrl} alt={badgeName} style={{ width: '30px' }} />
                    <div>{badgeName}</div>
                  </td>
                  <td>
                    <div>
                      <Link
                        to={`/summary/${studentArray[0]}/${studentArray[6]}`}
                        onClick={(event) => handleSummaryClick(studentArray[7], studentArray[6], event)}
                        className="action-icon"
                        style={{ marginRight: '10px', color: 'black' }}
                      >
                        <FaEye title="Summary" />
                      </Link>
                      <Link
                        to={`/xcl_student/${studentArray[0]}`}
                        onClick={(event) => handleTimetableClick(studentArray[7], studentArray[6], event)}
                        className="action-icon"
                        style={{ marginRight: '10px', color: 'black' }}
                      >
                        <FaClock title="Time Table" />
                      </Link>
                      <Link
                        to={`/update-details/${studentArray[0]}`}
                        className="action-icon"
                        style={{ color: 'black' }}
                        >
                        <FaEdit title="Update Details" />
                      </Link>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Viewstudents;

