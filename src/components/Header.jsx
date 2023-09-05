const Header = () => {
  window.addEventListener('scroll', function () {
    const thisheaderdesktop = document.querySelector('.App-header-desktop');
    const thisheadermobile = document.querySelector('.App-header-mobile');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
      thisheaderdesktop.classList.add('not-at-top');
      thisheadermobile.classList.add('not-at-top');
    } else {
      thisheaderdesktop.classList.remove('not-at-top');
      thisheadermobile.classList.remove('not-at-top');
    }
  });

  return (
    <>
      <header className="App-header-desktop hidden w-full drop-shadow-md shadow-white text-white items-center lg:flex lg:flex-row fixed sticky top-0">
        <a href="/">
          <text className="text-black">CrateList</text>
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
      <header className="App-header-mobile lg:hidden w-full drop-shadow-md shadow-white text-white items-center flex flex-row fixed sticky top-0">
        <a href="/">
          <text className="text-black">CrateList</text>
        </a>
        <div className="flex items-center italic px-4">
          Dig into your playlists.
        </div>
      </header>
    </>
  );
};

export default Header;
