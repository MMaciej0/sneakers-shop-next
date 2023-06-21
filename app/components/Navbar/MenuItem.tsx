'use client';

type ItemProps = {
  label: string;
  onClick: () => void;
  active?: boolean;
};

const MenuItem: React.FC<ItemProps> = ({ label, onClick, active }) => {
  return (
    <li
      onClick={onClick}
      className={`cursor-pointer w-full text-center font-semibold tracking-wide p-2 hover:bg-highlight/50 transition ${
        active && 'bg-highlight/50'
      }`}
    >
      {label}
    </li>
  );
};

export default MenuItem;
