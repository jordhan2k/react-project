// import Dashboard from './pages/Dashboard';
import styled from 'styled-components';
import SideBar from './components/SideBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './pages/Profile';
import TodoList from './pages/TodoList';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import Contacts from './pages/Contacts';
import routeData from './utils/routeData';

const Contaner = styled.div`
  display: flex;
`;

function App() {
  return (

    <Router>
      <Contaner>
        <SideBar />
        <Routes >
          {routeData.map(routeItem => (
            <Route
              path={routeItem.path}
              element={routeItem.component || <Dashboard />} />
          ))
          }
        </Routes>
      </Contaner>
    </Router >

  );
}

export default App;
