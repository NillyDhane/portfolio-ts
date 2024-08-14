import "./Styles/App.css";
import Header from "./components/Header";
import Particles from "./components/magicui/particles";
import TypingAnimation from "./components/magicui/typing-animation";
import BlurFade from "./components/magicui/blur-fade";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div>
      <Header />
      <div className="backgroundParticles relative h-screen w-screen">
        <Particles className="absolute inset-0 z-0" />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 space-y-6">
          <TypingAnimation
            className="text-center text-black"
            text="Hey, Nilacksha here!"
          />
          <BlurFade delay={3.25} inView inViewMargin="-50px">
            <h2
              className="text-sm sm:text-base md:text-lg lg:text-xl 
  xl:text-2xl 
  font-thin tracking-wider 
  text-center text-black max-w-3xl px-4 sm:px-6 md:px-8 lg:px-10"
            >
              I'm currently a second year Software Engineering student spending
              his freetime learning full-stack web development. In my spare time
              I have a passion for tech, fitness, and cars.
            </h2>
          </BlurFade>
          <Analytics />
        </div>
      </div>
    </div>
  );
}

export default App;
