import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import BodyProducts from './components/header/BodyProducts';
import Welcome from './components/welcome/Welcome';
import AboutUs from './components/aboutus/AboutUs';
import Products from './components/Products/Products';
import OurClients from './components/ourclients/OurClients';
import FormAgend from './components/form/formAgend';
import Location from './components/location/Location';
import Utilities from './components/util/Utilities';
import Footer from './components/footerPage/Footer';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Welcome />
    <BodyProducts />
    <Products />
    <Location />
    <AboutUs />
    <FormAgend />
    <Utilities />
    <OurClients />
    <Footer />
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
