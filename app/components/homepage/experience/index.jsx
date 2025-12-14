// @flow strict

import { experiences } from "@/utils/data/experience";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import GlowCard from "../../helper/glow-card";

function Experience() {
  return (
    <div
      id="experience"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
    >
      <Image
        src="/section.svg"
        alt="section background"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      {/* Section Heading */}
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]" />
          <span className="bg-[#1a1443] text-white p-2 px-5 text-xl rounded-md">
            Experience
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]" />
        </div>
      </div>

      {/* Experience Cards */}
      <div className="py-8 flex justify-center">
        <div className="w-full max-w-3xl flex flex-col gap-6">
          {experiences.map((experience) => (
            <GlowCard
              key={experience.id}
              identifier={`experience-${experience.id}`}
            >
              <div className="p-6 relative">
                <Image
                  src="/blur-23.svg"
                  alt="blur"
                  width={1080}
                  height={200}
                  className="absolute bottom-0 left-0 opacity-70"
                />

                <div className="flex justify-center mb-3">
                  <p className="text-sm text-[#16f2b3]">
                    {experience.duration}
                  </p>
                </div>

                <div className="flex items-center gap-6">
                  <div className="text-violet-500">
                    <BsPersonWorkspace size={40} />
                  </div>

                  <div>
                    <p className="text-lg sm:text-xl font-semibold uppercase">
                      {experience.title}
                    </p>
                    <p className="text-sm sm:text-base text-gray-300">
                      {experience.company}
                    </p>
                  </div>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
