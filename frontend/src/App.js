import './App.css';
import React, { useState, useEffect } from 'react';
import * as S from './styles';

const App = () => {
  const [startupAreas, setStartupAreas] = useState([]);
  const [startupLinks, setStartupLinks] = useState([]);
  const [selectedStartupDetails, setSelectedStartupDetails] = useState(null);
  const [selectedArea, setSelectedArea] = useState('');

  useEffect(() => {
    // Fetch available startup areas from the backend
    fetch('http://localhost:8000/startupFields')
      .then(response => response.json())
      .then(data => setStartupAreas(data.startupFields))
      .catch(error => console.error('Error fetching startup areas:', error));
  }, []);

  const handleGenerateIdeas = async () => {
    // Fetch startup ideas based on the chosen area from the backend
    fetch('http://localhost:8000/chooseStartupField', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ area: selectedArea }),
    })
      .then(response => response.json())
      .then(data => setStartupLinks(data.startupOptions))
      .catch(error => console.error('Error fetching startup ideas:', error));
  };

  const handleGetStartupDetails = async (link) => {
    // Fetch details of the selected startup link from the backend
    fetch(`http://localhost:8000/api/getStartupDetails/${link}`)
      .then(response => response.json())
      .then(data => setSelectedStartupDetails(data.startupDetails))
      .catch(error => console.error('Error fetching startup details:', error));
  };

  return (
    <S.Container>
      <S.Sidebar>
        <S.StyledSelect onChange={(e) => setSelectedArea(e.target.value)}>
          <option value="" disabled selected>Select an area</option>
          {startupAreas.map((area, index) => (
            <option key={index} value={area}>{area}</option>
          ))}
        </S.StyledSelect>

        <S.StyledButton onClick={handleGenerateIdeas}>Generate Startup Ideas</S.StyledButton>

        <S.StyledLinks>
          {startupLinks.map((link, index) => (
            <a key={index} href="#" onClick={() => handleGetStartupDetails(link)}>{link}</a>
          ))}
        </S.StyledLinks>
      </S.Sidebar>

      <S.Main>
        {selectedStartupDetails && (
          <S.StartupDetailsContainer>
            <S.StartupDetailsTitle>{selectedStartupDetails.name}</S.StartupDetailsTitle>
            <S.StartupDetailsText>{selectedStartupDetails.description}</S.StartupDetailsText>
            <S.StartupDetailsTitle>Steps:</S.StartupDetailsTitle>
            <ul>
              {selectedStartupDetails.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
            <S.StartupDetailsTitle>Additional Details:</S.StartupDetailsTitle>
            <S.StartupDetailsText>{selectedStartupDetails.additionalDetails}</S.StartupDetailsText>
          </S.StartupDetailsContainer>
        )}
      </S.Main>
    </S.Container>
  );
};

export default App;