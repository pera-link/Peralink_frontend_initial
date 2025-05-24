import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const DiscoverPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('discover');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className="min-h-screen bg-light-gray">
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
      
      <div className="pt-16 flex">
        <Sidebar userName="John Student" userRole="Computer Engineering, Year 3" />
        
        <main className="flex-1 max-w-4xl mx-auto px-4 py-6">
          {/* Search Bar */}
          <div className="card mb-6">
            <form onSubmit={handleSearch} className="flex items-center">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-medium-gray" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  className="input-field pl-10"
                  placeholder="Search people, groups, courses, or content..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <button type="submit" className="btn-primary ml-3">
                Search
              </button>
            </form>
            <div className="flex flex-wrap gap-2 mt-3">
              <FilterTag label="People" active />
              <FilterTag label="Groups" />
              <FilterTag label="Courses" />
              <FilterTag label="Events" />
              <FilterTag label="Resources" />
            </div>
          </div>

          {/* Popular Groups */}
          <section className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-dark-blue">Popular Groups in Your University</h2>
              <button className="text-primary-blue text-sm hover:underline flex items-center">
                See all
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            <div className="flex space-x-4 overflow-x-auto pb-4">
              <GroupCard 
                name="AI Research Group" 
                members={128} 
                description="Exploring cutting-edge AI technologies and applications in various domains."
              />
              <GroupCard 
                name="Competitive Programming" 
                members={95} 
                description="Practice and compete in programming challenges and contests."
              />
              <GroupCard 
                name="Engineering Society" 
                members={312} 
                description="Official society for all engineering students at University of Peradeniya."
              />
              <GroupCard 
                name="Robotics Club" 
                members={76} 
                description="Building and programming robots for competitions and research."
              />
            </div>
          </section>

          {/* Recommended Courses */}
          <section className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-dark-blue">Recommended Courses</h2>
              <button className="text-primary-blue text-sm hover:underline flex items-center">
                See all
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            <div className="flex space-x-4 overflow-x-auto pb-4">
              <CourseCard 
                code="CS4032" 
                name="Machine Learning" 
                department="Computer Engineering"
                students={45}
              />
              <CourseCard 
                code="CS4222" 
                name="Software Architecture" 
                department="Computer Engineering"
                students={38}
              />
              <CourseCard 
                code="CS4532" 
                name="Concurrent Programming" 
                department="Computer Engineering"
                students={42}
              />
              <CourseCard 
                code="CS4622" 
                name="Human-Computer Interaction" 
                department="Computer Engineering"
                students={35}
              />
            </div>
          </section>

          {/* Trending Discussions */}
          <section className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-dark-blue">Trending Discussions</h2>
              <button className="text-primary-blue text-sm hover:underline flex items-center">
                See all
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            <div className="flex space-x-4 overflow-x-auto pb-4">
              <DiscussionCard 
                title="Tips for Final Exam Preparation" 
                group="Computer Engineering 2025"
                participants={34}
                comments={87}
              />
              <DiscussionCard 
                title="Summer Internship Opportunities" 
                group="Career Development"
                participants={56}
                comments={124}
              />
              <DiscussionCard 
                title="Hackathon 2025 Project Ideas" 
                group="Hackers' Club UOP"
                participants={42}
                comments={98}
              />
              <DiscussionCard 
                title="Research Paper Collaboration" 
                group="AI Research Group"
                participants={18}
                comments={45}
              />
            </div>
          </section>

          {/* People You May Know */}
          <section className="mb-8">
            <h2 className="text-lg font-semibold text-dark-blue mb-4">People You May Know</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <PeopleCard 
                name="Kavishka Rambukwalle" 
                role="Computer Engineering, Year 3"
                mutualConnections={12}
              />
              <PeopleCard 
                name="Uthsara Wickramaarachchi" 
                role="Computer Engineering, Year 3"
                mutualConnections={8}
              />
              <PeopleCard 
                name="Kavindu Bambaragama" 
                role="Computer Engineering, Year 3"
                mutualConnections={15}
              />
              <PeopleCard 
                name="Manodya Senevirathna" 
                role="Computer Engineering, Year 3"
                mutualConnections={6}
              />
              <PeopleCard 
                name="Harith Abesinghe" 
                role="Computer Engineering, Year 3"
                mutualConnections={9}
              />
              <PeopleCard 
                name="Ravindu Pathirage" 
                role="Computer Engineering, Year 3"
                mutualConnections={11}
              />
            </div>
            <div className="text-center mt-4">
              <button className="btn-secondary">
                Load More
              </button>
            </div>
          </section>

          {/* Featured University Resources */}
          <section>
            <h2 className="text-lg font-semibold text-dark-blue mb-4">Featured University Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ResourceCard 
                title="Library Digital Access" 
                description="Access thousands of e-books, journals, and research papers through the university library portal."
                icon="book"
              />
              <ResourceCard 
                title="Career Services Portal" 
                description="Find internships, job opportunities, and career guidance services."
                icon="briefcase"
              />
              <ResourceCard 
                title="Academic Calendar" 
                description="Stay updated with important academic dates, holidays, and events."
                icon="calendar"
              />
              <ResourceCard 
                title="Student Wellness Center" 
                description="Resources for mental health, counseling, and wellness programs."
                icon="heart"
              />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

