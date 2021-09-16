import Left from "./Hero/Left";
import Right from "./Hero/Right";

const Hero = () => {
  return (
    <div className="lg:grid lg:grid-cols-2">
      <div className="lg:flex lg:h-screen pt-5 lg:pt-0 -mt-16">
        <Left />
      </div>
      <div>
        <Right />
      </div>
    </div>
  );
};

export default Hero;
