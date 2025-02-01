import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FlexBoxVsGrid from "./components/FlexBoxVsGrid/FlexBoxVsGrid";
import FlexBox from "./components/FlexBox/FlexBox";
import Grid from './components/Grid/Grid';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FlexBoxVsGrid />} />       
        <Route path="/flexbox" element={<FlexBox />} />
        <Route path="/grid" element={<Grid />} />
      </Routes>
    </Router>
  );
}


export default App;
