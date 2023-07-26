import React, { useRef } from 'react';
import Button from './Button';
import '../App.css';
import './HeroSection.css';
import video from '../videos/video-1.mp4';

function HeroSection() {
  const playingVideo = useRef(null);
  const stopVideo = () => {
    playingVideo.current.style.background = 'unset';
  };
  return (
    <div className="hero-container" ref={playingVideo}>
      <video src={video} autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          dest="/sign-up"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={() => {
            stopVideo();
          }}
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
