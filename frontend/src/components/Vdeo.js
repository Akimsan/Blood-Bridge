import React from 'react';

const Video = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-lg aspect-w-16 aspect-h-9 h-full">
        <iframe
          className="w-full h-full"
          src="https://giphy.com/embed/YYTdW6yESci0fYpSYU"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded video"
        ></iframe>
      </div>
    </div>
  );
};

export default Video;
