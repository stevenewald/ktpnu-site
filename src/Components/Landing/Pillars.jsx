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
      "A culture of rigorous professional development is brotherhood in KTP. We will prepare you for success in your prospective tech career through interview training, resume building, one-on-one mentorship, private company recruiting, and more.",
    icon: BriefcaseIcon,
  },
  {
    name: "Alumni Connections",
    description:
      "Across the globe, our alumni work on cutting-edge technology. Through our alumni network and chapter's brotherhood portal, you will have connections to brothers at Microsoft, Amazon, Facebook, Apple, Google, consulting firms, financial technology firms, startups, and more.",
    icon: UserPlusIcon,
  },
  {
    name: "Social Growth",
    description:
      "We understand that strong bonds create brotherhood. We host a variety of social events throughout the year, including tailgates, bowling, apple picking, and KTP formal, where you will find your next best friends at Northwestern.",
    icon: ArrowTrendingUpIcon,
  },
  {
    name: "Technical Advancement",
    description:
      "Strengthen and expand on your technical skillset with KTP technical advancement. You will attend technical workshops and join project teams to gain experience ripe for entrance into your prospepctive industry through our new member education and beyond.",
    icon: ComputerDesktopIcon,
  },
  {
    name: "Academic Support",
    description:
      "We strive to foster academic growth and excellence. We will provide you with a supportive network of the brightest minds in tech at Northwestern who you can rely on for support, inside and outside of the classroom.",
    icon: AcademicCapIcon,
  },
  {
    name: "Diversity, Equity, and Inclusion",
    description:
      "At KTP, we recruit the best in tech, regardless of your gender, race, religion, sexual orientation. As an inclusive workplace, our brothers are comfortable bringing their authentic whole selves to the table.",
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
                  <div className="h-[22rem] h-fill flow-root rounded-2xl shadow-lg hover:shadow-xl transition-shadow border hover:scale-105 transition bg-gray-100 px-6 pb-8 sm:transition-all sm:duration-300 sm:ease-in-out sm:hover:scale-110 sm:transform">
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
