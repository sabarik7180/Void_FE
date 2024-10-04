import { Avatar } from "./AvatarGenerator";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface AvatarWithLogoutProps {
    userName: string; // Name of the user or default 'Guest'
  }




function AvatarWithDropDown({userName}:AvatarWithLogoutProps) {
    const navigate = useNavigate()

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
      };
    
    const onLogout = () => {
        localStorage.removeItem('token');
        navigate('/signin');
    }

    return ( 
    <div className="relative inline-block text-left">
      <button
        type="button"
        onClick={toggleDropdown}
        className={`flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none`}
      >
        <Avatar size ="big" name={userName}/>
      </button>
      {/* Dropdown menu */}
      {dropdownOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <button
              onClick={onLogout}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AvatarWithDropDown;