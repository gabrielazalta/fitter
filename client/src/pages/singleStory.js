import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_STORY } from '../utils/queries';
import ReactionList from '../components/ReactionList';
import Auth from '../utils/auth';
import ReactionForm from '../components/ReactionForm'



const SingleStory = props => {

  const { id: storyId } = useParams();
  const { loading, data } = useQuery(QUERY_STORY, {
    variables: { id: storyId }
  });
  
  const story = data?.story || {};
  
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="m-4 p-3 body-card">
      <div className="card mb-3">
        <p className="reaction-story card-header">
          <span style={{ fontWeight: 700 }} className="reaction-story text-light">
            {story.username}
          </span>{' '}
          Story on {story.createdAt}
        </p>
        <div className="reaction-story card-body">
          <p className="reaction-story">{story.storyText}</p>
        </div>
      </div>

      {story.reactionCount > 0 && <ReactionList reactions={story.reactions} />}
      {Auth.loggedIn() && <ReactionForm storyId={story._id} />}

    </div>
  );
};

export default SingleStory;
