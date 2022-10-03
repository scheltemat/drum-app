import React from 'react';
import ReactDOM from 'react-dom/client';

import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers/reducer'

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BaseLayout from './components/layout/BaseLayout';
import Exercises from './components/Exercises';
import ExerciseDetails from './components/ExerciseDetails';
import practiceRoom from './components/practiceRoom';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Provider store={store}>
      <Router>
        <BaseLayout>
          <Routes>

            <Route path="/" element={<App />}/>
            <Route path="/exercises" element={<Exercises />}/>
            <Route path="/exercises/:exerciseID" element={<ExerciseDetails />}/>
            <Route path="/practice" element={<practiceRoom />}/>

          </Routes>
        </BaseLayout>
      </Router>
    </Provider>
);

