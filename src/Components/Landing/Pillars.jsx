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
      "Through events like interview training, resume building, one-on-one mentorship, private company recruiting, and more, Kappa Theta Pi Professional Development aims to prepare members for success in any technology-related career. We take pride in developing the tech leaders of the future.",
    icon: BriefcaseIcon,
  },
  {
    name: "Alumni Connections",
    description:
      "Our alumni are spread out across the world and work on cutting-edge technologies. They work at a plethora of companies - from tech companies like Microsoft, Amazon, Facebook, Apple, and Google, to startups, consulting firms, financial technology firms, and more!",
    icon: UserPlusIcon,
  },
  {
    name: "Social Growth",
    description:
      "The people you meet in Kappa Theta Pi will go on to be some of your closest friends throughout college and beyond. We host a variety of exclusive social events throughout the semester through which our members can bond, some of which include formal, tailgates, bowling, and apple picking.",
    icon: ArrowTrendingUpIcon,
  },
  {
    name: "Technical Advancement",
    description:
      "Kappa Theta Pi provides members numerous opportunities to enhance their current technical skills, as well as learn new ones. Whether it be participation in one of our various project teams or attending a technical workshop, we make it easy for our members to expand their expertise.",
    icon: ComputerDesktopIcon,
  },
  {
    name: "Academic Support",
    description:
      "Kappa Theta Pi brothers strive to foster academic growth and excellence for each other. We provide a supportive network filled with some of the brightest tech minds at the university that members can always rely on for help in classes and extracurricular activities.",
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
            Text text text more text text text text text text text text text text
          </p>
          <div className="mt-20">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <motion.div key={feature.name}
                  initial={{ x: -200, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1, transition: {
                    delay: index / 25,
                    duration: 0.5,
                    ease: "easeInOut"
                  }}}
                  viewport={{ once: true }}
                  className="pt-6">
                  <div className="h-fill flow-root rounded-2xl shadow-lg hover:shadow-xl transition-shadow border hover:scale-105 transition bg-gray-100 px-6 pb-8 sm:transition-all sm:duration-300 sm:ease-in-out sm:hover:scale-110 sm:transform">
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
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Pillars;
