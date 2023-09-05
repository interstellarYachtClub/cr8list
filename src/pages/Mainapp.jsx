import { useContext, useReducer } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Header from '../components/Header';
import { Footer } from '../components/Footer';
import Signin from '../components/Signin';
import Signup from '../components/Signup';
import About from './About';
import Collection from './Collection';
import Tracks from './Tracks';
import EditCratelist from './EditCratelist';
import { AuthContext } from '../context/AuthContext';

const Mainapp = () => {
  const { currentUser } = useContext(AuthContext);

  console.log(currentUser);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/" />;
  };

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <main className="main">
                <Signin />
              </main>
            </>
          }
        />
        <Route
          path="/signup"
          element={
            <>
              <main className="main">
                <Signup />
              </main>
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <main className="main">
                <About />
              </main>
            </>
          }
        />
        <Route
          path="/collection"
          element={
            <RequireAuth>
              <main className="main">
                <Collection />
              </main>
            </RequireAuth>
          }
        />
        <Route
          path="/tracks"
          element={
            <RequireAuth>
              <main className="main">
                <Tracks />
              </main>
            </RequireAuth>
          }
        />
        <Route
          path="/crate/:crateid/edit"
          element={
            <RequireAuth>
              <main className="main">
                <EditCratelist />
              </main>
            </RequireAuth>
          }
        />
      </Routes>
      <Footer />
    </>
  );
};

export default Mainapp;
