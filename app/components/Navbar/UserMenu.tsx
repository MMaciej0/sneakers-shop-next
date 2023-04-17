'use client';

import Image from 'next/image';
import { useCallback, useState } from 'react';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import MenuItem from './MenuItem';

function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const registerModal = useRegisterModal();

  const handleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <div className="flex items-center relative">
      <Image
        onClick={handleOpen}
        className="rounded-full cursor-pointer hover:shadow-md transition"
        src="/images/placeholder.jpg"
        alt="avatar"
        width={35}
        height={35}
      />
      {isOpen && (
        <ul className="absolute top-12 right-0 w-40 bg-primaryBg border overflow-hidden rounded-lg text-sm shadow-md flex flex-col items-center justify-center">
          <MenuItem label="Sign in" onClick={registerModal.onOpen} />
          <MenuItem label="Login" onClick={() => {}} />
        </ul>
      )}
    </div>
  );
}

export default UserMenu;
