import Embed3DModel from "../components/Embed3DModel";
import { Button } from "../components/ui/button";
import CountUp from "../components/CountUp";
import { motion } from "motion/react";

function Hero() {
  return (
    <motion.div
      className="h-screen text-foreground flex flex-col md:flex-row items-center justify-center m-auto px- md:px-8 gap-8 md:gap-0 text-center md:text-left"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="w-full md:w-1/2">
        <motion.div
          className="relative w-full h-64 sm:h-80 md:h-[80vh]  space-y-8 md:space-y-0"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        >
          <Embed3DModel />
        </motion.div>
      </div>
      <div>
        <motion.div
          className="w-full md:ml-0 max-w-xl space-y-3 md:space-y-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <motion.p
            className="text-4xl sm:text-5xl md:text-6xl font-bold relative"
            style={{
              textShadow: "0 0 8px #7ff0fe, 0 0 16px #89E9FF",
            }}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            ICpEP.se NCR
          </motion.p>
          <motion.p
            className="text-xl sm:text-2xl md:text-3xl font-bold"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            A.Y. 2025-2026
          </motion.p>
          <motion.p
            className="text-sm sm:text-base md:text-lg"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            ICPEP is a dynamic student organization fostering collaboration,
            innovation, and growth in computer engineering.
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-3 md:gap-4 justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
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
          </motion.div>
          <motion.hr
            className="my-4 mt-8 border-t border-[#89E9FF] opacity-20 w-1/2 md:w-[80%] md:mr-20 mx-auto md:mx-0"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.65 }}
          />
          <motion.div
            className="flex flex-row gap-1 md:gap-1 justify-center md:justify-start items-center"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
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
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Hero;
