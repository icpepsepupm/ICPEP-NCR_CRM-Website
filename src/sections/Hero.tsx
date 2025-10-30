import Embed3DModel from "../components/Embed3DModel";
import { Button } from "../components/ui/button";
import CountUp from "../components/CountUp";

function Hero() {
  return (
    <div className="h-screen text-foreground flex flex-col md:flex-row items-center justify-center m-auto px-4 md:px-8 gap-8 md:gap-12 text-center md:text-left">
      <div className="relative w-full h-64 sm:h-80 md:h-[80vh] mt-6 md:mt-24">
        <Embed3DModel />
      </div>
      <div></div>
      <div className="w-full md:ml-0 max-w-xl space-y-3 md:space-y-4">
        <p
          className="text-4xl sm:text-5xl md:text-6xl font-bold relative"
          style={{
            textShadow: "0 0 8px #7ff0fe, 0 0 16px #89E9FF",
          }}
        >
          ICpEP.se NCR
        </p>
        <p className="text-xl sm:text-2xl md:text-3xl font-bold">
          A.Y. 2025-2026
        </p>
        <p className="text-sm sm:text-base md:text-lg">
          ICPEP is a dynamic student organization fostering collaboration,
          innovation, and growth in computer engineering.
        </p>
        <div className="flex flex-wrap gap-3 md:gap-4 justify-center md:justify-start">
          <Button
            className="mt-4 text-primary-foreground bg-white"
            variant="default"
          >
            Login
          </Button>
          <Button
            className="mt-4 border border-opacity-100"
            style={{ borderColor: "#89E9FF" }}
            variant="outline"
          >
            Register
          </Button>
        </div>
        <hr className="my-4 mt-8 border-t border-[#89E9FF] opacity-20 w-1/2 md:w-[80%] md:mr-20 mx-auto md:mx-0" />
        <div className="flex flex-row gap-1 md:gap-1 justify-center md:justify-start items-center">
          <div className="flex flex-row gap-10 md:gap-30 ">
            <p className="text-xl md:text-lg font-bold">
              <CountUp
                from={0}
                to={1000}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text"
              />
              {"+"}
              <br />
              <p className="text-sm md:text-xs">Members</p>
            </p>
            <p className="text-xl md:text-lg font-bold">
              <CountUp
                from={0}
                to={100}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text"
              />
              {"+"}
              <br />
              <p className="text-sm md:text-xs">Events </p>
            </p>
            <p className="text-xl md:text-lg font-bold">
              <CountUp
                from={0}
                to={33}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text"
              />{" "}
              <br />
              <p className="text-sm md:text-xs">Years</p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
