import React, { useEffect, useRef } from 'react'
import CarouselCard from './CarouselCard'
import { motion } from 'framer-motion'

const events = {
  "womenInKTP": {
    "title": "Women in KTP",
    "date": new Date("January 5, 2023 20:00:00"),
    "time": "7:00 PM",
    "location": "TECH M177",
    "gcalLink": "https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MjY2NzVkZTV1NGk3YXNnanRhcTg1M2xla2sgYzgyZjFmZGQzMWViNjFlMjZhMzY0NmUzNGViZGUwMmVmZmYzODZkZmY3NTExNzljNjczM2E5ZTM3MmM2MWNkYUBn&tmsrc=c82f1fdd31eb61e26a3646e34ebde02efff386dff751179c6733a9e372c61cda%40group.calendar.google.com",
    "inviteOnly": false
  },
  "infoSession": {
    "title": "General Info Session",
    "date": new Date("January 8, 2023 20:00:00"),
    "time": "7:00 PM",
    "location": "ANNENBERG G15",
    "gcalLink": "https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NWwxc2FwZnBwN3NzcmVyamVmcWt1bWlqNnIgYzgyZjFmZGQzMWViNjFlMjZhMzY0NmUzNGViZGUwMmVmZmYzODZkZmY3NTExNzljNjczM2E5ZTM3MmM2MWNkYUBn&tmsrc=c82f1fdd31eb61e26a3646e34ebde02efff386dff751179c6733a9e372c61cda%40group.calendar.google.com",
    "inviteOnly": false
  },
  "networkingNight": {
    "title": "Networking Night",
    "date": new Date("January 9, 2023 20:00:00"),
    "time": "7:00 PM",
    "location": "TECH LR2",
    "gcalLink": "https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=Njlqc2ZvODJka2ltN2RoZ2Vib3Z1MTdhdHUgYzgyZjFmZGQzMWViNjFlMjZhMzY0NmUzNGViZGUwMmVmZmYzODZkZmY3NTExNzljNjczM2E5ZTM3MmM2MWNkYUBn&tmsrc=c82f1fdd31eb61e26a3646e34ebde02efff386dff751179c6733a9e372c61cda%40group.calendar.google.com",
    "inviteOnly": false
  },
  "coffeeChats": {
    "title": "Coffee Chats",
    "date": new Date("January 10, 2023 20:00:00"),
    "time": "",
    "location": "VARIOUS LOCATIONS",
    "inviteOnly": true
  },
  "groupInterviews": {
    "title": "Group Interviews",
    "date": new Date("January 11, 2023 20:00:00"),
    "time": "",
    "location": "VARIOUS LOCATIONS",
    "inviteOnly": true
  },
  "interviews": {
    "title": "Individual Interviews",
    "date": new Date("January 13, 2023 20:00:00"),
    "time": "",
    "location": "VARIOUS LOCATIONS",
    "inviteOnly": true
  }
}

const daysOfWeek = {
  "0": "SUNDAY",
  "1": "MONDAY",
  "2": "TUESDAY",
  "3": "WEDNESDAY",
  "4": "THURSDAY",
  "5": "FRIDAY",
  "6": "SATURDAY"
}

function RushEvents() {

  // Picture assets
  const assets = require('../../assets.js')

  // Today's Date
  var today = new Date();

  // Carousel platter ref
  const platter = useRef(null);

  useEffect(() => {

    // Determine how many events have passed
    let passed_events = 0;
    for (let event in events) {
      if (today.getTime() > events[event]["date"].getTime()) {
        passed_events++;
      }
    }

    // Move platter to the right by 402 px multiplied by the
    // # of passed events to have the next event first
    if (window.innerWidth >= 640) {
      platter.current.scrollLeft = 402 * passed_events;
    } else {
      platter.current.scrollLeft = 340 * passed_events;
    }
  })

  return (
    <>
      <div id="rush-events" className="flex bg-white flex-col justify-center mx-auto py-8 lg:py-12 mx-auto max-w-full">
        <div className="relative m:pl-0 md:pl-6 lg:pl-12">
          <div className="h-full">
            <div className="py-4 mr-3 ml-6 md:ml-10 lg:ml-10">
              <motion.p
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1, transition: {
                  delay: 0,
                  duration: 0.35,
                  ease: "easeInOut"
                }}}
                viewport={{ once: true }}
                className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Upcoming Rush Events
              </motion.p>
              <motion.div
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1, transition: {
                  delay: 0.05,
                  duration: 0.35,
                  ease: "easeInOut"
                }}}
                viewport={{ once: true }}
                className="mx-auto mt-2 text-lg inline-block text-gray-500 text-xl flex items-center">
                <p>Events marked with&nbsp;<svg className="align-middle inline-block transform -translate-y-[3px]" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" fill="#6366f1" width="20px"><path d="M 25 3 C 18.363281 3 13 8.363281 13 15 L 13 20 L 9 20 C 7.300781 20 6 21.300781 6 23 L 6 47 C 6 48.699219 7.300781 50 9 50 L 41 50 C 42.699219 50 44 48.699219 44 47 L 44 23 C 44 21.300781 42.699219 20 41 20 L 37 20 L 37 15 C 37 8.363281 31.636719 3 25 3 Z M 25 5 C 30.566406 5 35 9.433594 35 15 L 35 20 L 15 20 L 15 15 C 15 9.433594 19.433594 5 25 5 Z M 25 30 C 26.699219 30 28 31.300781 28 33 C 28 33.898438 27.601563 34.6875 27 35.1875 L 27 38 C 27 39.101563 26.101563 40 25 40 C 23.898438 40 23 39.101563 23 38 L 23 35.1875 C 22.398438 34.6875 22 33.898438 22 33 C 22 31.300781 23.300781 30 25 30 Z"/></svg>&nbsp;are invite-only.</p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Cards Scroller Platter */}
        <div ref={platter} className="overflow-x-auto scrollbar-hide overscroll-x-none pb-4">
          <div className='flex flex-nowrap items-center inline-flex gap-5 py-2 w-fill h-[475px]'>

            {/* Buffer for Spacing */}
            <div className="select-none sm:pl-4 md:pl-8 lg:pl-14"></div>

            {Object.keys(events).map((event, index) => (

              <CarouselCard key={event}
                            date={`${daysOfWeek[events[event]["date"].getDay()]}, JAN ${events[event]["date"].getDate()}`}
                            time={events[event]["time"]}
                            title={events[event]["title"]}
                            location={events[event]["location"]}
                            imgsrc={assets[event]}
                            gcalLink={events[event]["gcalLink"]}
                            inviteOnly={events[event]["inviteOnly"]}
                            light={today.getTime() > events[event]["date"].getTime() ? "false" : "true"}
                            passed={today.getTime() > events[event]["date"].getTime() ? "true" : "false"}/>))}

            {/* Buffer for spacing */}
            <div className="select-none px-4"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RushEvents
