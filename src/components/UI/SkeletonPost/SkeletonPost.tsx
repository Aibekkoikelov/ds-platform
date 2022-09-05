import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader = () => (
  <ContentLoader
    speed={2}
    width={1300}
    height={700}
    viewBox="0 0 800 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <rect x="22" y="722" rx="0" ry="0" width="888" height="358" />
    <rect x="5" y="40" rx="0" ry="0" width="580" height="300" />
    <circle cx="33" cy="391" r="25" />
    <rect x="75" y="371" rx="5" ry="5" width="178" height="16" />
    <rect x="75" y="395" rx="5" ry="5" width="178" height="16" />
    <rect x="75" y="426" rx="5" ry="5" width="235" height="37" />
    <rect x="220" y="450" rx="0" ry="0" width="7" height="0" />
    <rect x="80" y="477" rx="0" ry="0" width="45" height="18" />
    <rect x="136" y="477" rx="0" ry="0" width="45" height="18" />
    <circle cx="94" cy="515" r="11" />
    <rect x="119" y="504" rx="0" ry="0" width="20" height="20" />
  </ContentLoader>
);

export default MyLoader;
