export const Footer = () => {
  return (
    <footer className="h-11 w-full mt-8 bg-black backdrop-opacity-10 saturate-200 backdrop-blur-sm backdrop-hue-rotate-15 z-20 text-center text-white text-sm">
      <span className="inline-block h-full pt-2">
        made by{' '}
        <a
          className="hover:text-[#FF2700]"
          href="https://www.github.com/interstellaryachtclub"
        >
          {' '}
          @interStellarYachtClub{' '}
        </a>
      </span>
    </footer>
  );
};
