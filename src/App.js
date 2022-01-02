import styled from 'styled-components';
import SideBar from './components/Common/SideBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Error from './pages/Error'
import routeData from './utils/routeData';
import FloatingPlayer from './components/Common/FloatingPlayer';
import CustomSnackbar from './components/Common/CustomSnackbar';

const Contaner = styled.div`
  display: flex;
`;

function App() {
  return (
    <Router>
      <Contaner>
        <SideBar />
        <CustomSnackbar />
        {/* <FloatingPlayer /> */}
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
