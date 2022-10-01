import React from 'react';
import Tile from './Tile';

const TileContainer = ({ tileContent, title }) => (
  <>
    <h3 className="flex w-full mt-10 mb-3 justify-center text-xl text-bold">{title}</h3>
    <div className="flex overflow-x-scroll ml-2">
      {tileContent.map((tag, idx) => (
        <Tile tag={tag} key={idx} />
      ))}
    </div>
  </>
);

export default TileContainer;
