import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contato from './pages/Contato';
import Company from './pages/Company';
import Project from './pages/Project';

function App() {
  return (
    <Router>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/contato'>Contato</Link>
        <Link to='/company'>Company</Link>
        <Link to='/project'>Project</Link>
      </div>

      <div >Exemplo</div>

      <Routes>
        <Route exact path='/' element={<Home/>}>
        </Route>

        <Route exact path='/contato' element={<Contato/>}>
        </Route>

        <Route exact path='/company' element={<Company/>}>
        </Route>

        <Route exact path='/project'element={<Project/>}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
