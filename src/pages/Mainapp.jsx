import { useContext, useReducer } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Header from '../components/Header';
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
              <main className="max-w-sm mx-auto lg:max-w-xl">
                <Signin />
              </main>
            </>
          }
        />
        <Route
          path="/signup"
          element={
            <>
              <main className="max-w-sm mx-auto lg:max-w-xl">
                <Signup />
              </main>
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <main className="max-w-sm mx-auto lg:max-w-xl">
                <About />
              </main>
            </>
          }
        />
        <Route
          path="/collection"
          element={
            <RequireAuth>
              <main className="max-w-sm mx-auto lg:max-w-xl">
                <Collection />
              </main>
            </RequireAuth>
          }
        />
        <Route
          path="/tracks"
          element={
            <RequireAuth>
              <main className="max-w-sm mx-auto lg:max-w-xl">
                <Tracks />
              </main>
            </RequireAuth>
          }
        />
        <Route
          path="/crate/:crateid/edit"
          element={
            <RequireAuth>
              <main className="max-w-sm mx-auto lg:max-w-xl">
                <EditCratelist />
              </main>
            </RequireAuth>
          }
        />
      </Routes>
    </>
  );
};

export default Mainapp;
