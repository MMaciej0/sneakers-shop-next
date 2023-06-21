'use client';

import React, { useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
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
    let currentQuery = qs.parse(params.toString());

    if (currentQuery[paramName] === label.toLowerCase()) {
      return router.push('/');
    } else {
      let updatedQuery = {
        [paramName]: label.toLowerCase(),
      };
      const url = qs.stringifyUrl(
        {
          url: '/',
          query: updatedQuery,
        },
        { skipNull: true }
      );

      router.push(url);
    }
  }, [router, label, paramName, params]);

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
