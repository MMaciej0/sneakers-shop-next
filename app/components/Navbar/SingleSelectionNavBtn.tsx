'use client';

import React, { useCallback } from 'react';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import qs from 'query-string';

interface SingleSelectionNavBtnProps {
  label: string;
  paramName: string;
  selected?: boolean;
}

const SingleSelectionNavBtn: React.FC<SingleSelectionNavBtnProps> = ({
  label,
  paramName,
  selected,
}) => {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    let currentQuery = {};

    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    const updatedQuery: any = {
      ...currentQuery,
      [paramName]: label.toLowerCase(),
    };

    if (params?.get(paramName) === label.toLowerCase()) {
      delete updatedQuery[paramName];
    }

    const url = qs.stringifyUrl(
      {
        url: '/',
        query: updatedQuery,
      },
      { skipNull: true }
    );

    router.push(url);
  }, [router, params, label, paramName]);

  return (
    <div
      onClick={handleClick}
      className={`cursor-pointer p-4 lg:px-8 md:text-xl font-light hover:text-highlight transition ${
        selected && 'text-highlight'
      }`}
    >
      {label}
    </div>
  );
};

export default SingleSelectionNavBtn;
