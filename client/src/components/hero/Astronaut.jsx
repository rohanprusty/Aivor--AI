import { DotLottiePlayer } from '@dotlottie/react-player';

const Astronaut = () => {
  return (
    <div className="absolute right-0 lg:right-6 top-[60%] w-[230px] lg:w-[320px] pointer-events-none animate-float z-0 hidden md:block">
      <DotLottiePlayer
        src="/astronaut.lottie"
        loop
        autoplay
      />
    </div>
  );
};

export default Astronaut;