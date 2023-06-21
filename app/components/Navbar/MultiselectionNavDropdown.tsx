'use client';

import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Button from '../Button';
import MultiselectionListButton from './MultiselectionListButton';

interface MultiselectionNavDropdown {
  data: {
    [key: string]: {
      image?: string;
      model?: string[];
      name: string;
    }[];
  };
  dataField: string;
  paramName: string;
}

const MultiselectionNavDropdown: React.FC<MultiselectionNavDropdown> = ({
  data,
  dataField,
  paramName,
}) => {
  const [listVisible, setListVisible] = useState(false);
  const params = useSearchParams();
  const categories = params?.get(paramName.toLowerCase());

  return (
    <div className="w-full border-[1px] rounded-lg shadow-md">
      <Button label={paramName} onClick={() => setListVisible(!listVisible)} />
      <ul className={`my-4 mt-8 ${!listVisible && 'hidden'}`}>
        {data[dataField].map((item) => (
          <MultiselectionListButton
            key={item.name}
            label={item.name}
            paramName={paramName.toLowerCase()}
            active={categories?.split(',').includes(item.name)}
          />
        ))}
      </ul>
    </div>
  );
};

export default MultiselectionNavDropdown;
