import Link from 'next/link';
import NavLinks from './navLinks';
import AdditionalInfo from './additionalInfo';

export const Header = () => {
  return (
    <header className="flex flex-col p-2 md:p-0 items-center w-full bg-[#111]">
      <div className="flex w-full justify-between">
        <div className="flex-1 hidden md:block"></div>
        <Link
          href="/"
          className="flex-1 text-center md:text-8xl text-6xl spb-2 pt-1 mb-4 mt-2"
        >
          <h1>Jeffrey Ting</h1>
        </Link>
        <AdditionalInfo />
      </div>
      <NavLinks />
    </header>
  );
};
