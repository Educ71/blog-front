import React from 'react';
import { ChrevronIcon } from './chevron-icon';
import { UserIcon } from './user-icon';

export const DropDownUserMenu: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div
      className="flex items-center cursor-pointer"
      onClick={() => setOpen((value) => !value)}
    >
      <UserIcon />
      <ChrevronIcon open={open} />
      {open && (
        <div className="flex flex-col absolute top-header right-1 bg-white p-2 mr-2 shadow-md border rounded-md">
          <div>Setting</div>
          <div>Theme</div>
        </div>
      )}
    </div>
  );
};
