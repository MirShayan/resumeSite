import React, { useState } from "react";
import {
  ArrowForward,
  ArrowRight,
  HeroBg,
  HeroBtnWrapper,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  VideoBg,
} from "./HeroStyled";
import videoSrc from "../../assets/video/rodnae-productions.mp4";
import { Button } from "../Button/ButtonStyled";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const handleHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={videoSrc} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>JS is the King</HeroH1>
        <HeroP>Learning JS and Frameworks</HeroP>
        <HeroBtnWrapper>
          <Button to="/" primary onMouseEnter={handleHover} onMouseLeave={handleHover}>
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