interface FilterTagProps {
  label: string;
  active?: boolean;
}

const FilterTag: React.FC<FilterTagProps> = ({ label, active = false }) => {
  return (
    <button 
      className={`px-3 py-1 rounded-full text-xs font-medium ${
        active 
          ? 'bg-primary-blue text-white' 
          : 'bg-white border border-gray-200 text-medium-gray hover:border-primary-blue hover:text-primary-blue'
      }`}
    >
      {label}
    </button>
  );
};

interface GroupCardProps {
  name: string;
  members: number;
  description: string;
}

const GroupCard: React.FC<GroupCardProps> = ({ name, members, description }) => {
  return (
    <div className="card min-w-[250px] w-[250px] flex flex-col">
      <div className="h-24 bg-light-blue rounded-t-lg flex items-center justify-center -mx-6 -mt-6 mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      </div>
      <h3 className="text-sm font-semibold mb-1">{name}</h3>
      <p className="text-xs text-medium-gray mb-3">{members} members</p>
      <p className="text-xs mb-4 flex-grow">{description}</p>
      <button className="btn-primary w-full">Join Group</button>
    </div>
  );
};

interface CourseCardProps {
  code: string;
  name: string;
  department: string;
  students: number;
}

const CourseCard: React.FC<CourseCardProps> = ({ code, name, department, students }) => {
  return (
    <div className="card min-w-[250px] w-[250px] flex flex-col">
      <div className="h-24 bg-light-blue rounded-t-lg flex items-center justify-center -mx-6 -mt-6 mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      </div>
      <div className="text-xs font-semibold text-primary-blue mb-1">{code}</div>
      <h3 className="text-sm font-semibold mb-1">{name}</h3>
      <p className="text-xs text-medium-gray mb-1">{department}</p>
      <p className="text-xs text-medium-gray mb-4">{students} students enrolled</p>
      <button className="btn-primary w-full">View Course</button>
    </div>
  );
};

interface DiscussionCardProps {
  title: string;
  group: string;
  participants: number;
  comments: number;
}

const DiscussionCard: React.FC<DiscussionCardProps> = ({ title, group, participants, comments }) => {
  return (
    <div className="card min-w-[250px] w-[250px] flex flex-col">
      <div className="h-24 bg-light-blue rounded-t-lg flex items-center justify-center -mx-6 -mt-6 mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      </div>
      <h3 className="text-sm font-semibold mb-1">{title}</h3>
      <p className="text-xs text-medium-gray mb-3">In {group}</p>
      <div className="flex justify-between text-xs text-medium-gray mb-4">
        <span>{participants} participants</span>
        <span>{comments} comments</span>
      </div>
      <button className="btn-primary w-full">Join Discussion</button>
    </div>
  );
};

interface PeopleCardProps {
  name: string;
  role: string;
  mutualConnections: number;
}

const PeopleCard: React.FC<PeopleCardProps> = ({ name, role, mutualConnections }) => {
  return (
    <div className="card flex items-center">
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

interface ResourceCardProps {
  title: string;
  description: string;
  icon: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ title, description, icon }) => {
  return (
    <div className="card flex items-start">
      <div className="h-10 w-10 rounded-full bg-light-blue flex items-center justify-center text-primary-blue mr-3">
        <ResourceIcon name={icon} />
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-1">{title}</h3>
        <p className="text-xs text-medium-gray mb-2">{description}</p>
        <a href="#" className="text-xs text-primary-blue hover:underline">Access Resource →</a>
      </div>
    </div>
  );
};

interface ResourceIconProps {
  name: string;
}

const ResourceIcon: React.FC<ResourceIconProps> = ({ name }) => {
  switch (name) {
    case 'book':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      );
    case 'briefcase':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    case 'calendar':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      );
    case 'heart':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      );
    default:
      return null;
  }
};

export default DiscoverPage;
