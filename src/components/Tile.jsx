import React from 'react';

const Tile = ({ tag }) => (
  <div className="flex-shrink-0 p-8 mr-3 rounded-lg bg-red-200 shadow-lg">
    {tag}
  </div>
);

export default Tile;
