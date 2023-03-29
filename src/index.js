import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import  {HashRouter}  from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter basename="/hkhan054">
    <App />
    <Routes>
                <Route index path="/hkhan054" element={<HomePage />} />
                <Route index path="/hkhan054/Contact" element={<Contact />} />
                <Route index path="/hkhan054/About" element={<About />} />
                <Route index path="/hkhan054/Projects" element={<Projects/>} />
                <Route index path="/KnowledgeHome" element={<ProjectLinks/>} />
            </Routes>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
