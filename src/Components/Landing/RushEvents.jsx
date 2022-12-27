import React, { useEffect, useRef } from 'react'
import CarouselCard from './CarouselCard'
import { motion } from 'framer-motion'

const events = {
  "womenInKTP": {
    "title": "Women in KTP",
    "date": new Date("January 5, 2023"),
    "time": "4:15 PM",
    "location": "ANNENBERG G15",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    "inviteOnly": false
  },
  "infoSession": {
    "title": "General Info Session",
    "date": new Date("January 8, 2023"),
    "time": "TIME",
    "location": "LOCATION",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    "inviteOnly": false
  },
  "networkingNight": {
    "title": "Networking Night",
    "date": new Date("January 9, 2023"),
    "time": "TIME",
    "location": "LOCATION",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    "inviteOnly": false
  },
  "coffeeChats": {
    "title": "Coffee Chats",
    "date": new Date("January 10, 2023"),
    "time": "TIME",
    "location": "LOCATION",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    "inviteOnly": true
  },
  "groupInterviews": {
    "title": "Group Interviews",
    "date": new Date("January 11, 2023"),
    "time": "TIME",
    "location": "LOCATION",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    "inviteOnly": true
  },
  "technicals": {
    "title": "Technical Assessments",
    "date": new Date("January 12, 2023"),
    "time": "TIME",
    "location": "LOCATION",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    "inviteOnly": true
  },
  "interviews": {
    "title": "Individual Interviews",
    "date": new Date("January 13, 2023"),
    "time": "TIME",
    "location": "LOCATION",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
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
      <div id="rush-events" className="flex flex-col justify-center mx-auto py-8 lg:py-12 mx-auto max-w-full">
        <div className="relative bg-white sm:pl-0 md:pl-6 lg:pl-12">
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
                            inviteOnly={events[event]["inviteOnly"]}
                            light={today.getTime() > events[event]["date"].getTime() ? "false" : "true"}
                            passed={today.getTime() > events[event]["date"].getTime() ? "true" : "false"}
                            delay={index/80}/>))}

            {/* Buffer for spacing */}
            <div className="select-none px-4"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RushEvents
