import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './views/Dashboard';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
