import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import Header from './Header';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Magazine from './routes/magazine';
import Philosophy from './routes/philosophy';
import Work from './routes/work';
import Profile from './routes/profile';
import Overview from './routes/overview';
import Flow from './routes/flow';
import Footer from './Footer';
import './css/html5reset-1.6.1.css';
import './css/style.css';


ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="philosophy" element={<Philosophy />} />
        <Route path="work" element={<Work />} />
        <Route path="magazine" element={<Magazine />} />
        <Route path="profile" element={<Profile />} />
        <Route path="overview" element={<Overview />} />
        <Route path="flow" element={<Flow />} />
      </Routes>
    </BrowserRouter>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
