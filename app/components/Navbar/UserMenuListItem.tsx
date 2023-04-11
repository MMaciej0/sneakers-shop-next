'use client';

type ItemProps = {
  label: string;
  onClick: () => void;
};

const UserMenuListItem: React.FC<ItemProps> = ({ label, onClick }) => {
  return (
    <li
      onClick={onClick}
      className="cursor-pointer w-full text-center font-semibold tracking-wide p-2 hover:bg-highlight/50 transition"
    >
      {label}
    </li>
  );
};

export default UserMenuListItem;
