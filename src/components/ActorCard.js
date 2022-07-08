import React from 'react';

export const ActorCard = ({ actor }) => {
  return actor ? (
    <div>
      {actor.name} as {actor.character}
    </div>
  ) : (
    <></>
  );
};
