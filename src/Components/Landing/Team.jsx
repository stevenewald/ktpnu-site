import React from 'react';
import { motion } from 'framer-motion'
import SamarPic from './images/samar.jpeg';
import SnehPic from './images/sneh.jpeg';
import JoshPic from './images/josh.jpeg';
import NamPic from './images/nam.jpeg';
import EaganPic from './images/eagan.jpeg';
import StevePic from './images/steve.jpeg';
import AlexisPic from './images/alexis.jpeg';
import DamienPic from './images/damien.jpeg';
import JuliePic from './images/julie.jpeg';

const people = [
      {
      name: 'Samar Saleem',
      role: 'President/Founder',
      imageUrl:
        SamarPic
      },
      {
      name: 'Damien Koh',
      role: 'VP of Recruitment',
      imageUrl:
        DamienPic
      },
      {
      name: 'Sneh Deshpande',
      role: 'VP of External Affairs',
      imageUrl:
      SnehPic
      },
      {
      name: 'Josh Brice',
      role: 'VP of Recruitment',
      imageUrl:
      JoshPic
      },
      {
        name: 'Nam Nguyen',
        role: 'VP of Internal Affairs',
        imageUrl:
          NamPic
      },
      {
      name: 'Eagan Notokusumo',
      role: 'VP of Finance',
      imageUrl:
      EaganPic
      },
      {
        name: 'Steve Ewald',
        role: 'VP of Technology',
        imageUrl:
          StevePic
      },
      {
        name: 'Alexis Robles',
        role: 'VP of Technology',
        imageUrl:
          AlexisPic
      },
      {
        name: 'Julie Park',
        role: 'VP of Marketing',
        imageUrl:
          JuliePic
      },
  ]

class Team extends React.Component {
    render() {
        return (
            <div id="team" className="overflow-hidden bg-white border">
              <div className="mx-auto max-w-7xl py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
                <div className="space-y-8 sm:space-y-12">
                  <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Team</h2>
                    <p className="text-xl text-gray-500">
                      Our leadership team is committed to supporting an inclusive, supportive experience.
                    </p>
                  </div>
                  <ul
                    role="list"
                    className="sm:hidden mx-auto grid grid-cols-3 gap-x-4 gap-y-8 sm:grid-cols-6 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-6"
                  >
                    {people.map((person) => (
                      <li key={person.name}>
                        <div className="space-y-4">
                          <img className="mx-auto h-20 w-20 rounded-full lg:h-24 lg:w-24" src={person.imageUrl} alt="" />
                          <div className="space-y-2">
                            <div className="text-xs font-medium lg:text-sm">
                              <h3>{person.name}</h3>
                              <p className="text-indigo-600">{person.role}</p>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <ul role="list" className="hidden sm:grid mx-auto gap-x-4 gap-y-8 grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 md:gap-x-6 sm:max-w-2xl lg:max-w-3xl lg:gap-y-12">
                    {people.slice(0,4).map((person, index) => (
                      <motion.li key={person.name}
                        initial={{ x: 200, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1, transition: {
                          delay: index / 25,
                          duration: 0.5,
                          ease: "easeInOut"
                        }}}
                        viewport={{ once: true }}>
                        <div className="space-y-4">
                          <img className="mx-auto h-20 w-20 rounded-full lg:h-24 lg:w-24" src={person.imageUrl} alt="" />
                          <div className="space-y-2">
                            <div className="text-center lg:whitespace-nowrap text-xs font-medium lg:text-sm">
                              <h3>{person.name}</h3>
                              <p className="text-indigo-600">{person.role}</p>
                            </div>
                          </div>
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                  <ul role="list" className="hidden sm:grid mx-auto gap-x-4 gap-y-8 grid-cols-2 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-5 md:gap-x-6 max-w-4xl lg:gap-y-12"
                  >
                    {people.slice(4,9).map((person, index) => (
                      <motion.li key={person.name}
                        initial={{ x: 200, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1, transition: {
                          delay: index / 25,
                          duration: 0.5,
                          ease: "easeInOut"
                        }}}
                        viewport={{ once: true }}>
                        <div className="space-y-4">
                          <img className="mx-auto h-20 w-20 rounded-full lg:h-24 lg:w-24" src={person.imageUrl} alt="" />
                          <div className="space-y-2">
                            <div className="text-xs font-medium lg:text-sm">
                              <h3>{person.name}</h3>
                              <p className="text-indigo-600">{person.role}</p>
                            </div>
                          </div>
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )
      }
}

export default Team;
