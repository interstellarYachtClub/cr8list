import { Authform } from './components/Authform';

// const firebaseApp = initializeApp(firebaseConfig);
// const auth = getAuth(firebaseApp);
// const googleProvider = new GoogleAuthProvider();

function App() {
  return (
    <div className="App">
      <header className="App-header bg-slate-600">
        <h1>CrateList</h1>
        <div class="italic pb-8">
          Dig <span class="font-light">deeper</span> into your playlists.
        </div>
      </header>
      <main>
        <Authform />
      </main>
    </div>
  );
}

export default App;
