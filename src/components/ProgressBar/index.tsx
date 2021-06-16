import React from 'react';

import { Bar, Wrapper } from './styles';

export const ProgressBar = (props: {
  progress: number;
  end: number;
  Loader: JSX.Element;
}) => {
  const { end, Loader, progress } = props;
  return (
    <Wrapper fadeOut={progress === end}>
      {Loader}
      <Bar progress={progress} end={end}>
        <span></span>
      </Bar>
    </Wrapper>
  );
};
