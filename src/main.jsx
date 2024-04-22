import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header/Header.jsx'
import '../src/styles/globalsStyles.css';
import Home from './containers/Home/Home.jsx';
import Projects from './containers/Projects/Projects.jsx';
import Contacts from './containers/Contacts/Contacts.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Home />
    <Projects  />
    <Contacts />
  </React.StrictMode>,
)
