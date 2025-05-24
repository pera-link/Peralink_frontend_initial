import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const SearchPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('search');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchCategory, setSearchCategory] = useState('all');
  const [sortBy, setSortBy] = useState('relevance');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery, 'in category:', searchCategory, 'sorted by:', sortBy);
  };

  return (
    <div className="min-h-screen bg-light-gray">
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
      
      <div className="pt-16 flex">
        <Sidebar userName="John Student" userRole="Computer Engineering, Year 3" />
        
        <main className="flex-1 max-w-4xl mx-auto px-4 py-6">
          {/* Search Form */}
          <div className="card mb-6">
            <form onSubmit={handleSearch}>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-medium-gray" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    className="input-field pl-10"
                    placeholder="Search Peralink..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="flex gap-2">
                  <select 
                    className="input-field py-2 text-sm"
                    value={searchCategory}
                    onChange={(e) => setSearchCategory(e.target.value)}
                  >
                    <option value="all">All Categories</option>
                    <option value="people">People</option>
                    <option value="groups">Groups</option>
                    <option value="courses">Courses</option>
                    <option value="posts">Posts</option>
                    <option value="events">Events</option>
                    <option value="resources">Resources</option>
                  </select>
                  <button type="submit" className="btn-primary">
                    Search
                  </button>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-between items-center mt-4 pt-4 border-t border-light-gray">
                <div className="flex flex-wrap gap-2">
                  <FilterTag label="All" active={searchCategory === 'all'} onClick={() => setSearchCategory('all')} />
                  <FilterTag label="People" active={searchCategory === 'people'} onClick={() => setSearchCategory('people')} />
                  <FilterTag label="Groups" active={searchCategory === 'groups'} onClick={() => setSearchCategory('groups')} />
                  <FilterTag label="Courses" active={searchCategory === 'courses'} onClick={() => setSearchCategory('courses')} />
                  <FilterTag label="Posts" active={searchCategory === 'posts'} onClick={() => setSearchCategory('posts')} />
                  <FilterTag label="Events" active={searchCategory === 'events'} onClick={() => setSearchCategory('events')} />
                  <FilterTag label="Resources" active={searchCategory === 'resources'} onClick={() => setSearchCategory('resources')} />
                </div>
                
                <div className="flex items-center mt-2 sm:mt-0">
                  <span className="text-xs text-medium-gray mr-2">Sort by:</span>
                  <select 
                    className="text-xs border border-light-gray rounded-md px-2 py-1"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="relevance">Relevance</option>
                    <option value="date">Date</option>
                    <option value="popularity">Popularity</option>
                  </select>
                </div>
              </div>
            </form>
          </div>
          
          {/* Search Results */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-dark-blue">Search Results</h2>
              <span className="text-sm text-medium-gray">125 results found</span>
            </div>
            
            {/* People Results */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-md font-semibold">People</h3>
                <a href="#" className="text-sm text-primary-blue hover:underline">View all</a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <PersonSearchResult 
                  name="Kavishka Rambukwalle" 
                  role="Computer Engineering, Year 3"
                  mutualConnections={12}
                />
                <PersonSearchResult 
                  name="Uthsara Wickramaarachchi" 
                  role="Computer Engineering, Year 3"
                  mutualConnections={8}
                />
                <PersonSearchResult 
                  name="Kavindu Bambaragama" 
                  role="Computer Engineering, Year 3"
                  mutualConnections={15}
                />
                <PersonSearchResult 
                  name="Manodya Senevirathna" 
                  role="Computer Engineering, Year 3"
                  mutualConnections={6}
                />
              </div>
            </div>
            
            {/* Groups Results */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-md font-semibold">Groups</h3>
                <a href="#" className="text-sm text-primary-blue hover:underline">View all</a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <GroupSearchResult 
                  name="AI Research Group" 
                  members={128}
                  description="Exploring cutting-edge AI technologies and applications in various domains."
                />
                <GroupSearchResult 
                  name="Competitive Programming" 
                  members={95}
                  description="Practice and compete in programming challenges and contests."
                />
              </div>
            </div>
            
            {/* Courses Results */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-md font-semibold">Courses</h3>
                <a href="#" className="text-sm text-primary-blue hover:underline">View all</a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <CourseSearchResult 
                  code="CS4032" 
                  name="Machine Learning" 
                  department="Computer Engineering"
                  instructor="Dr. Asitha Bandaranayake"
                />
                <CourseSearchResult 
                  code="CS4222" 
                  name="Software Architecture" 
                  department="Computer Engineering"
                  instructor="Prof. Roshan Ragel"
                />
              </div>
            </div>
            
            {/* Posts Results */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-md font-semibold">Posts</h3>
                <a href="#" className="text-sm text-primary-blue hover:underline">View all</a>
              </div>
              <div className="space-y-4">
                <PostSearchResult 
                  author="Dr. Damayanthi Herath"
                  authorRole="Professor, Computer Engineering"
                  content="Reminder: The deadline for the AI Research Group project proposals is this Friday. Please make sure to submit your ideas through the department portal. Looking forward to seeing your innovative concepts!"
                  time="5 hours ago"
                  engagement={{likes: 45, comments: 12, shares: 8}}
                />
                <PostSearchResult 
                  author="Hackers' Club UOP"
                  authorRole="University Organization"
                  content="We're excited to announce our upcoming Hackathon 2025! Mark your calendars for June 15-17. This year's theme is 'Sustainable Technology Solutions.' Registration opens next week!"
                  time="1 day ago"
                  engagement={{likes: 89, comments: 32, shares: 41}}
                />
              </div>
            </div>
            
            {/* Events Results */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-md font-semibold">Events</h3>
                <a href="#" className="text-sm text-primary-blue hover:underline">View all</a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <EventSearchResult 
                  title="Hackathon 2025" 
                  organizer="Hackers' Club UOP"
                  date="June 15-17, 2025"
                  location="Engineering Building"
                />
                <EventSearchResult 
                  title="Summer Internship Fair" 
                  organizer="Career Services"
                  date="June 30, 2025"
                  location="Student Center"
                />
              </div>
            </div>
            
            {/* Resources Results */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-md font-semibold">Resources</h3>
                <a href="#" className="text-sm text-primary-blue hover:underline">View all</a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ResourceSearchResult 
                  title="Library Digital Access" 
                  description="Access thousands of e-books, journals, and research papers through the university library portal."
                  type="Academic"
                />
                <ResourceSearchResult 
                  title="Career Services Portal" 
                  description="Find internships, job opportunities, and career guidance services."
                  type="Career"
                />
              </div>
            </div>
          </div>
          
          {/* Pagination */}
          <div className="flex justify-center mt-8">
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
        </main>
      </div>
    </div>
  );
};

interface FilterTagProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

const FilterTag: React.FC<FilterTagProps> = ({ label, active, onClick }) => {
  return (
    <button 
      className={`px-3 py-1 rounded-full text-xs font-medium ${
        active 
          ? 'bg-primary-blue text-white' 
          : 'bg-white border border-gray-200 text-medium-gray hover:border-primary-blue hover:text-primary-blue'
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

interface PersonSearchResultProps {
  name: string;
  role: string;
  mutualConnections: number;
}

const PersonSearchResult: React.FC<PersonSearchResultProps> = ({ name, role, mutualConnections }) => {
  return (
    <div className="border border-light-gray rounded-lg p-4 flex items-center">
      <div className="h-12 w-12 rounded-full bg-secondary-blue flex items-center justify-center text-white mr-3">
        <span className="text-sm font-medium">{name.split(' ').map(n => n[0]).join('')}</span>
      </div>
      <div className="flex-1">
        <h3 className="text-sm font-semibold">{name}</h3>
        <p className="text-xs text-medium-gray">{role}</p>
        <p className="text-xs text-medium-gray">{mutualConnections} mutual connections</p>
      </div>
      <button className="btn-secondary text-xs py-1 px-3">Connect</button>
    </div>
  );
};

interface GroupSearchResultProps {
  name: string;
  members: number;
  description: string;
}

const GroupSearchResult: React.FC<GroupSearchResultProps> = ({ name, members, description }) => {
  return (
    <div className="border border-light-gray rounded-lg p-4">
      <div className="flex items-center mb-2">
        <div className="h-10 w-10 rounded-full bg-light-blue flex items-center justify-center text-primary-blue mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
        <div>
          <h3 className="text-sm font-semibold">{name}</h3>
          <p className="text-xs text-medium-gray">{members} members</p>
        </div>
      </div>
      <p className="text-xs mb-3">{description}</p>
      <button className="btn-primary w-full text-sm py-1">Join Group</button>
    </div>
  );
};

interface CourseSearchResultProps {
  code: string;
  name: string;
  department: string;
  instructor: string;
}

const CourseSearchResult: React.FC<CourseSearchResultProps> = ({ code, name, department, instructor }) => {
  return (
    <div className="border border-light-gray rounded-lg p-4">
      <div className="flex items-center mb-2">
        <div className="h-10 w-10 rounded-full bg-light-blue flex items-center justify-center text-primary-blue mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998a12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
          </svg>
        </div>
        <div>
          <div className="text-xs font-semibold text-primary-blue">{code}</div>
          <h3 className="text-sm font-semibold">{name}</h3>
          <p className="text-xs text-medium-gray">{department}</p>
        </div>
      </div>
      <p className="text-xs text-medium-gray mb-3">Instructor: {instructor}</p>
      <button className="btn-primary w-full text-sm py-1">View Course</button>
    </div>
  );
};

interface PostSearchResultProps {
  author: string;
  authorRole: string;
  content: string;
  time: string;
  engagement: {
    likes: number;
    comments: number;
    shares: number;
  };
}

const PostSearchResult: React.FC<PostSearchResultProps> = ({ author, authorRole, content, time, engagement }) => {
  return (
    <div className="border border-light-gray rounded-lg p-4">
      <div className="flex items-center mb-3">
        <div className="h-10 w-10 rounded-full bg-primary-blue flex items-center justify-center text-white mr-3">
          <span className="text-sm font-medium">{author.split(' ').map(n => n[0]).join('')}</span>
        </div>
        <div className="flex-1">
          <h4 className="text-sm font-semibold">{author}</h4>
          <p className="text-xs text-medium-gray">{authorRole} • {time}</p>
        </div>
      </div>
      <p className="text-sm mb-3 line-clamp-2">{content}</p>
      <div className="flex items-center text-xs text-medium-gray">
        <div className="flex items-center mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
          </svg>
          {engagement.likes} likes
        </div>
        <div className="flex items-center mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          {engagement.comments} comments
        </div>
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
          {engagement.shares} shares
        </div>
      </div>
    </div>
  );
};

interface EventSearchResultProps {
  title: string;
  organizer: string;
  date: string;
  location: string;
}

const EventSearchResult: React.FC<EventSearchResultProps> = ({ title, organizer, date, location }) => {
  return (
    <div className="border border-light-gray rounded-lg p-4">
      <div className="flex items-start">
        <div className="bg-light-blue text-primary-blue rounded p-2 mr-3 text-center min-w-[40px]">
          <div className="text-xs font-bold">{date.split(' ')[0]}</div>
          <div className="text-lg font-bold">{date.split(' ')[1].replace(',', '')}</div>
        </div>
        <div>
          <h3 className="text-sm font-semibold">{title}</h3>
          <p className="text-xs text-primary-blue mb-1">{organizer}</p>
          <p className="text-xs text-medium-gray mb-2">{date} • {location}</p>
          <div className="flex space-x-2">
            <button className="btn-primary text-xs py-1 px-3">Attend</button>
            <button className="btn-secondary text-xs py-1 px-3">Interested</button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface ResourceSearchResultProps {
  title: string;
  description: string;
  type: string;
}

const ResourceSearchResult: React.FC<ResourceSearchResultProps> = ({ title, description, type }) => {
  return (
    <div className="border border-light-gray rounded-lg p-4">
      <div className="flex items-start">
        <div className="h-10 w-10 rounded-full bg-light-blue flex items-center justify-center text-primary-blue mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
        <div>
          <div className="flex items-center mb-1">
            <h3 className="text-sm font-semibold mr-2">{title}</h3>
            <span className="text-xs bg-light-blue text-primary-blue px-2 py-0.5 rounded-full">{type}</span>
          </div>
          <p className="text-xs text-medium-gray mb-2">{description}</p>
          <a href="#" className="text-xs text-primary-blue hover:underline">Access Resource →</a>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
