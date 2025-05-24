import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const ProfilePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [profileTab, setProfileTab] = useState('posts');

  return (
    <div className="min-h-screen bg-light-gray">
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
      
      <div className="pt-16 flex">
        <Sidebar userName="John Student" userRole="Computer Engineering, Year 3" />
        
        <main className="flex-1 max-w-4xl mx-auto px-4 py-6">
          {/* Profile Header */}
          <div className="relative mb-6">
            {/* Cover Photo */}
            <div className="h-48 bg-primary-blue rounded-lg overflow-hidden">
              <img 
                src="https://via.placeholder.com/1200x400/E3F2FD/1E88E5?text=University+Campus" 
                alt="Cover" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Profile Picture and Basic Info */}
            <div className="flex flex-col md:flex-row items-start md:items-end -mt-16 md:-mt-12 px-4 md:px-6">
              <div className="h-32 w-32 rounded-full border-4 border-white bg-white overflow-hidden">
                <div className="h-full w-full bg-primary-blue flex items-center justify-center text-white">
                  <span className="text-4xl font-medium">JS</span>
                </div>
              </div>
              
              <div className="mt-4 md:mt-0 md:ml-6 mb-4 flex-1">
                <h1 className="text-2xl font-bold">John Student</h1>
                <p className="text-medium-gray">Computer Engineering, Year 3 | University of Peradeniya</p>
              </div>
              
              <div className="flex space-x-3">
                <button className="btn-primary">Edit Profile</button>
                <button className="btn-secondary">Share Profile</button>
              </div>
            </div>
          </div>
          
          {/* Profile Stats */}
          <div className="card mb-6 flex justify-around py-4">
            <div className="text-center">
              <div className="text-xl font-bold text-primary-blue">248</div>
              <div className="text-sm text-medium-gray">Connections</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-primary-blue">15</div>
              <div className="text-sm text-medium-gray">Groups</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-primary-blue">42</div>
              <div className="text-sm text-medium-gray">Posts</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-primary-blue">8</div>
              <div className="text-sm text-medium-gray">Courses</div>
            </div>
          </div>
          
          {/* Profile Tabs */}
          <div className="card overflow-hidden">
            <div className="border-b border-light-gray">
              <nav className="flex">
                <ProfileTabButton 
                  label="About" 
                  active={profileTab === 'about'} 
                  onClick={() => setProfileTab('about')} 
                />
                <ProfileTabButton 
                  label="Posts" 
                  active={profileTab === 'posts'} 
                  onClick={() => setProfileTab('posts')} 
                />
                <ProfileTabButton 
                  label="Courses" 
                  active={profileTab === 'courses'} 
                  onClick={() => setProfileTab('courses')} 
                />
                <ProfileTabButton 
                  label="Projects" 
                  active={profileTab === 'projects'} 
                  onClick={() => setProfileTab('projects')} 
                />
                <ProfileTabButton 
                  label="Activities" 
                  active={profileTab === 'activities'} 
                  onClick={() => setProfileTab('activities')} 
                />
              </nav>
            </div>
            
            {/* Tab Content */}
            <div className="p-6">
              {profileTab === 'about' && <AboutTabContent />}
              {profileTab === 'posts' && <PostsTabContent />}
              {profileTab === 'courses' && <CoursesTabContent />}
              {profileTab === 'projects' && <ProjectsTabContent />}
              {profileTab === 'activities' && <ActivitiesTabContent />}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

interface ProfileTabButtonProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

