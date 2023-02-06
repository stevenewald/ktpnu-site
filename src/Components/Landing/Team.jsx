import React from 'react';
import { motion } from 'framer-motion'

const people = [
      {
      name: 'Samar Saleem',
      role: 'President/Founder',
      imageUrl:
        'https://media.licdn.com/dms/image/C4E03AQEhnMuPtE0eGw/profile-displayphoto-shrink_400_400/0/1657907779939?e=1677110400&v=beta&t=7CxrhEz1WD-lLP4oGe3Xjl6WngS6c24H3yqfESR87ig',
      },
      {
      name: 'Damien Koh',
      role: 'VP of Recruitment',
      imageUrl:
      'https://media.licdn.com/dms/image/C5603AQGjHa8RFpDKhA/profile-displayphoto-shrink_400_400/0/1656946309926?e=1677110400&v=beta&t=mSIRjcaPvxGM6SNV6HUxntnDc-tfJGJsKe3zvtARVfU',
      },
      {
      name: 'Sneh Deshpande',
      role: 'VP of External Affairs',
      imageUrl:
      'https://media.licdn.com/dms/image/C4D03AQEVH1jm84ax0A/profile-displayphoto-shrink_400_400/0/1649042616875?e=1677110400&v=beta&t=VxBCPGOWUAlXGvk0bSi8n1flSEy6IBRccQhKVGtkYO0',
      },
      {
      name: 'Josh Brice',
      role: 'VP of Recruitment',
      imageUrl:
      'https://media.licdn.com/dms/image/C5603AQE7b12wJDGvtg/profile-displayphoto-shrink_400_400/0/1648564209595?e=1677110400&v=beta&t=SFPXEed0FNCB9CXnbu-cNba95eiJ9SPVht1gWpSDyM4',
      },
      {
        name: 'Nam Nguyen',
        role: 'VP of Internal Affairs',
        imageUrl:
          'https://media.licdn.com/dms/image/C5603AQEtz1wN1PeAmw/profile-displayphoto-shrink_400_400/0/1624822282607?e=1677110400&v=beta&t=IaigaQP4cMDmA0QquIeT8UzH21zT9Eaow7krp38JWtk',
      },
      {
      name: 'Eagan Notokusumo',
      role: 'VP of Finance',
      imageUrl:
      'https://media.licdn.com/dms/image/D5603AQE7nd_TWcdX0A/profile-displayphoto-shrink_400_400/0/1675294610641?e=1680739200&v=beta&t=YUApzCmeuIa9_9SMsD2bFNyKHBKa4NaOWbvRkjJLCdI',
      },
      {
        name: 'Steve Ewald',
        role: 'VP of Technology',
        imageUrl:
          'https://media.licdn.com/dms/image/D5603AQFZEpi4KfIkdA/profile-displayphoto-shrink_400_400/0/1675544376371?e=1681344000&v=beta&t=_ddWAl46FrkhekyO2SVxJSpb__PYIuuSeoj27Fer2pQ',
      },
      {
        name: 'Alexis Robles',
        role: 'VP of Technology',
        imageUrl:
          'https://media.licdn.com/dms/image/C4E03AQHxKbf9gRhDYw/profile-displayphoto-shrink_400_400/0/1660923581630?e=1677110400&v=beta&t=G8ZU0cCxd_ieU0Re9fxMeYobGdit1yt5eX92PpHp8wo',
      },
      {
        name: 'Julie Park',
        role: 'VP of Marketing',
        imageUrl:
          'https://media.licdn.com/dms/image/D5603AQHdZPGTHWZKJQ/profile-displayphoto-shrink_400_400/0/1669337453128?e=1677110400&v=beta&t=AmhLbaajCtLz8OaWrFpGFzZcgHuk-J43gRZMLMbiSbY',
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
