import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const NotificationsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('notifications');
  const [notificationFilter, setNotificationFilter] = useState('all');

  return (
    <div className="min-h-screen bg-light-gray">
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
      
      <div className="pt-16 flex">
        <Sidebar userName="John Student" userRole="Computer Engineering, Year 3" />
        
        <main className="flex-1 max-w-3xl mx-auto px-4 py-6">
          <div className="card">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-xl font-semibold">Notifications</h1>
              <div className="flex items-center">
                <button className="text-primary-blue text-sm hover:underline flex items-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                  </svg>
                  Settings
                </button>
                <button className="text-primary-blue text-sm hover:underline flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Mark all as read
                </button>
              </div>
            </div>
            
            {/* Filter Tabs */}
            <div className="flex border-b border-light-gray mb-4 overflow-x-auto">
              <NotificationFilterTab 
                label="All Notifications" 
                active={notificationFilter === 'all'} 
                onClick={() => setNotificationFilter('all')} 
              />
              <NotificationFilterTab 
                label="Mentions" 
                active={notificationFilter === 'mentions'} 
                onClick={() => setNotificationFilter('mentions')} 
              />
              <NotificationFilterTab 
                label="Course Updates" 
                active={notificationFilter === 'courses'} 
                onClick={() => setNotificationFilter('courses')} 
              />
              <NotificationFilterTab 
                label="Group Activities" 
                active={notificationFilter === 'groups'} 
                onClick={() => setNotificationFilter('groups')} 
              />
              <NotificationFilterTab 
                label="Events" 
                active={notificationFilter === 'events'} 
                onClick={() => setNotificationFilter('events')} 
              />
            </div>
            
            {/* Notifications List */}
            <div className="space-y-2">
              <NotificationItem 
                type="mention"
                content="Kavishka Rambukwalle mentioned you in a comment: '@John Student what do you think about this approach for our project?'"
                source="AI Research Group"
                time="10 minutes ago"
                unread={true}
              />
              
              <NotificationItem 
                type="course"
                content="New assignment posted in CS3052 - Computer Networks: 'Network Protocol Implementation'"
                source="Dr. Damayanthi Herath"
                time="1 hour ago"
                unread={true}
              />
              
              <NotificationItem 
                type="group"
                content="Hackers' Club UOP posted a new announcement: 'Registration for Hackathon 2025 is now open!'"
                source="Hackers' Club UOP"
                time="3 hours ago"
                unread={true}
              />
              
              <NotificationItem 
                type="connection"
                content="Uthsara Wickramaarachchi accepted your connection request"
                source="Connections"
                time="5 hours ago"
                unread={false}
              />
              
              <NotificationItem 
                type="event"
                content="Reminder: 'Final Exam Preparation Workshop' starts tomorrow at 10:00 AM"
                source="Computer Engineering Department"
                time="Yesterday"
                unread={false}
              />
              
              <NotificationItem 
                type="course"
                content="Your assignment 'Database Design Project' in CS3032 - Database Systems has been graded"
                source="Dr. Upul Jayasinghe"
                time="Yesterday"
                unread={false}
              />
              
              <NotificationItem 
                type="group"
                content="New members joined AI Research Group: Manodya Senevirathna and 3 others"
                source="AI Research Group"
                time="2 days ago"
                unread={false}
              />
              
              <NotificationItem 
                type="mention"
                content="Prof. Roshan Ragel mentioned you in a post: 'Congratulations to @John Student and team for their excellent presentation'"
                source="Software Engineering"
                time="3 days ago"
                unread={false}
              />
              
              <NotificationItem 
                type="event"
                content="'Summer Internship Fair' has been added to your calendar"
                source="Career Services"
                time="4 days ago"
                unread={false}
              />
              
              <NotificationItem 
                type="connection"
                content="Kavindu Bambaragama and 2 others sent you connection requests"
                source="Connections"
                time="5 days ago"
                unread={false}
              />
            </div>
            
            {/* Pagination */}
            <div className="flex justify-center mt-6">
              <button className="px-3 py-1 rounded-l-md border border-light-gray text-medium-gray hover:bg-light-gray">
                Previous
              </button>
              <button className="px-3 py-1 border-t border-b border-light-gray bg-primary-blue text-white">
                1
              </button>
              <button className="px-3 py-1 border-t border-b border-light-gray text-medium-gray hover:bg-light-gray">
                2
              </button>
              <button className="px-3 py-1 border-t border-b border-light-gray text-medium-gray hover:bg-light-gray">
                3
              </button>
              <button className="px-3 py-1 rounded-r-md border border-light-gray text-medium-gray hover:bg-light-gray">
                Next
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

interface NotificationFilterTabProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

const NotificationFilterTab: React.FC<NotificationFilterTabProps> = ({ label, active, onClick }) => {
  return (
    <button
      className={`px-4 py-2 text-sm font-medium whitespace-nowrap ${
        active
          ? 'text-primary-blue border-b-2 border-primary-blue'
          : 'text-medium-gray hover:text-dark-gray'
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

interface NotificationItemProps {
  type: 'mention' | 'course' | 'group' | 'connection' | 'event';
  content: string;
  source: string;
  time: string;
  unread: boolean;
}

const NotificationItem: React.FC<NotificationItemProps> = ({ type, content, source, time, unread }) => {
  return (
    <div className={`p-3 rounded-lg flex items-start ${unread ? 'bg-light-blue' : 'hover:bg-light-gray'}`}>
      <div className="mr-3">
        <NotificationIcon type={type} />
      </div>
      <div className="flex-1">
        <p className="text-sm mb-1">{content}</p>
        <div className="flex justify-between items-center">
          <span className="text-xs text-primary-blue">{source}</span>
          <span className="text-xs text-medium-gray">{time}</span>
        </div>
      </div>
      <div className="ml-2 flex space-x-1">
        {unread && (
          <div className="h-2 w-2 rounded-full bg-primary-blue mt-1"></div>
        )}
        <button className="text-medium-gray hover:text-dark-gray">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

interface NotificationIconProps {
  type: 'mention' | 'course' | 'group' | 'connection' | 'event';
}

const NotificationIcon: React.FC<NotificationIconProps> = ({ type }) => {
  switch (type) {
    case 'mention':
      return (
        <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-primary-blue">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
          </svg>
        </div>
      );
    case 'course':
      return (
        <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
          </svg>
        </div>
      );
    case 'group':
      return (
        <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
      );
    case 'connection':
      return (
        <div className="h-8 w-8 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
          </svg>
        </div>
      );
    case 'event':
      return (
        <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center text-red-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
      );
    default:
      return null;
  }
};

export default NotificationsPage;
