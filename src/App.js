import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Routes,Navigate } from "react-router-dom";
import ConsumirApi from './componentes/ConsumirApi';

function App() {
  return (
    <>
    <div>TODO List</div>
    <ConsumirApi />
    </>
  );
}

export default App;
