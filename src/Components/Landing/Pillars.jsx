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
      "KTP provides professional development and support for tech careers, including interview training, resume building, mentorship, and private company recruiting.",
    icon: BriefcaseIcon,
  },
  {
    name: "Alumni Connections",
    description:
      "Our alumni network connects you to brothers at top tech companies, including Microsoft, Amazon, Facebook, Apple, Google, consulting firms, financial technology firms, and startups.",
    icon: UserPlusIcon,
  },
  {
    name: "Social Growth",
    description:
      "At KTP, we understand that strong bonds create brotherhood. KTP fosters these friendships through social events, including tailgates, bowling, apple picking, and KTP formal.",
    icon: ArrowTrendingUpIcon,
  },
  {
    name: "Technical Advancement",
    description:
      "Let us expand your technical skillset through workshops, projects, and more to enhance your technical skills and prepare you for your industry through new member education and beyond.",
    icon: ComputerDesktopIcon,
  },
  {
    name: "Academic Support",
    description:
      "KTP helps foster academic growth and excellence by providing a network of the brightest tech minds at Northwestern for support in and out of the classroom.",
    icon: AcademicCapIcon,
  },
  {
    name: "Diversity, Equity, and Inclusion",
    description:
      "KTP is an inclusive workplace that recruits the best in tech, regardless of gender, race, religion, or sexual orientation, and encourages brothers to bring their authentic selves.",
    icon: QuestionMarkCircleIcon,
  },
];

class Pillars extends React.Component {
  render() {
    return (
      <div className="relative bg-gray-50 py-8 sm:py-16">
        <div className="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Pillars of Kappa Theta Pi
          </p>
          <p className="mx-auto mt-2 max-w-prose text-xl text-gray-500">
            What We Stand For
          </p>
          <div className="mt-20">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <div key={feature.name}
                  viewport={{ once: true }}
                  className="pt-6">
                  <div className="h-[20rem] sm:h-[10rem] lg:h-[18rem] h-fill flow-root rounded-2xl shadow-lg sm:hover:shadow-xl transition-shadow border transition bg-gray-100 px-6 pb-8 sm:transition-all sm:duration-300 sm:ease-in-out sm:hover:scale-110 sm:transform">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center rounded-xl bg-indigo-500 p-2 shadow-lg">
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
