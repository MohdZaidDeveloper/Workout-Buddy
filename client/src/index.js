import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import WorkoutContext from './Context/WorkoutContext';
import  AuthContext  from './Context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContext>
    <WorkoutContext>
      <App />
    </WorkoutContext>
  </AuthContext>
);

