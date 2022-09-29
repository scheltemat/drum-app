import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BaseLayout from './components/layout/BaseLayout';
import Exercises from './components/Exercises';
import PracticeSchedule from './components/PracticeSchedule';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <Router>
      <BaseLayout>
        <Routes>

          <Route path="/" element={<App />}/>
          <Route path="/exercises" element={<Exercises />}/>
          <Route path="/practiceSchedule" element={<PracticeSchedule />}/>

        </Routes>
      </BaseLayout>
    </Router>
  </React.StrictMode>
);

