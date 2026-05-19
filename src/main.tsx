import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './AppRouter'

import ReactGA from "react-ga4"; 
ReactGA.initialize("G-93HV9CSHN2");
ReactGA.send({ hitType: "pageview", page: window.location.pathname });

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
);