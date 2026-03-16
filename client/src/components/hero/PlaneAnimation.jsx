import { DotLottiePlayer } from '@dotlottie/react-player';

const PlaneAnimation = () => {
  return (
    <div className="absolute top-16 md:top-24 left-[70%] lg:left-[74%] w-[100px] lg:w-[120px] pointer-events-none z-0 hidden md:block animate-float">
      <DotLottiePlayer
        src="/plane.lottie"
        loop
        autoplay
      />
    </div>
  );
};

export default PlaneAnimation;