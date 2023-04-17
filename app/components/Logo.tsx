'use client';

import { useRouter } from 'next/navigation';
import { Anton } from 'next/font/google';

const anton = Anton({ weight: '400', subsets: ['latin'] });

const Logo = () => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push('/')}
      className={`inline-block ${anton.className} text-3xl lg:text-4xl font-normal text-highlight p-1 cursor-pointer`}
    >
      sneakers.go
    </div>
  );
};

export default Logo;
