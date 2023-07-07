import { Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import Signin from '../components/Signin';
import Collection from './Collection';

const Mainapp = () => {
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
            <>
              <main className="max-w-sm mx-auto">
                <Collection />
              </main>
            </>
          }
        />
      </Routes>
    </>
  );
};

export default Mainapp;
