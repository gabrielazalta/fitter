import React from 'react';
import { Link } from 'react-router-dom';


const StoryList = ({ stories, title }) => {
  if (!stories.length) {
    return <h3 className="body-text" style={{color: 'black', fontSize: '26px'}}>No Stories Yet</h3>;
  }

  return (
    <div>
      <h3 className="body-text" style={{color: 'black', fontSize: '26px', fontWeight: 'bold'}}>{title}</h3>
      {stories &&
        stories.map(story => (
          <div key={story._id} className="card mb-3">
            <p className="card-header body-text" style={{color: 'black'}}>
              <Link
                to={`/profile/${story.username}`}
                style={{ fontWeight: 700 }}
                className="text-light"
              >
                {story.username}
              </Link>{' '}
              Story on {story.createdAt}
            </p>
            <div className="card-body body-text">
              <Link to={`/story/${story._id}`}>
                <p className="body-text">{story.storyText}</p>
                <p className="mb-0 body-text">
                  Reactions: {story.reactionCount}  ||  Click to{' '}
                  {story.reactionCount ? 'see' : 'start'} the discussion!
                </p>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default StoryList;