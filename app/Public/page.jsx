import React from 'react';

const Public = () => {
  return (
    <div>
      <h1>Public</h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <video width='20%' controls>
          <source src='/videos/testvideo_16-9_high.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
        <video width='20%' controls>
          <source src='/videos/testvideo_4-5_high.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Public;
