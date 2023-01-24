import React, { useState } from 'react';
import './App.css';
import Page1 from './Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';

function App() {
  const [currentPage, setCurrentPage] = useState('Page1');

  return (
    <div className="App">
      <header>
        <nav>
          <a href="#" onClick={() => setCurrentPage('Page1')}>Page 1</a>
          <a href="#" onClick={() => setCurrentPage('Page2')}>Page 2</a>
          <a href="#" onClick={() => setCurrentPage('Page3')}>Page 3</a>
        </nav>
      </header>
      <div className="content">
        {currentPage === 'Page1' && <Page1 />}
        {currentPage === 'Page2' && <Page2 />}
        {currentPage === 'Page3' && <Page3 />}
      </div>
    </div>
  );
}

export default App;