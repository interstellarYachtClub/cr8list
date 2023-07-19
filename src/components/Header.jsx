const Header = () => {
  return (
    <header className="App-header bg-slate-600 w-full">
      <a href="/">
        <h1>CrateList</h1>
      </a>
      <div className="flex items-center italic">Dig into your playlists.</div>
      <div>
        <a href="/about">About</a>
      </div>
      <div>User</div>
    </header>
  );
};

export default Header;
