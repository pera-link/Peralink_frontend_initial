import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';

const HomePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');
  
  // Sample posts data for the feed
  const samplePosts = [
    {
      id: '1',
      author: {
        name: 'Nipul Viduranga',
        role: 'Computer Engineering Student',
      },
      content: 'Just submitted my final project for Software Engineering course! Looking for feedback from anyone who has time to review it. The project focuses on implementing a microservices architecture for university resource management.',
      timestamp: '2 hours ago',
      likes: 24,
      comments: 5,
      shares: 2,
      hasLiked: false,
      media: [
        {
          type: "document" as const,
          url: '#',
          caption: 'SE_Final_Project.pdf',
        },
      ],
    },
    {
      id: '2',
      author: {
        name: 'Dr. Damayanthi Herath',
        role: 'Professor, Computer Engineering',
      },
      content: 'Reminder: The deadline for the AI Research Group project proposals is this Friday. Please make sure to submit your ideas through the department portal. Looking forward to seeing your innovative concepts!',
      timestamp: '5 hours ago',
      likes: 45,
      comments: 12,
      shares: 8,
      hasLiked: true,
    },
    {
      id: '3',
      author: {
        name: 'Hackers\' Club UOP',
        role: 'University Organization',
      },
      content: 'We\'re excited to announce our upcoming Hackathon 2025! Mark your calendars for June 15-17. This year\'s theme is "Sustainable Technology Solutions." Registration opens next week!',
      timestamp: '1 day ago',
      likes: 89,
      comments: 32,
      shares: 41,
      hasLiked: false,
      media: [
        {
          type: "image" as const,
          url: 'https://via.placeholder.com/600x300/E3F2FD/1E88E5?text=Hackathon+2025',
          caption: 'Hackathon 2025 Banner',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-light-gray">
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
      
      <div className="pt-16 flex">
        <Sidebar userName="John Student" userRole="Computer Engineering, Year 3" />
        
        <main className="flex-1 pt-4">
          <Feed posts={samplePosts} />
        </main>
        
        {/* Right Sidebar - Desktop Only */}
        <aside className="hidden lg:block w-80 p-6 sticky top-16 h-screen">
          <div className="card mb-6">
            <h3 className="text-sm font-semibold mb-4">Upcoming Events</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-light-blue text-primary-blue rounded p-2 mr-3 text-center min-w-[40px]">
                  <div className="text-xs font-bold">MAY</div>
                  <div className="text-lg font-bold">25</div>
                </div>
                <div>
                  <h4 className="text-sm font-medium">Final Exams Begin</h4>
                  <p className="text-xs text-medium-gray">Campus-wide</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-light-blue text-primary-blue rounded p-2 mr-3 text-center min-w-[40px]">
                  <div className="text-xs font-bold">JUN</div>
                  <div className="text-lg font-bold">15</div>
                </div>
                <div>
                  <h4 className="text-sm font-medium">Hackathon 2025</h4>
                  <p className="text-xs text-medium-gray">Engineering Building</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-light-blue text-primary-blue rounded p-2 mr-3 text-center min-w-[40px]">
                  <div className="text-xs font-bold">JUN</div>
                  <div className="text-lg font-bold">30</div>
                </div>
                <div>
                  <h4 className="text-sm font-medium">Summer Internship Fair</h4>
                  <p className="text-xs text-medium-gray">Student Center</p>
                </div>
              </li>
            </ul>
            <button className="text-primary-blue text-sm font-medium hover:underline mt-4 flex items-center">
              See all events
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          <div className="card">
            <h3 className="text-sm font-semibold mb-4">Suggested Connections</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-secondary-blue flex items-center justify-center text-white mr-3">
                  <span className="text-sm font-medium">KR</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-medium">Kavishka Rambukwalle</h4>
                  <p className="text-xs text-medium-gray">Computer Engineering, Year 3</p>
                </div>
                <button className="text-primary-blue text-sm font-medium hover:underline">
                  Connect
                </button>
              </li>
              <li className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-secondary-blue flex items-center justify-center text-white mr-3">
                  <span className="text-sm font-medium">UW</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-medium">Uthsara Wickramaarachchi</h4>
                  <p className="text-xs text-medium-gray">Computer Engineering, Year 3</p>
                </div>
                <button className="text-primary-blue text-sm font-medium hover:underline">
                  Connect
                </button>
              </li>
              <li className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-secondary-blue flex items-center justify-center text-white mr-3">
                  <span className="text-sm font-medium">KB</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-medium">Kavindu Bambaragama</h4>
                  <p className="text-xs text-medium-gray">Computer Engineering, Year 3</p>
                </div>
                <button className="text-primary-blue text-sm font-medium hover:underline">
                  Connect
                </button>
              </li>
            </ul>
            <button className="text-primary-blue text-sm font-medium hover:underline mt-4 flex items-center">
              See more suggestions
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default HomePage;
