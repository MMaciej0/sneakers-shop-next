'use client';

import { useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import qs from 'query-string';

type MultiselectionListButtonProps = {
  label: string;
  onClick?: () => void;
  active?: boolean;
  paramName: string;
};

const MultiselectionListButton: React.FC<MultiselectionListButtonProps> = ({
  label,
  paramName,
  onClick,
  active,
}) => {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    let currentQuery: any = {};
    let updatedQuery: any = {};

    if (params) {
      currentQuery = qs.parse(params.toString(), { arrayFormat: 'comma' });

      //   const arrQuery = currentQuery[paramName]
      //     ? Array.isArray(currentQuery[paramName])
      //       ? [...currentQuery[paramName]]
      //       : [currentQuery[paramName]]
      //     : [];

      //   const newQuery = arrQuery.includes(label)
      //     ? arrQuery.filter((item) => item !== label)
      //     : [...arrQuery, label];

      updatedQuery = {
        ...currentQuery,
        [paramName]: label,
      };
    }

    const url = qs.stringifyUrl(
      {
        url: '/',
        query: updatedQuery,
      },
      { skipNull: true, arrayFormat: 'comma' }
    );

    router.push(url);
    if (onClick) {
      onClick();
    }
  }, [router, params, label, paramName, onClick]);

  return (
    <li
      onClick={handleClick}
      className={`cursor-pointer w-full text-center font-semibold tracking-wide p-2 hover:bg-highlight/50 transition ${
        active && 'bg-highlight/50'
      }`}
    >
      {label}
    </li>
  );
};

export default MultiselectionListButton;
