import { Authform } from './components/Authform';

// const firebaseApp = initializeApp(firebaseConfig);
// const auth = getAuth(firebaseApp);
// const googleProvider = new GoogleAuthProvider();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>CrateList</h1>
      </header>
      <main>
        <div>Dig deeper into your music crate.</div>
        <Authform />
      </main>
    </div>
  );
}

export default App;
