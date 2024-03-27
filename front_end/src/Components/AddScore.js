import React, { useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import Header from './Header';

const AddScore = () => {
  const { studentId } = useParams();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const location = useLocation();
  const name = new URLSearchParams(location.search).get('name');
  const level = new URLSearchParams(location.search).get('level');
  const prodigy_ci = new URLSearchParams(location.search).get('prodigy_ci');

  const [subjectData, setSubjectData] = useState([]);
  const [date, setDate] = useState('');
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);
  const [uploadMessage, setUploadMessage] = useState('');

  const handleInputChange = (index, field, value) => {
    setSubjectData((prevData) => {
      const newData = [...prevData];
      newData[index] = {
        ...newData[index],
        [field]: value,
      };
      return newData;
    });
  };

  const addSubjectRow = () => {
    setSubjectData((prevData) => [
      ...prevData,
      { Round_Number: '', Abacus: '', AbacusQuestions: '', Visual: '', VisualQuestions: '', Multiplication_Division: '', Multiplication_DivisionQuestions: '', Total: '', Remarks: '' },
    ]);
  };

  const calculateTotal = (subject) => {
    const abacusScore = parseInt(subject.Abacus, 10) || 0;
    const visualScore = parseInt(subject.Visual, 10) || 0;
    const multiplicationDivisionScore = parseInt(subject.Multiplication_Division, 10) || 0;

    return abacusScore + visualScore + multiplicationDivisionScore;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const postData = subjectData.map((subject) => ({
      s_id: studentId,
      m_roundnumber: subject.Round_Number,
      m_abacusscore: subject.Abacus,
      m_visualscore: subject.Visual,
      m_muldivscore: subject.Multiplication_Division,
      m_abacusquestions: subject.AbacusQuestions,
      m_visualquestions: subject.VisualQuestions,
      m_muldivquestions: subject.Multiplication_DivisionQuestions,
      m_totalscore: calculateTotal(subject),
      m_prodigy_ci: prodigy_ci,
      m_remarks: subject.Remarks,
      m_date: date,
    }));

    console.log('Data to be sent:', postData);

    try {
      const response = await fetch('http://localhost:8080/api/submit-scores', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      if (response.ok) {
        console.log('Marks submitted successfully');
        setIsSubmitSuccessful(true);
        setUploadMessage('Marks submitted successfully!');

        setTimeout(() => {
          navigate(-1);
        }, 1000);
      } else {
        console.error('Failed to submit marks:', response.status);
        setIsSubmitSuccessful(false);
        setUploadMessage('Failed to submit marks. Please try again.');
      }
    } catch (error) {
      console.error('Error during marks submission:', error);
      setIsSubmitSuccessful(false);
      setUploadMessage('Error during marks submission. Please try again.');
    }
  };

  const clearData = () => {
    setSubjectData([]);
    setDate('');
    setUploadMessage('');
  };

  return (
    <div>
      <Header />
      <div className="container">
        <h4 className="mt-3" style={{ paddingTop: '150px', paddingBottom: '30px' }}>Add Score</h4>
        <h6>Name: {name}</h6>
        <h6>Level: {level}</h6>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label><h6>Date:</h6></label>
            <input
              type="date"
              value={date}
              style={{ width: '120px', marginBottom: '40px', marginLeft: '10px' }}
              max={new Date().toISOString().split('T')[0]}
              onChange={(e) => {
                setDate(e.target.value);
                setUploadMessage('');
              }}
            />
          </div>

          <table className="table table-bordered" style={{ textAlign: 'center' }}>
            <thead className="thead-dark">
              <tr>
                <th>Round Number</th>
                <th>Abacus</th>
                {/* <th>Questions Attended</th> */}
                <th>Visual</th>
                {/* <th>Questions Attended</th> */}
                <th>Multiplication/Division</th>
                {/* <th>Questions Attended</th> */}
                <th>Total</th>
                <th>Remarks</th>
              </tr>
            </thead>
            <tbody>
              {subjectData.map((subject, index) => (
                <tr key={index}>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      required
                      value={subject.Round_Number}
                      onChange={(e) => handleInputChange(index, 'Round_Number', e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      required
                      value={subject.Abacus}
                      onChange={(e) => handleInputChange(index, 'Abacus', e.target.value)}
                    />
                  </td>
                  {/* <td>
                    <input
                      type="text"
                      className="form-control"
                      required
                      value={subject.AbacusQuestions}
                      onChange={(e) => handleInputChange(index, 'AbacusQuestions', e.target.value)}
                    />
                  </td> */}
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      required
                      value={subject.Visual}
                      onChange={(e) => handleInputChange(index, 'Visual', e.target.value)}
                    />
                  </td>
                  {/* <td>
                    <input
                      type="text"
                      className="form-control"
                      required
                      value={subject.VisualQuestions}
                      onChange={(e) => handleInputChange(index, 'VisualQuestions', e.target.value)}
                    />
                  </td> */}
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      required
                      value={subject.Multiplication_Division}
                      onChange={(e) => handleInputChange(index, 'Multiplication_Division', e.target.value)}
                    />
                  </td>
                  {/* <td>
                    <input
                      type="text"
                      className="form-control"
                      required
                      value={subject.Multiplication_DivisionQuestions}
                      onChange={(e) => handleInputChange(index, 'Multiplication_DivisionQuestions', e.target.value)}
                    />
                  </td> */}
                  <td>
                    {calculateTotal(subject)}
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      value={subject.Remarks}
                      onChange={(e) => handleInputChange(index, 'Remarks', e.target.value)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="btn-group mr-2" style={{ marginTop: '10px' }} role="group">
            <button type="button" className="btn btn-primary" style={{ backgroundColor: '#EF9A3B', borderRadius: '6px', border: 'none', color: 'black', marginRight: '10px' }} onClick={addSubjectRow}>
              Add Rounds
            </button>
            <button style={{ backgroundColor: '#EF9A3B', marginRight: '20px', width: '90px', borderRadius: '6px ', border: 'none', color: 'black' }} type="submit" className="btn btn-success">Save</button>
            <button type="button" className="btn btn-secondary" style={{ borderRadius: '6px' }} onClick={clearData}>Cancel</button>
          </div>

          {uploadMessage && (
            <div className="text-success">{uploadMessage}</div>
          )}
        </form>

      </div>
      <button className="btn btn-secondary" style={{ marginTop: '200px', marginLeft: '1200px' }} onClick={goBack}>Back</button>
    </div>
  );
};

export default AddScore;

