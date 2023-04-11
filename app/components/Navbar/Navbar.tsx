'use client';

import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Container from '../Container';
import Logo from '../Logo';
import MiddleMenu from './MiddleMenu';

import UserMenu from './UserMenu';

const Navbar = () => {
  return (
    <div className="fixed w-full bg-primaryBg shadow-sm z-10">
      <Container>
        <div className="max-w-contentContainer mx-auto flex justify-between items-center py-2 md:py-4">
          <div className="md:mr-6 lg:mr-8">
            <Logo />
          </div>
          <div className="hidden md:flex items-center justify-center flex-1">
            <MiddleMenu />
          </div>
          <div className="flex items-center space-x-8 lg:space-x-12 ml-4">
            <div className="relative">
              <span className="bg-highlight text-black rounded-full absolute bottom-4 left-4 px-2 font-bold">
                0
              </span>
              <AiOutlineShoppingCart
                size={30}
                className="hover:text-highlight transition cursor-pointer"
              />
            </div>
            <UserMenu />
            {/* mobile menu */}
            <div className="md:hidden">
              <AiOutlineMenu size={20} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
