'use client';

import { useSearchParams } from 'next/navigation';
import Search from './Search';
import SingleSelectionNavBtn from './SingleSelectionNavBtn';
import { useRouter } from 'next/navigation';
import { AiOutlineClose } from 'react-icons/ai';
import MultiselectionNavDropdown from './MultiselectionNavDropdown';
import Button from '../Button';

export const categoriesDB = {
  man: [
    { name: 'sport' },
    { name: 'business' },
    { name: 'outdoor' },
    { name: 'premium' },
    { name: 'casual' },
  ],
  woman: [
    { name: 'sport' },
    { name: 'business' },
    { name: 'outdoor' },
    { name: 'casual' },
  ],
  all: [
    { name: 'sport' },
    { name: 'business' },
    { name: 'outdoor' },
    { name: 'premium' },
    { name: 'casual' },
  ],
};

export const brandsDB = {
  man: [
    {
      image: '/images/emporio-armani-logo.png',
      model: ['SUPER DELUX'],
      name: 'EA7',
    },
    {
      image: '/images/nike-logo.webp',
      model: ['REPOSTO'],
      name: 'Nike',
    },
    {
      image: '/images/lacoste-logo.jpg',
      model: ['CROCOS', 'CROCOSSSS'],
      name: 'Lacoste',
    },
    {
      image: '/images/salomon-logo.svg',
      model: ['XT-WINGS 2'],
      name: 'Salomon',
    },
    {
      image: '/images/adidas-logo.svg',
      model: ['MULTIX'],
      name: 'adidas',
    },
  ],
  woman: [
    {
      image: '/images/puma-logo.jpg',
      model: ['NUCLEUS'],
      name: 'Puma',
    },
    {
      image: '/images/nike-logo.webp',
      model: ['REPOSTO'],
      name: 'Nike',
    },
    {
      image: '/images/lacoste-logo.jpg',
      model: ['CROCOS', 'CROCOSSSS'],
      name: 'Lacoste',
    },
    {
      image: '/images/salomon-logo.svg',
      model: ['XT-WINGS 2'],
      name: 'Salomon',
    },
    {
      image: '/images/adidas-logo.svg',
      model: ['MULTIX'],
      name: 'adidas',
    },
  ],
  all: [
    {
      image: '/images/emporio-armani-logo.png',
      model: ['SUPER DELUX'],
      name: 'EA7',
    },
    {
      image: '/images/nike-logo.webp',
      model: ['REPOSTO'],
      name: 'Nike',
    },
    {
      image: '/images/lacoste-logo.jpg',
      model: ['CROCOS', 'CROCOSSSS'],
      name: 'Lacoste',
    },
    {
      image: '/images/salomon-logo.svg',
      model: ['XT-WINGS 2'],
      name: 'Salomon',
    },
    {
      image: '/images/adidas-logo.svg',
      model: ['MULTIX'],
      name: 'adidas',
    },
    {
      image: '/images/puma-logo.jpg',
      model: ['NUCLEUS'],
      name: 'Puma',
    },
  ],
};

const MiddleMenu = () => {
  const router = useRouter();
  const params = useSearchParams();
  const sex = params?.get('sex');

  return (
    <>
      {/* main navigation */}
      <div className="flex items-center relative w-full">
        <div className="flex">
          <SingleSelectionNavBtn
            label="Man"
            paramName="sex"
            selected={sex === 'man'}
          />
          <div className="border-r-[2px]" />
          <SingleSelectionNavBtn
            label="Woman"
            paramName="sex"
            selected={sex === 'woman'}
          />
        </div>
        <div className="hidden md:flex max-w-[450px] w-full">
          <Search />
        </div>
      </div>
      {/* filters tabs container */}
      <div
        className={`fixed inset-0 w-full md:absolute md:translate-y-full z-10 bg-primaryBg  ${
          sex ? 'translate-x-0' : 'translate-x-full'
        } transition-all duration-300`}
      >
        {/* mobile devices header*/}
        <>
          <div className="md:hidden relative border-b-[2px] border-b-highlight/40 text-center py-4">
            <h2 className="font-semibold tracking-wide">
              {sex?.charAt(0).toUpperCase()}
              {sex?.slice(1)}
            </h2>
            <button
              onClick={() => router.push('/')}
              className="absolute top-5 right-4"
            >
              <AiOutlineClose />
            </button>
          </div>
        </>

        {/* filters body */}
        {sex && (
          <div className="max-w-contentContainer mx-auto mt-8 md:mt-4 p-2 md:px-8 flex flex-col md:flex-row items-start justify-center space-y-6 md:space-y-0 md:space-x-6">
            <div className="w-full lg:max-w-[350px]">
              <MultiselectionNavDropdown
                data={categoriesDB}
                dataField={sex}
                paramName="Categories"
              />
            </div>
            <div className="w-full lg:max-w-[350px]">
              <MultiselectionNavDropdown
                data={brandsDB}
                dataField={sex}
                paramName="Brands"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MiddleMenu;
