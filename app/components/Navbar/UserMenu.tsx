'use client';

import Image from 'next/image';
import { useCallback, useState } from 'react';
import MenuItem from './MenuItem';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import useLoginModal from '@/app/hooks/useLoginModal';
import { CurrentUser } from '@/app/types';
import { signOut } from 'next-auth/react';

interface UserMenuProps {
  currentUser: CurrentUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();

  const handleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <div className="relative w-8 h-8">
      <Image
        onClick={handleOpen}
        className="rounded-full cursor-pointer hover:shadow-md transition"
        src={currentUser?.image || '/images/placeholder.jpg'}
        alt="avatar"
        fill
      />

      {isOpen && (
        <ul className="absolute top-12 right-0 w-40 z-50 bg-primaryBg border overflow-hidden rounded-lg text-sm shadow-md flex flex-col items-center justify-center">
          {currentUser ? (
            <>
              <MenuItem label="My Profile" onClick={() => {}} />
              <MenuItem label="My Favourites" onClick={() => {}} />
              <hr />
              <MenuItem label="Sign out" onClick={signOut} />
            </>
          ) : (
            <>
              <MenuItem label="Sign in" onClick={registerModal.onOpen} />
              <MenuItem label="Login" onClick={loginModal.onOpen} />
            </>
          )}
        </ul>
      )}
    </div>
  );
};

export default UserMenu;
