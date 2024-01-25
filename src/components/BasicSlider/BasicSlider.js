import React from "react";
// JSX
import HeroSlider, { Slide, Nav, OverlayContainer } from "hero-slider";
// import Wrapper from "../UI/Wrapper/Wrapper";
// import Title from "../UI/Title/Title";
// import Subtitle from "../UI/Subtitle/Subtitle";

// Images
const imgs = [];
for(let i = 1; i <= 16; i++) {
  imgs.push(require(`../../assets/Slide${i}.jpeg`));
}

const app = () => {
  return (
    <HeroSlider
      slidingAnimation="left_to_right"
      orientation="horizontal"
      initialSlide={1}
      onBeforeChange={(previousSlide, nextSlide) =>
        console.log("onBeforeChange", previousSlide, nextSlide)
      }
      onChange={nextSlide => console.log("onChange", nextSlide)}
      onAfterChange={nextSlide => console.log("onAfterChange", nextSlide)}
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.33)"
      }}
      settings={{
        slidingDuration: 250,
        slidingDelay: 100,
        shouldAutoplay: true,
        shouldDisplayButtons: true,
        autoplayDuration: 5000,
        height: "100vh"
      }}
    >
      {/* <OverlayContainer>
      </OverlayContainer> */}

      {imgs.map((content, index) => 
        <Slide
          key={index} background={{
            backgroundImage: content,
          }}
         />
      )}
      

      <Nav />
    </HeroSlider>
  );
};

export default app;
