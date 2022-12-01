import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import ConsumirApi from './componentes/ConsumirApi';
import Informacion from './componentes/Informacion';

function App() {
  return (
    <>
      {/* <div>TODO List</div>
    <ConsumirApi /> */}
      <div>TODO List</div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ConsumirApi />}>

          </Route>
          <Route path="*" element={<Informacion/>} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
