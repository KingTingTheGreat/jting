import Link from 'next/link';
import internalPages from '@/data/internalPages';

const StringLink = ({ link }: { link: string }) => {
  if (link === 'contact') {
    return (
      <Link
        href={`mailto: jting@bu.edu`}
        className="p-1 md:p-2 text-sm md:text-xl capitalize rounded-md m-0.5 md:my-1.5 md:mx-2 transition flex-1 bg-black border-[2px] md:border-[6px] border-solid border-white text-center hover:border-blue-400 hover:text-blue-100"
      >
        {link}
      </Link>
    );
  }
  return (
    <Link
      href={`#${link.toLowerCase()}`}
      className="p-1 md:p-2 text-sm md:text-xl capitalize rounded-md m-0.5 md:my-1.5 md:mx-2 transition flex-1 bg-black border-[2px] md:border-[6px] border-solid border-white text-center hover:border-blue-400 hover:text-blue-100"
    >
      {link}
    </Link>
  );
};

const NavLinks = () => {
  return (
    <nav className="flex w-[80%] justify-around">
      {Object.entries(internalPages).map(([key]) => (
        <StringLink key={key} link={key} />
      ))}
    </nav>
  );
};

export default NavLinks;
