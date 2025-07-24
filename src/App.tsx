import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/dashboard/index';
import Edit from './pages/edit/index';
import Add from './pages/add/index';
import Preview from './pages/preview/index';
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/edit/:id" element={<Edit/>}/>
          <Route path="/add" element={<Add/>}/>
          <Route path="/preview" element={<Preview/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
