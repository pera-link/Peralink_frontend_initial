import React from 'react';
import peralinkLogo from '../assets/images/peralink-logo.png';

interface HeaderProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeTab, onTabChange }) => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = React.useState(false);
  
  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img
              className="h-10 w-10"
              src={peralinkLogo}
              alt="Peralink Logo"
            />
            <span className="ml-2 text-xl font-semibold text-dark-blue">Peralink</span>
          </div>
          
          {/* Navigation Tabs - Desktop */}
          <div className="hidden sm:flex sm:space-x-8 items-center">
            <NavTab 
              label="Home" 
              icon="home" 
              isActive={activeTab === 'home'} 
              onClick={() => onTabChange('home')} 
            />
            <NavTab 
              label="Discover" 
              icon="compass" 
              isActive={activeTab === 'discover'} 
              onClick={() => onTabChange('discover')} 
            />
            <NavTab 
              label="Profile" 
              icon="user" 
              isActive={activeTab === 'profile'} 
              onClick={() => onTabChange('profile')} 
            />
            <NavTab 
              label="Notifications" 
              icon="bell" 
              isActive={activeTab === 'notifications'} 
              onClick={() => onTabChange('notifications')} 
            />
            <NavTab 
              label="Search" 
              icon="search" 
              isActive={activeTab === 'search'} 
              onClick={() => onTabChange('search')} 
            />
          </div>
          
          {/* User Profile */}
          <div className="flex items-center">
            <div className="relative">
              <button
                className="flex items-center space-x-2 focus:outline-none"
                onClick={toggleProfileMenu}
              >
                <div className="h-8 w-8 rounded-full bg-primary-blue flex items-center justify-center text-white">
                  <span className="text-sm font-medium">JS</span>
                </div>
                <span className="hidden md:block text-sm font-medium">John Student</span>
                <svg
                  className="h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              
              {/* Profile Dropdown Menu */}
              {isProfileMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-light-blue"
                      role="menuitem"
                    >
                      Your Profile
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-light-blue"
                      role="menuitem"
                    >
                      Settings
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-light-blue"
                      role="menuitem"
                    >
                      Help Center
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-light-blue"
                      role="menuitem"
                    >
                      Sign out
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className="sm:hidden border-t border-gray-200">
        <div className="flex justify-between px-2 py-3">
          <NavTabMobile 
            label="Home" 
            icon="home" 
            isActive={activeTab === 'home'} 
            onClick={() => onTabChange('home')} 
          />
          <NavTabMobile 
            label="Discover" 
            icon="compass" 
            isActive={activeTab === 'discover'} 
            onClick={() => onTabChange('discover')} 
          />
          <NavTabMobile 
            label="Profile" 
            icon="user" 
            isActive={activeTab === 'profile'} 
            onClick={() => onTabChange('profile')} 
          />
          <NavTabMobile 
            label="Notifications" 
            icon="bell" 
            isActive={activeTab === 'notifications'} 
            onClick={() => onTabChange('notifications')} 
          />
          <NavTabMobile 
            label="Search" 
            icon="search" 
            isActive={activeTab === 'search'} 
            onClick={() => onTabChange('search')} 
          />
        </div>
      </div>
    </header>
  );
};

interface NavTabProps {
  label: string;
  icon: string;
  isActive: boolean;
  onClick: () => void;
}

const NavTab: React.FC<NavTabProps> = ({ label, icon, isActive, onClick }) => {
  return (
    <button
      className={`flex flex-col items-center px-1 pt-1 border-b-2 text-sm font-medium ${
        isActive
          ? 'border-primary-blue text-primary-blue'
          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
      }`}
      onClick={onClick}
    >
      <IconComponent name={icon} isActive={isActive} />
      <span className="mt-1">{label}</span>
    </button>
  );
};

const NavTabMobile: React.FC<NavTabProps> = ({ label, icon, isActive, onClick }) => {
  return (
    <button
      className={`flex flex-col items-center px-3 py-2 text-xs font-medium ${
        isActive ? 'text-primary-blue' : 'text-gray-500 hover:text-gray-700'
      }`}
      onClick={onClick}
    >
      <IconComponent name={icon} isActive={isActive} />
      <span className="mt-1">{label}</span>
    </button>
  );
};

interface IconComponentProps {
  name: string;
  isActive: boolean;
}

const IconComponent: React.FC<IconComponentProps> = ({ name, isActive }) => {
  const color = isActive ? 'var(--primary-blue)' : 'currentColor';
  
  switch (name) {
    case 'home':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke={color}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      );
    case 'compass':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke={color}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      );
    case 'user':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke={color}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      );
    case 'bell':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke={color}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      );
    case 'search':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke={color}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      );
    default:
      return null;
  }
};

export default Header;
