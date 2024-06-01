import React from 'react';
import CreatePostBox from '../../components/atoms/post/CreatePostBox';
import Story from '../../components/atoms/story';
import PostContainer from '../../components/container/PostContainer';
import { storiesData } from '../../data';

const NewsFeed: React.FC = () => {
  return (
    <div className="mt-6 h-full w-full pb-5">
      {/* Story Section */}
      <div className="h-50 my-6 flex w-full cursor-pointer items-center justify-center space-x-2 overflow-hidden">
        <div
          className="relative h-48 w-28 rounded-xl shadow"
          style={{
            backgroundImage: `url('https://random.imagecdn.app/500/400')`,
          }}
        >
          <div
            className="absolute flex w-full justify-center"
            style={{ bottom: '13%' }}
          >
            <button className="z-40 h-10 w-10 rounded-full border-4 border-white bg-primary focus:outline-none">
              <i className="fas fa-plus text-white"></i>
            </button>
          </div>
          <div className="absolute bottom-0 z-30 h-auto w-full rounded-b-lg bg-white p-2 pt-4 text-center">
            <p className="text-sm font-semibold text-gray-500">Create Story</p>
          </div>
        </div>
        {storiesData.length
          ? storiesData.map((story, idx) => <Story key={idx} story={story} />)
          : null}
      </div>
      {/* Create Post       */}
      <CreatePostBox />
      {/* All posts */}
      <PostContainer />
    </div>
  );
};

export default NewsFeed;
