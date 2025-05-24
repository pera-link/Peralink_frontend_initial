import React, { useState } from 'react';

interface PostData {
  id: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  content: string;
  timestamp: string;
  likes: number;
  comments: number;
  shares: number;
  hasLiked: boolean;
  media?: {
    type: 'image' | 'document';
    url: string;
    caption?: string;
  }[];
}

interface FeedProps {
  posts: PostData[];
}

const Feed: React.FC<FeedProps> = ({ posts }) => {
  return (
    <div className="flex-1 max-w-2xl mx-auto px-4 py-6">
      {/* Create Post Card */}
      <CreatePostCard />
      
      {/* Posts Feed */}
      <div className="space-y-6 mt-6">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

const CreatePostCard: React.FC = () => {
  return (
    <div className="card">
      <div className="flex items-start space-x-3">
        <div className="h-10 w-10 rounded-full bg-primary-blue flex items-center justify-center text-white">
          <span className="text-sm font-medium">JS</span>
        </div>
        <div className="flex-1">
          <button className="w-full text-left px-4 py-2 bg-light-gray rounded-full text-medium-gray hover:bg-gray-200 transition-colors">
            What's on your mind?
          </button>
          <div className="flex justify-between mt-4">
            <button className="flex items-center text-medium-gray hover:text-primary-blue">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-sm">Photo</span>
            </button>
            <button className="flex items-center text-medium-gray hover:text-primary-blue">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="text-sm">Document</span>
            </button>
            <button className="flex items-center text-medium-gray hover:text-primary-blue">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
              <span className="text-sm">Poll</span>
            </button>
            <button className="flex items-center text-medium-gray hover:text-primary-blue">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span className="text-sm">Video</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface PostCardProps {
  post: PostData;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const [liked, setLiked] = useState(post.hasLiked);
  const [likesCount, setLikesCount] = useState(post.likes);
  const [showComments, setShowComments] = useState(false);
  
  const handleLike = () => {
    if (liked) {
      setLikesCount(likesCount - 1);
    } else {
      setLikesCount(likesCount + 1);
    }
    setLiked(!liked);
  };
  
  return (
    <div className="card">
      {/* Post Header */}
      <div className="flex items-center mb-4">
        {post.author.avatar ? (
          <img 
            src={post.author.avatar} 
            alt={`${post.author.name}'s avatar`} 
            className="h-10 w-10 rounded-full mr-3"
          />
        ) : (
          <div className="h-10 w-10 rounded-full bg-primary-blue flex items-center justify-center text-white mr-3">
            <span className="text-sm font-medium">{post.author.name.split(' ').map(n => n[0]).join('')}</span>
          </div>
        )}
        <div className="flex-1">
          <h4 className="text-sm font-semibold">{post.author.name}</h4>
          <p className="text-xs text-medium-gray flex items-center">
            {post.author.role} • {post.timestamp}
            <span className="mx-1">•</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </p>
        </div>
        <button className="text-medium-gray hover:text-dark-gray">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
          </svg>
        </button>
      </div>
      
      {/* Post Content */}
      <div className="mb-4">
        <p className="text-sm mb-4">{post.content}</p>
        
        {/* Media Content */}
        {post.media && post.media.length > 0 && (
          <div className="rounded-lg overflow-hidden bg-light-gray">
            {post.media.map((item, index) => (
              <div key={index} className="w-full">
                {item.type === 'image' ? (
                  <img src={item.url} alt={item.caption || 'Post image'} className="w-full h-auto" />
                ) : (
                  <div className="p-4 flex items-center text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-blue mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <div>
                      <p className="font-medium">{item.caption || 'Document'}</p>
                      <a href={item.url} className="text-primary-blue hover:underline">View document</a>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Engagement Stats */}
      <div className="flex items-center justify-between text-xs text-medium-gray py-2 border-t border-b border-light-gray">
        <div>
          {likesCount > 0 && (
            <span className="flex items-center">
              <span className="inline-flex items-center justify-center h-4 w-4 rounded-full bg-primary-blue mr-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-2 w-2 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                </svg>
              </span>
              {likesCount}
            </span>
          )}
        </div>
        <div className="flex space-x-4">
          {post.comments > 0 && <span>{post.comments} comments</span>}
          {post.shares > 0 && <span>{post.shares} shares</span>}
        </div>
      </div>
      
      {/* Action Buttons */}
      <div className="flex justify-between pt-2">
        <button 
          className={`flex items-center justify-center w-1/3 py-1 text-sm rounded-md ${
            liked ? 'text-primary-blue' : 'text-medium-gray hover:bg-light-gray'
          }`}
          onClick={handleLike}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 mr-1" 
            fill={liked ? "currentColor" : "none"} 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={liked ? 0 : 2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
          </svg>
          Like
        </button>
        <button 
          className="flex items-center justify-center w-1/3 py-1 text-sm text-medium-gray hover:bg-light-gray rounded-md"
          onClick={() => setShowComments(!showComments)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          Comment
        </button>
        <button className="flex items-center justify-center w-1/3 py-1 text-sm text-medium-gray hover:bg-light-gray rounded-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
          Share
        </button>
      </div>
      
      {/* Comments Section */}
      {showComments && (
        <div className="mt-4 pt-4 border-t border-light-gray">
          <div className="flex items-start space-x-3 mb-4">
            <div className="h-8 w-8 rounded-full bg-primary-blue flex items-center justify-center text-white">
              <span className="text-xs font-medium">JS</span>
            </div>
            <div className="flex-1 relative">
              <input 
                type="text" 
                placeholder="Write a comment..." 
                className="w-full py-2 px-4 bg-light-gray rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary-blue"
              />
              <button className="absolute right-3 top-2 text-primary-blue">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
          
          {post.comments > 0 ? (
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="h-8 w-8 rounded-full bg-secondary-blue flex items-center justify-center text-white">
                  <span className="text-xs font-medium">AW</span>
                </div>
                <div>
                  <div className="bg-light-gray rounded-lg px-3 py-2">
                    <p className="text-xs font-semibold">Akash Withanaarachchi</p>
                    <p className="text-xs">Great post! This is really helpful for our upcoming project.</p>
                  </div>
                  <div className="flex items-center mt-1 text-xs text-medium-gray">
                    <button className="font-medium hover:text-primary-blue">Like</button>
                    <span className="mx-2">•</span>
                    <button className="font-medium hover:text-primary-blue">Reply</button>
                    <span className="mx-2">•</span>
                    <span>2h</span>
                  </div>
                </div>
              </div>
              
              {post.comments > 1 && (
                <button className="text-primary-blue text-sm hover:underline ml-11">
                  View more comments
                </button>
              )}
            </div>
          ) : (
            <p className="text-center text-medium-gray text-sm py-2">No comments yet. Be the first to comment!</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Feed;
