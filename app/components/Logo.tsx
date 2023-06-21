'use client';

import { useRouter } from 'next/navigation';
import { Righteous } from 'next/font/google';

const righteous = Righteous({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

const Logo = () => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push('/')}
      className={`${righteous.className} inline-block text-xl md:text-xl lg:text-4xl font-bold text-highlight p-1 cursor-pointer`}
    >
      SNEAKERS
    </div>
  );
};

export default Logo;
