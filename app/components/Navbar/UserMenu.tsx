'use client';

import Image from 'next/image';
import { useCallback, useState } from 'react';
import UserMenuListItem from './UserMenuListItem';

function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <div className="flex items-center relative">
      <Image
        onClick={handleOpen}
        className="rounded-full cursor-pointer"
        src="/images/placeholder.jpg"
        alt="avatar"
        width={35}
        height={35}
      />
      {isOpen && (
        <ul className="absolute top-12 right-0 w-40 bg-primaryBg border overflow-hidden rounded-lg text-sm shadow-md flex flex-col items-center justify-center">
          <UserMenuListItem label="Sign in" onClick={() => {}} />
          <UserMenuListItem label="Login" onClick={() => {}} />
        </ul>
      )}
    </div>
  );
}

export default UserMenu;
