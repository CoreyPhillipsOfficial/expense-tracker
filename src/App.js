import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/header/index.js'
import Home from "./pages/home";
import AddExpense from './pages/add-expense/index.js';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add-expense' element={<AddExpense />} />
        </Routes>
        <div>Footer</div>
      </div>
    </Router>
  );
}

export default App;