const ProfileTabButton: React.FC<ProfileTabButtonProps> = ({ label, active, onClick }) => {
  return (
    <button
      className={`px-4 py-3 text-sm font-medium border-b-2 ${
        active
          ? 'border-primary-blue text-primary-blue'
          : 'border-transparent text-medium-gray hover:text-dark-gray hover:border-gray-300'
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

const AboutTabContent: React.FC = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">About</h3>
      
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-dark-blue mb-2">Bio</h4>
        <p className="text-sm">
          Computer Engineering student at University of Peradeniya with a passion for software development and AI. 
          Currently exploring machine learning applications in healthcare and working on several open-source projects.
        </p>
      </div>
      
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-dark-blue mb-2">Academic Information</h4>
        <div className="space-y-3">
          <div className="flex">
            <div className="w-1/3 text-sm text-medium-gray">Department</div>
            <div className="w-2/3 text-sm">Computer Engineering</div>
          </div>
          <div className="flex">
            <div className="w-1/3 text-sm text-medium-gray">Year of Study</div>
            <div className="w-2/3 text-sm">3rd Year (2023-2027)</div>
          </div>
          <div className="flex">
            <div className="w-1/3 text-sm text-medium-gray">Academic Advisor</div>
            <div className="w-2/3 text-sm">Dr. Damayanthi Herath</div>
          </div>
          <div className="flex">
            <div className="w-1/3 text-sm text-medium-gray">Research Interests</div>
            <div className="w-2/3 text-sm">Machine Learning, Software Engineering, Computer Networks</div>
          </div>
        </div>
      </div>
      
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-dark-blue mb-2">Skills</h4>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-light-blue text-primary-blue rounded-full text-xs">Python</span>
          <span className="px-3 py-1 bg-light-blue text-primary-blue rounded-full text-xs">Java</span>
          <span className="px-3 py-1 bg-light-blue text-primary-blue rounded-full text-xs">JavaScript</span>
          <span className="px-3 py-1 bg-light-blue text-primary-blue rounded-full text-xs">React</span>
          <span className="px-3 py-1 bg-light-blue text-primary-blue rounded-full text-xs">TensorFlow</span>
          <span className="px-3 py-1 bg-light-blue text-primary-blue rounded-full text-xs">SQL</span>
          <span className="px-3 py-1 bg-light-blue text-primary-blue rounded-full text-xs">Git</span>
          <span className="px-3 py-1 bg-light-blue text-primary-blue rounded-full text-xs">Docker</span>
        </div>
      </div>
      
      <div>
        <h4 className="text-sm font-semibold text-dark-blue mb-2">Contact Information</h4>
        <div className="space-y-3">
          <div className="flex">
            <div className="w-1/3 text-sm text-medium-gray">Email</div>
            <div className="w-2/3 text-sm">john.student@eng.pdn.ac.lk</div>
          </div>
          <div className="flex">
            <div className="w-1/3 text-sm text-medium-gray">Phone</div>
            <div className="w-2/3 text-sm">+94 71 234 5678</div>
          </div>
          <div className="flex">
            <div className="w-1/3 text-sm text-medium-gray">LinkedIn</div>
            <div className="w-2/3 text-sm">
              <a href="#" className="text-primary-blue hover:underline">linkedin.com/in/johnstudent</a>
            </div>
          </div>
          <div className="flex">
            <div className="w-1/3 text-sm text-medium-gray">GitHub</div>
            <div className="w-2/3 text-sm">
              <a href="#" className="text-primary-blue hover:underline">github.com/johnstudent</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PostsTabContent: React.FC = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Posts</h3>
      
      <div className="space-y-6">
        {/* Sample Post 1 */}
        <div className="border-b border-light-gray pb-6">
          <div className="flex items-center mb-3">
            <div className="text-xs text-medium-gray">Posted on May 15, 2025</div>
            <div className="ml-auto flex space-x-2">
              <button className="text-medium-gray hover:text-primary-blue">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
              </button>
              <button className="text-medium-gray hover:text-primary-blue">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
              </button>
            </div>
          </div>
          <p className="text-sm mb-3">
            Just finished implementing a neural network model for my machine learning project. 
            The results are promising with 92% accuracy on the test dataset. 
            Looking forward to presenting this at the AI Research Group meeting next week!
          </p>
          <div className="bg-light-gray p-4 rounded-lg mb-3">
            <div className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-blue mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <div>
                <p className="font-medium">ML_Project_Results.pdf</p>
                <a href="#" className="text-primary-blue hover:underline text-xs">View document</a>
              </div>
            </div>
          </div>
          <div className="flex items-center text-xs text-medium-gray">
            <div className="flex items-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
              </svg>
              18 likes
            </div>
            <div className="flex items-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              7 comments
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
              3 shares
            </div>
          </div>
        </div>
        
        {/* Sample Post 2 */}
        <div className="border-b border-light-gray pb-6">
          <div className="flex items-center mb-3">
            <div className="text-xs text-medium-gray">Posted on May 10, 2025</div>
            <div className="ml-auto flex space-x-2">
              <button className="text-medium-gray hover:text-primary-blue">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
              </button>
              <button className="text-medium-gray hover:text-primary-blue">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
              </button>
            </div>
          </div>
          <p className="text-sm mb-3">
            Our team won the 2nd place at the Inter-University Coding Competition! 
            Proud of what we accomplished together. Special thanks to my teammates 
            Kavishka and Uthsara for their amazing work on the algorithm optimization.
          </p>
          <div className="rounded-lg overflow-hidden mb-3">
            <img 
              src="https://via.placeholder.com/800x400/E3F2FD/1E88E5?text=Coding+Competition+Winners" 
              alt="Coding Competition Winners" 
              className="w-full h-auto"
            />
          </div>
          <div className="flex items-center text-xs text-medium-gray">
            <div className="flex items-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
              </svg>
              42 likes
            </div>
            <div className="flex items-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              15 comments
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
              8 shares
            </div>
          </div>
        </div>
        
        <button className="btn-secondary w-full">Load More Posts</button>
      </div>
    </div>
  );
};

const CoursesTabContent: React.FC = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Courses</h3>
      
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-dark-blue mb-3">Current Semester</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <CourseCard 
            code="CS3052" 
            name="Computer Networks" 
            instructor="Dr. Damayanthi Herath"
            progress={75}
          />
          <CourseCard 
            code="CS3022" 
            name="Software Engineering" 
            instructor="Prof. Roshan Ragel"
            progress={80}
          />
          <CourseCard 
            code="CS3032" 
            name="Database Systems" 
            instructor="Dr. Upul Jayasinghe"
            progress={65}
          />
          <CourseCard 
            code="CS3042" 
            name="Systems and Network Administration" 
            instructor="Dr. Suneth Namal"
            progress={70}
          />
        </div>
      </div>
      
      <div>
        <h4 className="text-sm font-semibold text-dark-blue mb-3">Previous Courses</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <CourseCard 
            code="CS2022" 
            name="Data Structures and Algorithms" 
            instructor="Dr. Asitha Bandaranayake"
            progress={100}
            grade="A"
          />
          <CourseCard 
            code="CS2062" 
            name="Object-Oriented Programming" 
            instructor="Dr. Lakmal Rupasinghe"
            progress={100}
            grade="A-"
          />
          <CourseCard 
            code="CS2042" 
            name="Operating Systems" 
            instructor="Prof. Roshan Ragel"
            progress={100}
            grade="B+"
          />
          <CourseCard 
            code="CS2032" 
            name="Computer Architecture" 
            instructor="Dr. Damayanthi Herath"
            progress={100}
            grade="A"
          />
        </div>
      </div>
    </div>
  );
};

interface CourseCardProps {
  code: string;
  name: string;
  instructor: string;
  progress: number;
  grade?: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ code, name, instructor, progress, grade }) => {
  return (
    <div className="border border-light-gray rounded-lg p-4">
      <div className="flex justify-between items-start mb-2">
        <div>
          <div className="text-xs font-semibold text-primary-blue">{code}</div>
          <h4 className="text-sm font-semibold">{name}</h4>
        </div>
        {grade && (
          <div className="bg-light-blue text-primary-blue rounded-full px-2 py-1 text-xs font-bold">
            {grade}
          </div>
        )}
      </div>
      <p className="text-xs text-medium-gray mb-3">Instructor: {instructor}</p>
      <div className="mb-2">
        <div className="flex justify-between text-xs mb-1">
          <span>Progress</span>
          <span>{progress}%</span>
        </div>
        <div className="w-full bg-light-gray rounded-full h-2">
          <div 
            className="bg-primary-blue rounded-full h-2" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      <div className="flex justify-end">
        <button className="text-primary-blue text-xs hover:underline">View Details</button>
      </div>
    </div>
  );
};

const ProjectsTabContent: React.FC = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Projects</h3>
      
      <div className="space-y-6">
        <ProjectCard 
          title="Healthcare ML Diagnosis Assistant" 
          description="A machine learning system that assists in medical diagnosis by analyzing patient symptoms and medical history. Implemented using TensorFlow and Python with a React frontend."
          technologies={['Python', 'TensorFlow', 'React', 'Flask']}
          timeline="Jan 2025 - Present"
          collaborators={['Kavishka Rambukwalle', 'Uthsara Wickramaarachchi']}
          links={[
            { label: 'GitHub Repository', url: '#' },
            { label: 'Project Documentation', url: '#' }
          ]}
        />
        
        <ProjectCard 
          title="University Resource Management System" 
          description="A microservices-based system for managing university resources including classrooms, labs, and equipment. Features include booking, scheduling, and usage analytics."
          technologies={['Java', 'Spring Boot', 'Docker', 'PostgreSQL', 'React']}
          timeline="Sep 2024 - Dec 2024"
          collaborators={['Kavindu Bambaragama', 'Manodya Senevirathna']}
          links={[
            { label: 'GitHub Repository', url: '#' },
            { label: 'Live Demo', url: '#' }
          ]}
        />
        
        <ProjectCard 
          title="Smart Campus IoT Network" 
          description="An IoT network for monitoring environmental conditions across the university campus. Collects data on temperature, humidity, air quality, and occupancy to optimize energy usage."
          technologies={['Arduino', 'Raspberry Pi', 'MQTT', 'Node.js', 'InfluxDB']}
          timeline="Mar 2024 - Jun 2024"
          collaborators={['Harith Abesinghe', 'Ravindu Pathirage']}
          links={[
            { label: 'Project Report', url: '#' },
            { label: 'Presentation Slides', url: '#' }
          ]}
        />
      </div>
    </div>
  );
};

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  timeline: string;
  collaborators: string[];
  links: { label: string; url: string }[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  technologies, 
  timeline, 
  collaborators, 
  links 
}) => {
  return (
    <div className="border border-light-gray rounded-lg p-6">
      <h4 className="text-md font-semibold mb-2">{title}</h4>
      <p className="text-sm text-medium-gray mb-1">{timeline}</p>
      <p className="text-sm mb-4">{description}</p>
      
      <div className="mb-4">
        <h5 className="text-xs font-semibold text-dark-blue mb-2">Technologies</h5>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span key={index} className="px-2 py-1 bg-light-blue text-primary-blue rounded-full text-xs">
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      <div className="mb-4">
        <h5 className="text-xs font-semibold text-dark-blue mb-2">Collaborators</h5>
        <div className="flex flex-wrap gap-2">
          {collaborators.map((person, index) => (
            <a 
              key={index} 
              href="#" 
              className="text-xs text-primary-blue hover:underline"
            >
              {person}
              {index < collaborators.length - 1 && ', '}
            </a>
          ))}
        </div>
      </div>
      
      <div>
        <h5 className="text-xs font-semibold text-dark-blue mb-2">Links</h5>
        <div className="flex flex-wrap gap-4">
          {links.map((link, index) => (
            <a 
              key={index} 
              href={link.url} 
              className="text-xs text-primary-blue hover:underline flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const ActivitiesTabContent: React.FC = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Activities</h3>
      
      <div className="space-y-6">
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-dark-blue mb-3">University Organizations</h4>
          <div className="space-y-4">
            <ActivityCard 
              title="Hackers' Club UOP" 
              role="Active Member"
              period="2023 - Present"
              description="Participate in coding workshops, hackathons, and community projects. Helped organize the Annual Coding Competition and mentored junior students."
            />
            <ActivityCard 
              title="AI Research Group" 
              role="Research Assistant"
              period="2024 - Present"
              description="Assist in research projects focused on machine learning applications in healthcare. Collaborate with faculty and graduate students on data collection and model development."
            />
            <ActivityCard 
              title="Engineering Society" 
              role="Technical Committee Member"
              period="2023 - Present"
              description="Manage technical aspects of society events including the Annual Engineering Exhibition. Develop and maintain the society's website and digital platforms."
            />
          </div>
        </div>
        
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-dark-blue mb-3">Competitions & Events</h4>
          <div className="space-y-4">
            <ActivityCard 
              title="Inter-University Coding Competition" 
              role="Team Lead"
              period="May 2025"
              description="Led a team of three students to secure 2nd place in the national competition. Specialized in algorithm optimization and problem-solving strategies."
            />
            <ActivityCard 
              title="Google Developer Student Club Hackathon" 
              role="Participant"
              period="November 2024"
              description="Developed a sustainable technology solution for campus waste management using IoT sensors and data analytics. Received honorable mention for innovation."
            />
            <ActivityCard 
              title="IEEE Student Branch Technical Symposium" 
              role="Speaker"
              period="March 2024"
              description="Presented research on 'Machine Learning Applications in University Resource Optimization' to an audience of students and faculty members."
            />
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-semibold text-dark-blue mb-3">Volunteer Work</h4>
          <div className="space-y-4">
            <ActivityCard 
              title="Code for Schools Initiative" 
              role="Volunteer Instructor"
              period="2024 - Present"
              description="Teach basic programming concepts to high school students in underserved communities. Develop curriculum and conduct weekly workshops."
            />
            <ActivityCard 
              title="University Open Day" 
              role="Department Representative"
              period="July 2024"
              description="Represented the Computer Engineering department to prospective students and parents. Demonstrated student projects and answered questions about the program."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

interface ActivityCardProps {
  title: string;
  role: string;
  period: string;
  description: string;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ title, role, period, description }) => {
  return (
    <div className="border-l-2 border-primary-blue pl-4 py-1">
      <div className="flex justify-between items-start mb-1">
        <h5 className="text-sm font-semibold">{title}</h5>
        <span className="text-xs text-medium-gray">{period}</span>
      </div>
      <p className="text-xs font-medium text-primary-blue mb-1">{role}</p>
      <p className="text-xs">{description}</p>
    </div>
  );
};

export default ProfilePage;
