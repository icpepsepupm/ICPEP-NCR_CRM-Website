import CountUp from "../components/CountUp";
import PictureBox from "../components/PictureBox";

function Hero() {
  return (
    <div className="min-h-screen text-foreground pt-16 pb-8 md:pt-20 md:pb-0 flex flex-col md:flex-row items-center justify-center m-auto px-4 md:px-8 gap-6 md:gap-0 text-center md:text-left">
      <div className="w-full md:w-1/2 flex justify-center items-center px-2 sm:px-4 md:px-0">
        <PictureBox
          images={[
            "/memories/0.jpg",
            "/memories/1.jpg",
            "/memories/2.jpg",
            "/memories/3.jpg",
            "/memories/4.jpg",
            "/memories/5.jpg",
            "/memories/6.jpg",
            "/memories/7.jpg",
          ]}
          alt="ICpEP.se NCR Hero Image"
          className="h-[220px] sm:h-[300px] md:h-[400px] w-full max-w-[90%] sm:max-w-[400px] md:max-w-[600px]"
          interval={3000}
        />
      </div>
      <div>
        <div className="w-full md:ml-0 max-w-xl space-y-3 md:space-y-4">
          <p className="text-4xl sm:text-5xl md:text-6xl font-bold relative text-primary text-glow">
            ICpEP.se NCR
          </p>
          <p className="text-xl sm:text-2xl md:text-3xl font-bold">
            A.Y. 2025-2026
          </p>
          <p className="text-sm sm:text-base md:text-lg">
            ICPEP is a dynamic student organization fostering collaboration,
            innovation, and growth in computer engineering.
          </p>

          <hr className="my-4 mt-8 border-t border-[#89E9FF] opacity-20 w-1/2 md:w-[80%] md:mr-20 mx-auto md:mx-0" />
          <div className="flex flex-row gap-1 md:gap-1 justify-center md:justify-start items-center">
            <div className="flex flex-row gap-10 md:gap-30 ">
              <div className="text-xl md:text-lg font-bold">
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
              </div>
              <div className="text-xl md:text-lg font-bold">
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
              </div>
              <div className="text-xl md:text-lg font-bold">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
