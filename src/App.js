// import Dashboard from './pages/Dashboard';
import styled from 'styled-components';
import SideBar from './components/SideBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './pages/Profile';
import TodoList from './pages/TodoList';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import Contacts from './pages/Contacts';

const Contaner = styled.div`
  display: flex;
  
  
`;



function App() {
  return (
    <Contaner>
      <Router>
        <SideBar />
        <Routes >
          <Route path="/" element={<Dashboard />} />
          <Route path="/todo-list" element={<TodoList />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/settings" element={<Settings />} />

          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </Contaner>
  );
}

export default App;
