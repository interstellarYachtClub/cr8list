const Header = () => {
  return (
    <header className="App-header w-full drop-shadow-md shadow-white text-white items-center flex flex-row fixed sticky top-0">
      <a href="/">
        <h1>CrateList</h1>
      </a>
      <div className="flex items-center italic px-4">
        Dig into your playlists.
      </div>
      <nav className="flex flex-row space-x-4">
        <a href="/collection">
          <div>Collection</div>
        </a>
        <a href="/tracks">
          <div>Tracks</div>
        </a>
        <a href="#">
          <div>User</div>
        </a>
        <a href="/about">
          <div>About</div>
        </a>
      </nav>
    </header>
  );
};

export default Header;
