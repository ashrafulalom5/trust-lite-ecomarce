import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from "./router/Router";
import '../src/asset/css/style.css'
import '../src/asset/css/SideNav.css'
import 'react-toastify/dist/ReactToastify.css';
import {DataProvider} from './components/Context'

function App() {
  return (
      <DataProvider>
      <BrowserRouter>
          <Router />
      </BrowserRouter>
      </DataProvider>
  );
}

export default App;
