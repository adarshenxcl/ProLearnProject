// Summary.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from './Header';
import badge1 from './Images/badge1.avif';
import badge2 from './Images/badge2.avif';
import badge3 from './Images/badge3.avif';
import badge4 from './Images/badge4.avif';
import badge5 from './Images/badge5.jpg';
import './Summary.css';
import Sidebar from './Sidebar';

const Summary = () => {
  const { studentId, prodigyci } = useParams();
  const [studentDetails, setStudentDetails] = useState({});
  const [marks, setMarks] = useState([]);
  const [badge, setBadge] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchStudentDetails(studentId, prodigyci);
  }, [studentId, prodigyci]);

  useEffect(() => {
    setBadge(renderBadge(calculateBestTotalScore(), studentDetails.s_level));
  }, [marks, studentDetails]);

  const fetchStudentDetails = async (id, m_prodigy_ci) => {
    try {
      const response = await fetch(`http://localhost:8080/api/xcl_student/${id}/${m_prodigy_ci}`);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        if (data.length > 0) {
          setStudentDetails(data[0][0]);
          setMarks(data.slice());
        } else {
          setMarks([]);
          alert("No marks added for this student.");
        }
      } else {
        console.error('Failed to fetch student details:', response.status);
      }
    } catch (error) {
      console.error('Error during student details fetching:', error);
    }
  };


  const goBack = () => {
    navigate(-1);
  };

  // Calculate the best scores
  const calculateBestScores = () => {
    if (marks.length === 0) {
      return { bestAbacusScore: 'No Marks Entered', bestVisualScore: 'No Marks Entered', bestMulDivScore: 'No Marks Entered', potentialTotalScore: 'No Marks Entered' };
    }

    const abacusScores = marks.flatMap(roundMarks => roundMarks.map(mark => mark && mark.m_abacusscore)).filter(score => !isNaN(score));
    const visualScores = marks.flatMap(roundMarks => roundMarks.map(mark => mark && mark.m_visualscore)).filter(score => !isNaN(score));
    const mulDivScores = marks.flatMap(roundMarks => roundMarks.map(mark => mark && mark.m_muldivscore)).filter(score => !isNaN(score));

    const bestAbacusScore = abacusScores.length > 0 ? Math.max(...abacusScores) : 'No Scores';
    const bestVisualScore = visualScores.length > 0 ? Math.max(...visualScores) : 'No Scores';
    const bestMulDivScore = mulDivScores.length > 0 ? Math.max(...mulDivScores) : 'No Scores';

    // Calculate Potential Total Score
    const potentialTotalScore = (bestAbacusScore !== 'No Scores' && bestVisualScore !== 'No Scores' && bestMulDivScore !== 'No Scores')
      ? bestAbacusScore + bestVisualScore + bestMulDivScore
      : 'No Scores';

    return { bestAbacusScore, bestVisualScore, bestMulDivScore, potentialTotalScore };
  };

  // Calculate the best total score
  const calculateBestTotalScore = () => {
    if (marks.length === 0) {
      return 'No Marks Entered';
    }

    const totalScores = marks.flatMap(roundMarks => roundMarks.map(mark => mark && mark.m_totalscore)).filter(score => !isNaN(score));
    const bestTotalScore = totalScores.length > 0 ? Math.max(...totalScores) : 'No Scores';
    return bestTotalScore;
  };

  // Function to render badges based on the best total score
  const renderBadge = (bestTotalScore, s_level) => {
    let badgeName = '';
    let badgeImage = '';
    if (s_level === 'ALU') {
      if (bestTotalScore >= 136) {
        badgeName = 'Champion';
        badgeImage = badge1;
      } else if (bestTotalScore >= 81) {
        badgeName = '1st Runner-Up';
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
        badgeName = '-';

      }
    } else if (s_level === 'GM') {
      if (bestTotalScore >= 131) {
        badgeName = 'Champion';
        badgeImage = badge1;
      } else if (bestTotalScore >= 86) {
        badgeName = '1st Runner-Up';
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
        badgeName = '-';

      }
    }
    else if (s_level === 'Level 8') {
      if (bestTotalScore >= 176) {
        badgeName = 'Champion';
        badgeImage = badge1;
      } else if (bestTotalScore >= 141) {
        badgeName = '1st Runner-Up';
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
        badgeName = '-';

      }
    }
    else if (s_level === 'Level 7') {
      if (bestTotalScore >= 211) {
        badgeName = 'Champion';
        badgeImage = badge1;
      } else if (bestTotalScore >= 141) {
        badgeName = '1st Runner-Up';
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
        badgeName = '-';
      }
    }
    else if (s_level === 'Level 6') {
      if (bestTotalScore >= 241) {
        badgeName = 'Champion';
        badgeImage = badge1;
      } else if (bestTotalScore >= 201) {
        badgeName = '1st Runner-Up';
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
        badgeName = '-';
      }
    }
    else if (s_level === 'Level 5') {
      if (bestTotalScore >= 241) {
        badgeName = 'Champion';
        badgeImage = badge1;
      } else if (bestTotalScore >= 201) {
        badgeName = '1st Runner-Up';
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
        badgeName = '-';
      }
    }
    else if (s_level === 'Level 4') {
      if (bestTotalScore >= 221) {
        badgeName = 'Champion';
        badgeImage = badge1;
      } else if (bestTotalScore >= 141) {
        badgeName = '1st Runner-Up';
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
        badgeName = '-';
      }
    }
    else if (s_level === 'Level 3') {
      if (bestTotalScore >= 150) {
        badgeName = 'Champion';
        badgeImage = badge1;
      } else if (bestTotalScore >= 100) {
        badgeName = '1st Runner-Up';
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
        badgeName = '-';
      }
    }
    else if (s_level === 'Level 2') {
      if (bestTotalScore >= 54) {
        badgeName = 'Champion';
        badgeImage = badge1;
      } else if (bestTotalScore >= 45) {
        badgeName = '1st Runner-Up';
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
        badgeName = '-';
      }
    }
    else if (s_level === 'Level 1') {
      if (bestTotalScore >= 45) {
        badgeName = 'Champion';
        badgeImage = badge1;
      } else if (bestTotalScore >= 40) {
        badgeName = '1st Runner-Up';
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
        badgeName = '-';
      }
    }
    else {
      badgeName = '';
    }

    return (
      <div className="badge-container">
        <img style={{ paddingTop: '100px', width: '200px', height: '250px', marginTop: '30px', marginRight:'40px' }} src={badgeImage} alt="Badge" className="badge-image" />
        <div style={{ textAlign: 'center', marginLeft: '-350px' }} className="badge-info">
          <span className="badge-text">{badgeName}</span>
        </div>
      </div>
    );
  };


  const bestScores = calculateBestScores();
  const bestTotalScore = calculateBestTotalScore();

  return (
    <div className="container-fluid" >
      <Header />
      {/* <Sidebar /> */}
      <div className="row" style={{ paddingTop: '40px', paddingLeft: '100px', overflowX: 'hidden' }} >
        <div className="col-md-8">
          {/* Student Details */}
          <div className="student-details" style={{ backgroundColor: 'white', padding: '20px', marginBottom: '20px',width:'140%',marginTop:'20px' }}>
            <h2 style={{ paddingTop: '100px', paddingLeft: '500px', paddingBottom: '40px' }}>Summary</h2>
            {/* Display student details */}
            {studentDetails && Object.keys(studentDetails).length > 0 && (
              <div className='container' style={{ marginLeft: '100px' }} >
                <div className='row' >
                  <div className='col-5'><h5>Name: {studentDetails.s_name}</h5></div>
                  <div className='col-7'><h5>Level: {studentDetails.s_level}</h5></div>
                  <div className='col-5'><h5>Center: {studentDetails.s_center}</h5></div>
                  <div className='col-7'> <h5>Mode: {studentDetails.s_mode}</h5></div>
                  <div className='col-5'>{marks.length > 0 && (
                    <h5>Prodigy CI: {Array.from(new Set(marks.flatMap(roundMarks => roundMarks.map
                      (mark => mark && mark.m_prodigy_ci)))).join(' ')}</h5>
                      )}</div>
                        <div className='col-7'><h5>Number of Exams Attended: {marks.length > 0 ? marks.length : 0}</h5> </div>
                      </div>
                    </div>
                  )}
                </div>
      
                {/* Display Best Scores table */}
                <div className='col-8'>
                  <h3 style={{ paddingTop: '50px', marginBottom: '20px', marginLeft: '240px' }}>Best Scores</h3>
                  {marks.length > 0 ? (
                    <div>
                      <table class="table table-striped " style={{ marginLeft: '100px', width: '550px', height: '200px', textAlign: 'center', paddingTop: '50px' }}>
                        <thead>
                          <tr>
                            <th>Category</th>
                            <th>Best Score</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr >
                            <td>Abacus Score</td>
                            <td>{bestScores.bestAbacusScore}</td>
                          </tr>
                          <tr>
                            <td>Visual Score</td>
                            <td>{bestScores.bestVisualScore}</td>
                          </tr>
                          <tr>
                            <td>Mul/Div Score</td>
                            <td>{bestScores.bestMulDivScore}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
      
                  ) : (
                    <div>
                      <p>No Best Scores Available</p>
                    </div>
                  )}
      
                </div>
                <div className='container'>
                  <div className='column'></div>
                  <div className='col-6' style={{ marginTop: '-115px', paddingBottom: '100px', marginLeft: '750px' }}>
                    <h5>Potential Total Score: {bestScores.potentialTotalScore}</h5>
                    <h5>Best Total Score: {bestTotalScore}</h5>
                  </div>
                </div>
      
                {/* Display marks table for all rounds */}
                <div>
                  <h3 style={{ paddingTop: '30px', marginBottom: '45px', marginLeft: '350px' }}>Prodigy Practice Performance</h3>
                  {marks.length > 0 ? (
                    <div>
                      <table class="table table-striped" style={{ marginLeft: '100px' ,width:'120%', textAlign:'center'}}>
                        <thead>
                          <tr>
                            <th>Round Number</th>
                            <th>Date</th>
                            <th>Abacus Score</th>
                            <th>Visual Score</th>
                            <th>Mul/Div Score</th>
                            <th>Total Score</th>
                          </tr>
                        </thead>
                        <tbody>
                          {marks.map((roundMarks, index) => (
                            roundMarks.map((mark, subIndex) => (
                              <tr key={`${index}-${subIndex}`}>
                                <td>{mark && mark.m_roundnumber}</td> {/* Add conditional check here */}
                                <td>{mark && mark.m_date}</td>
                                <td>{mark && mark.m_abacusscore}</td>
                                <td>{mark && mark.m_visualscore}</td>
                                <td>{mark && mark.m_muldivscore}</td>
                                <td>{mark && mark.m_totalscore}</td>
                              </tr>
                            ))
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div>
                      <p>No Marks Entered</p>
                    </div>
                  )}
                </div>
                <div >
      
      
                  <button className="btn btn-secondary" style={{ marginTop: '30px', marginBottom: '100px' }} onClick={goBack}>Back</button>
      
      
      
                </div>
              </div>
      
              <div className="col-md-4">
                {/* Render badges based on the best total score */}
                {badge}
              </div>
            </div>
          </div>
        );
      };
      
      export default Summary;
      
