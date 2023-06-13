'use client';

import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Container from '../Container';
import Logo from '../Logo';
import MiddleMenu from './MiddleMenu';
import UserMenu from './UserMenu';
import { CurrentUser } from '@/app/types';

interface NavbarProps {
  currentUser: CurrentUser | null;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  return (
    <div className="fixed w-full bg-primaryBg shadow-sm z-10">
      <div className="max-w-contentContainer mx-auto flex justify-between items-center py-2 md:py-4 px-2 sm:px-4 md:px-8">
        <div className="md:mr-6 lg:mr-8">
          <Logo />
        </div>
        <MiddleMenu />
        <div className="flex items-center justify-center space-x-6 md:space-x-10 md:ml-8">
          <div className="relative">
            <span className="bg-highlight text-black rounded-full absolute bottom-4 left-4 px-2 font-bold">
              0
            </span>
            <AiOutlineShoppingCart
              size={30}
              className="hover:text-highlight transition cursor-pointer"
            />
          </div>
          <UserMenu currentUser={currentUser} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
