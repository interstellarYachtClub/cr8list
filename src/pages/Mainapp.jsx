import { useContext, useReducer } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Header from '../components/Header';
import Signin from '../components/Signin';
import Collection from './Collection';
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
              <main className="max-w-sm mx-auto">
                <Signin />
              </main>
            </>
          }
        />
        <Route
          path="/collection"
          element={
            <RequireAuth>
              <main className="max-w-sm mx-auto">
                <Collection />
              </main>
            </RequireAuth>
          }
        />
      </Routes>
    </>
  );
};

export default Mainapp;
