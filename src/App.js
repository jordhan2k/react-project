// import Dashboard from './pages/Dashboard';
import styled from 'styled-components';
import SideBar from './components/Common/SideBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Error from './pages/Error'
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
            <Route key={routeItem.id}
              path={routeItem.path}
              element={routeItem.component || <Error />} />
          ))
          }
        </Routes>
      </Contaner>
    </Router >

  );
}

export default App;
