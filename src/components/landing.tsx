"use client";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { WavyBackground } from "../components/ui/wavy-background";
import { Vortex } from "../components/ui/vortex";
import { AuroraBackground } from "../components/ui/aurora-background";
import logo from "../assets/meta.png"; 
import { cn } from "@/lib/utils";
import AnimatedGradientText from "../components/ui/animated-gradient-text";


export function WavyBackgroundDemo() {
  const [isVortex, setIsVortex] = useState(true); 
  return (
    <div className="relative h-[100vh] w-full">
      {/* Top-left logo and text */}
      <div className="absolute top-4 left-4 flex items-center space-x-2 z-50">
        <div className="w-10 h-10 flex items-center justify-center">
        <img
          src={logo}
          alt="META"
          className="w-8 h-8 lg:w-10 lg:h-10 rounded-full object-cover cursor-pointer"
        />
        </div>
        <div className="text-white font-semibold text-lg">
          Meta
        </div>
      </div>

      {/* Top-right switch for toggling background effects */}
      <div className="absolute top-4 right-4 z-50">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={isVortex}
            onChange={() => setIsVortex(!isVortex)}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:bg-blue-600 transition-all duration-300"></div>
          <span className="ml-3 text-sm font-medium text-white">
            {isVortex ? "Vortex" : "Aurora"}
          </span>
        </label>
      </div>

      {/* Background effect based on state */}
      {isVortex ? (
        <Vortex
          backgroundColor="black"
          rangeY={800}
          particleCount={50}
          baseHue={99999999}
          className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
        >
            <motion.div
              initial={{ opacity: 0.0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="relative flex text-white mt-20 flex-col gap-4 items-center justify-center px-4"
            >
              <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
                One Bot, Endless Possibilities!
              </div>
              <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
              🧬 Peace, Love, Unity
              </div> 
              <AnimatedGradientText>
        ✨ <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
        <span
          className={cn(
            `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
          )}
        >
          Invite Bot Now!
        </span>
        <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
      </AnimatedGradientText>
            </motion.div>
        </Vortex>
      ) : (
        <AuroraBackground>
          <WavyBackground className="max-w-4xl mx-auto pb-40">
            <motion.div
              initial={{ opacity: 0.0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="relative flex text-white mt-60 flex-col gap-4 items-center justify-center px-4"
            >
              <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
                One Bot, Endless Possibilities!
              </div>
              <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
              🧬 Peace, Love, Unity
              </div>
              <AnimatedGradientText>
        ✨ <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
        <span
          className={cn(
            `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
          )}
        >
          Invite Bot Now!
        </span>
        <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
      </AnimatedGradientText>
            </motion.div>
          </WavyBackground>
        </AuroraBackground>
      )}
    </div>
  );
}

export default WavyBackgroundDemo;
