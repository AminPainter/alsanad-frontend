import { createFileRoute, Link } from '@tanstack/react-router';
import type { FC } from 'react';
import { PiHouse } from 'react-icons/pi';
import { Avatar, AvatarFallback, AvatarImage } from '@alsanad/ui/avatar';

const HomePage: FC = () => {
  return (
    <div className='grid grid-cols-[4rem_1fr] h-dvh'>
      <nav className='bg-gray-100 flex flex-col'>
        <Link to='/'>
          <figure className='p-2 flex items-center justify-center'>logo</figure>
        </Link>

        <ul className='mt-6 mb-auto'>
          {Array.from({ length: 5 }, (_, idx) => (
            <li
              key={idx}
              className='flex items-center justify-center h-16 hover:bg-gray-200 transition-colors'>
              <Link to='/'>
                <PiHouse className='size-6' />
              </Link>
            </li>
          ))}
        </ul>

        <div className='p-2'>
          <Avatar>
            <AvatarImage src='https://github.com/shadcn.png' />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </nav>

      <main>main content goes here</main>
    </div>
  );
};

export const Route = createFileRoute('/(app)/')({
  component: HomePage,
});
