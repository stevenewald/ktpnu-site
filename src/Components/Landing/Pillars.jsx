import React from "react";
import { motion } from 'framer-motion'

import {
  BriefcaseIcon,
  UserPlusIcon,
  ArrowTrendingUpIcon,
  ComputerDesktopIcon,
  AcademicCapIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Professional Development",
    description:
      "KTP Professional Development will prepare you for success in your prospective tech career. We provide interview training, resume building, one-on-one mentorship, private company recruiting, etc.",
    icon: BriefcaseIcon,
  },
  {
    name: "Alumni Connections",
    description:
      "KTP alumni work on cutting-edge technology across the globe. Through our alumni network, you will have connections to brothers at Microsoft, Amazon, Facebook, Apple, Google, consulting firms, financial technology firms, startups, and more!",
    icon: UserPlusIcon,
  },
  {
    name: "Social Growth",
    description:
      "The people you meet in KTP will go on to become some of your best friends at Northwestern. We host a variety of social events throughout the year where you will bond with your brothers. Events include KTP Formal, tailgates, bowling, and apple picking.",
    icon: ArrowTrendingUpIcon,
  },
  {
    name: "Technical Advancement",
    description:
      "Strengthen and expand on your technical skillset with KTP Technical Advancement. Members attend technical workshops and join project teams where [they will learn how to...they will gain experience...].",
    icon: ComputerDesktopIcon,
  },
  {
    name: "Academic Support",
    description:
      "We strive to foster academic growth and excellence for each other. We will provide you with a supportive network of the brightest tech minds at Northwestern who you can rely on for academic support.",
    icon: AcademicCapIcon,
  },
  {
    name: "One more?",
    description:
      "Having six of these would look much more clean. Otherwise I can make it work with five. ",
    icon: QuestionMarkCircleIcon,
  },
];

class Pillars extends React.Component {
  render() {
    return (
      <div className="relative bg-gray-100 py-8 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Pillars of Kappa Theta Pi
          </p>
          <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
            The core values that we stand for
          </p>
          <div className="mt-20">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <div key={feature.name}
                  viewport={{ once: true }}
                  className="pt-6">
                  <div className="h-[22rem] h-fill flow-root rounded-2xl shadow-lg hover:shadow-xl transition-shadow border hover:scale-105 transition bg-gray-100 px-6 pb-8 sm:transition-all sm:duration-300 sm:ease-in-out sm:hover:scale-110 sm:transform">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center rounded-xl bg-indigo-500 p-3 shadow-lg">
                          <feature.icon
                            className="h-8 w-8 text-white"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                      <h3 className="mt-8 text-2xl font-bold tracking-tight leading-8 tracking-tight text-gray-900">
                        {feature.name}
                      </h3>
                      <p className="mt-5 text-base leading-7 text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Pillars;
