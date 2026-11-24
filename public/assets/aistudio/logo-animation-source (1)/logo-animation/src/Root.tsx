import React from 'react';
import {Composition} from 'remotion';
import {LogoReveal} from './LogoReveal';
import {CamelliaFlow} from './CamelliaFlow';

export const RemotionRoot: React.FC = () => (
  <>
    <Composition
      id="LogoReveal"
      component={LogoReveal}
      durationInFrames={180} // 3 seconds @ 60 fps
      fps={60}
      width={1920}
      height={1080}
      defaultProps={{transparent: false}}
    />
    <Composition
      id="CamelliaFlow"
      component={CamelliaFlow}
      durationInFrames={240} // 4 seconds @ 60 fps
      fps={60}
      width={1500}
      height={1000}
      defaultProps={{transparent: false}}
    />
  </>
);
