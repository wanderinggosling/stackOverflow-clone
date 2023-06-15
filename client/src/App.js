import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import AllRoutes from './AllRoutes';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllQuestions } from './actions/question';
import { getAllUsers } from './actions/users';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllQuestions());
    dispatch(getAllUsers());
  }, [dispatch])

  return (
    <div className="App">
      <Router>
        <Navbar />
        <AllRoutes />
      </Router>

    </div>
  );
}

export default App;
