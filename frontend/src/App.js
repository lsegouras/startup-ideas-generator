import './App.css';
import React, { useState, useEffect } from 'react';
import { GlobalStyle, Sidebar, Main, Loading } from './styles';

const App = () => {
  const [fields, setFields] = useState([]);
  const [selectedField, setSelectedField] = useState('');
  const [startupIdeas, setStartupIdeas] = useState([]);
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch available fields from the backend
    fetch('http://localhost:8000/startupFields')
      .then(response => response.json())
      .then(data => setFields(data.startupFields))
      .catch(error => console.error('Error fetching startup fields:', error));

    // Reset startupIdeas, selectedField, and message on component mount
    setStartupIdeas([]);
    setSelectedField('');
    setMessage(null);
  }, []);

  const handleGenerateStartup = async () => {
    if (selectedField) {
      setLoading(true);

      const options = {
        method: 'POST',
        body: JSON.stringify({
          message: `Make a list of twenty innovative and disruptive ideas of startup on the ${selectedField} field`,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      };

      try {
        const response = await fetch('http://localhost:8000/startupIdeas', options);
        const data = await response.json();
        setStartupIdeas(data.choices.map(choice => choice.message.content));
        setMessage(data.choices[0].message);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleGenerateNewIdeas = () => {
    setStartupIdeas([]);
    setSelectedField('');
    setMessage(null);
  };

  return (
    <>
      <GlobalStyle />
      <div className="container">
        {/* Sidebar */}
        <Sidebar>
          <h1>StartupWizard</h1>
          <select onChange={(e) => setSelectedField(e.target.value)}>
            <option value="">Select a Field</option>
            {fields.map(field => (
              <option key={field} value={field}>
                {field}
              </option>
            ))}
          </select>
          <button onClick={handleGenerateStartup}>Generate Startup</button>
        </Sidebar>

        {/* Main */}
        <Main>
          {loading && <Loading>Loading...</Loading>}
          {startupIdeas.length > 0 && (
            <>
              <ol>
                {startupIdeas.map((idea, index) => (
                  <li key={index}>{idea}</li>
                ))}
              </ol>
              <button onClick={handleGenerateNewIdeas}>Generate New Startup Ideas</button>
            </>
          )}
        </Main>
      </div>
    </>
  );
};

export default App;