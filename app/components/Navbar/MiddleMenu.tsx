'use client';

import { useSearchParams } from 'next/navigation';
import Search from './Search';
import SingleSelectionNavBtn from './SingleSelectionNavBtn';

const MiddleMenu = () => {
  const params = useSearchParams();
  const sex = params?.get('sex');

  return (
    <>
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
      {sex && (
        <div
          className={`absolute bottom-0 left-0 translate-y-full z-50 w-full`}
        >
          fdgfsd
        </div>
      )}
    </>
  );
};

export default MiddleMenu;
