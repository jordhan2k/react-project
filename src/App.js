import styled from 'styled-components';
import SideBar from './components/Common/SideBar';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import routeData from './utils/routeData';
import CustomSnackbar from './components/Common/CustomSnackbar';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { loadUserRequest } from './store/actions/authActions';
import TodoList from './pages/TodoList';
import Dashboard from './pages/Dashboard';
import MaterialUI from './pages/MaterialUI';
import MusicPlayer from './pages/MusicPlayer';
import Auth from './pages/Auth';
import ProtectedRoute from './components/Common/ProtectedRoute';
import Landing from './pages/Landing';


const Contaner = styled.div`
  display: flex;
`;

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUserRequest());
  }, [dispatch]);





  return (
    <Router>
      <Contaner>
        <SideBar />
        <CustomSnackbar />
        {/* <FloatingPlayer /> */}
        <Routes>
          <Route path="/" element={<Landing />} />

          <Route path="/login" element={<Auth authRoute="login" />} />
          <Route path="/register" element={<Auth authRoute="register" />} />

          <Route path="/dashboard" element={<ProtectedRoute component={Dashboard} />} />
          <Route path="/todo-list" element={<ProtectedRoute component={TodoList} />} />
          <Route path="/ui" element={<ProtectedRoute component={MaterialUI} />} />
          <Route path="/music-player" element={<ProtectedRoute component={MusicPlayer} />} />
          <Route path="/chat" />

        </Routes>
      </Contaner>
    </Router >

  );
}

export default App;
