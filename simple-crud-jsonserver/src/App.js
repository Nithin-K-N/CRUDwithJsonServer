import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Add from './pages/Add';
import Edit from './pages/Edit';
import Delete from './pages/Delete';

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={ <Home/> }/>
        <Route path="create" element={ <Add/> }/>
        <Route path="update/:id" element={ <Edit/> }/>
        {/* <Route path="delete/:id" element={ <Delete/> }/> */}
      </Routes>
    </Router>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
