import React from 'react';

interface SidebarProps {
  userName: string;
  userRole: string;
  userAvatar?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ userName, userRole, userAvatar }) => {
  return (
    <aside className="hidden md:flex md:flex-col w-64 bg-white border-r border-gray-200 h-screen sticky top-16 pt-6">
      {/* User Profile Section */}
      <div className="px-6 pb-4 border-b border-gray-200">
        <div className="flex items-center mb-4">
          {userAvatar ? (
            <img 
              src={userAvatar} 
              alt={`${userName}'s avatar`} 
              className="h-12 w-12 rounded-full mr-3"
            />
          ) : (
            <div className="h-12 w-12 rounded-full bg-primary-blue flex items-center justify-center text-white mr-3">
              <span className="text-lg font-medium">{userName.split(' ').map(n => n[0]).join('')}</span>
            </div>
          )}
          <div>
            <h3 className="text-sm font-semibold">{userName}</h3>
            <p className="text-xs text-medium-gray">{userRole}</p>
          </div>
        </div>
        <button className="w-full py-1.5 text-sm text-primary-blue border border-primary-blue rounded-md hover:bg-light-blue transition-colors">
          View Profile
        </button>
      </div>

      {/* My Groups Section */}
      <div className="px-6 py-4 border-b border-gray-200">
        <h4 className="text-xs font-semibold uppercase text-medium-gray mb-3">My Groups</h4>
        <ul className="space-y-2">
          <SidebarItem icon="users" label="Computer Engineering 2025" />
          <SidebarItem icon="users" label="AI Research Group" />
          <SidebarItem icon="users" label="Hackers' Club UOP" />
          <SidebarItem icon="plus-circle" label="Join more groups" isAction />
        </ul>
      </div>

      {/* My Courses Section */}
      <div className="px-6 py-4 border-b border-gray-200">
        <h4 className="text-xs font-semibold uppercase text-medium-gray mb-3">My Courses</h4>
        <ul className="space-y-2">
          <SidebarItem icon="book" label="CS3052 - Computer Networks" />
          <SidebarItem icon="book" label="CS3022 - Software Engineering" />
          <SidebarItem icon="book" label="CS3032 - Database Systems" />
          <SidebarItem icon="plus-circle" label="Add more courses" isAction />
        </ul>
      </div>

      {/* Trending Topics */}
      <div className="px-6 py-4 border-b border-gray-200">
        <h4 className="text-xs font-semibold uppercase text-medium-gray mb-3">Trending Topics</h4>
        <ul className="space-y-2">
          <SidebarItem icon="trending-up" label="Final Exam Preparation" />
          <SidebarItem icon="trending-up" label="Summer Internships" />
          <SidebarItem icon="trending-up" label="Hackathon 2025" />
        </ul>
      </div>

      {/* University Resources */}
      <div className="px-6 py-4">
        <h4 className="text-xs font-semibold uppercase text-medium-gray mb-3">University Resources</h4>
        <ul className="space-y-2">
          <SidebarItem icon="link" label="Library Access" />
          <SidebarItem icon="link" label="Career Services" />
          <SidebarItem icon="link" label="Academic Calendar" />
        </ul>
      </div>

      {/* Footer */}
      <div className="mt-auto px-6 py-4 text-xs text-medium-gray">
        <p>© 2025 Peralink</p>
        <div className="flex space-x-3 mt-2">
          <a href="#" className="hover:text-primary-blue">Help</a>
          <a href="#" className="hover:text-primary-blue">Privacy</a>
          <a href="#" className="hover:text-primary-blue">Terms</a>
        </div>
      </div>
    </aside>
  );
};

interface SidebarItemProps {
  icon: string;
  label: string;
  isAction?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, isAction = false }) => {
  return (
    <li>
      <a 
        href="#" 
        className={`flex items-center text-sm ${
          isAction ? 'text-primary-blue font-medium' : 'text-dark-gray hover:text-primary-blue'
        }`}
      >
        <IconComponent name={icon} className="h-4 w-4 mr-3" />
        <span>{label}</span>
      </a>
    </li>
  );
};

interface IconComponentProps {
  name: string;
  className?: string;
}

const IconComponent: React.FC<IconComponentProps> = ({ name, className = "h-6 w-6" }) => {
  switch (name) {
    case 'users':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      );
    case 'book':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      );
    case 'trending-up':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      );
    case 'link':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      );
    case 'plus-circle':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    default:
      return null;
  }
};

export default Sidebar;
