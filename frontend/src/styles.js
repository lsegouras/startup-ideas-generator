import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
  }

  .container {
    display: flex;
    width: 100vw;
    height: 100vh;
  }
`;

export const Sidebar = styled.div`
  width: 30%;
  padding: 20px;
  background-color: #f2f2f2;
  height: 100vh;

  h1 {
    color: #333;
  }

  select {
    margin: 10px 0;
    padding: 5px;
    width: 100%;
  }

  button {
    padding: 10px;
    background-color: #3498db;
    color: #fff;
    border: none;
    cursor: pointer;
  }
`;

export const Main = styled.div`
  width: 70%;
  padding: 20px;
  height: 100vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    margin-bottom: 20px;
    padding: 10px;
    background-color: #3498db;
    color: #fff;
    border: none;
    cursor: pointer;
    text-align: center;

  }

  ol {
    list-style: none;
    padding: 0;
    max-height: 100%;
    overflow-y: auto;
  }

  li {
    margin-bottom: 10px;
    white-space: pre-wrap; 
  }
`;

export const Loading = styled.div`
  text-align: center;
  font-size: 20px;
  color: #3498db;
  margin-top: 20px;
  text-align: center;
`;