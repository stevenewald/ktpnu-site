import React from 'react'
import CarouselCard from './CarouselCard'

const events = {
  "womenInKTP": {
    "title": "Women in KTP",
    "date": new Date("January 5, 2022"),
    // "date": new Date("January 5, 2023"),
    "time": "4:15 PM",
    "location": "ANNENBERG G15",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    "inviteOnly": false
  },
  "infoSession": {
    "title": "General Info Session",
    "date": new Date("January 8, 2023"),
    "time": "2:20 PM",
    "location": "TBA",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    "inviteOnly": false
  },
  "networkingNight": {
    "title": "Networking Night",
    "date": new Date("January 9, 2023"),
    "time": "7:00 PM",
    "location": "TBA",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    "inviteOnly": false
  },
  "coffeeChats": {
    "title": "Coffee Chats",
    "date": new Date("January 10, 2023"),
    "time": "",
    "location": "VARIOUS LOCATIONS",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    "inviteOnly": true
  },
  "groupInterviews": {
    "title": "Group Interviews",
    "date": new Date("January 11, 2023"),
    "time": "TBA",
    "location": "TBA",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    "inviteOnly": true
  },
  "technicals": {
    "title": "Technical Assessments",
    "date": new Date("January 12, 2023"),
    "time": "2 - 6 PM",
    "location": "MUDD",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    "inviteOnly": true
  },
  "interviews": {
    "title": "Individual Interviews",
    "date": new Date("January 13, 2023"),
    "time": "TBD",
    "location": "TBA",
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

  const assets = require('../../assets.js')

  // Today's Date
  var today = new Date();

  return (
    <>
      <div className="flex flex-col justify-center mx-auto py-16 sm:py-24 lg:py-24 mx-auto max-w-full">
        <div className="relative bg-white pl-12">
          <div className="h-full">

            {/* "Upcoming Rush Events" */}
            <div className="py-4 ml-10">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Upcoming Rush Events
              </p>
              <div className="mx-auto mt-2 text-lg font-semibold text-gray-500 text-xl flex">
                <p>Events marked with&nbsp;</p>
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" fill="#6366f1" width="20px"><path d="M 25 3 C 18.363281 3 13 8.363281 13 15 L 13 20 L 9 20 C 7.300781 20 6 21.300781 6 23 L 6 47 C 6 48.699219 7.300781 50 9 50 L 41 50 C 42.699219 50 44 48.699219 44 47 L 44 23 C 44 21.300781 42.699219 20 41 20 L 37 20 L 37 15 C 37 8.363281 31.636719 3 25 3 Z M 25 5 C 30.566406 5 35 9.433594 35 15 L 35 20 L 15 20 L 15 15 C 15 9.433594 19.433594 5 25 5 Z M 25 30 C 26.699219 30 28 31.300781 28 33 C 28 33.898438 27.601563 34.6875 27 35.1875 L 27 38 C 27 39.101563 26.101563 40 25 40 C 23.898438 40 23 39.101563 23 38 L 23 35.1875 C 22.398438 34.6875 22 33.898438 22 33 C 22 31.300781 23.300781 30 25 30 Z"/></svg>
                <p>&nbsp;are invite-only</p>
              </div>
            </div>
          </div>
        </div>

        {/* Cards Scroller Platter */}
        <div className="overflow-x-auto scrollbar-hide overscroll-x-none pb-4">
          <div className='flex flex-nowrap items-center inline-flex gap-5 py-2 w-fill h-[475px]'>

            {/* Buffer for spacing */}
            <div className="select-none pl-10"></div>

            {/* Women in KTP */},
            <CarouselCard date={`${daysOfWeek[events["womenInKTP"]["date"].getDay()]}, JAN ${events["womenInKTP"]["date"].getDate()}`}
                          title={events["womenInKTP"]["title"]}
                          time={events["womenInKTP"]["time"]}
                          location={events["womenInKTP"]["location"]}
                          imgsrc={assets["womenInKTP"]}
                          inviteOnly={events["womenInKTP"]["inviteOnly"]}
                          light="false"
                          passed={today.getTime() > events["womenInKTP"]["date"].getTime() ? "true" : "false"}/>

            {/* Info Session */}
            <CarouselCard date={`${daysOfWeek[events["infoSession"]["date"].getDay()]}, JAN ${events["infoSession"]["date"].getDate()}`}
                          title={events["infoSession"]["title"]}
                          time={events["infoSession"]["time"]}
                          location={events["infoSession"]["location"]}
                          imgsrc={assets["handsraised"]}
                          inviteOnly={events["infoSession"]["inviteOnly"]}
                          light="true"
                          passed={today.getTime() > events["infoSession"]["date"].getTime() ? "true" : "false"}/>

            {/* Networking Night */}
            <CarouselCard date={`${daysOfWeek[events["networkingNight"]["date"].getDay()]}, JAN ${events["networkingNight"]["date"].getDate()}`}
                          title={events["networkingNight"]["title"]}
                          time={events["networkingNight"]["time"]}
                          location={events["networkingNight"]["location"]}
                          imgsrc={assets["shakinghands"]}
                          inviteOnly={events["networkingNight"]["inviteOnly"]}
                          light="false"
                          passed={today.getTime() > events["networkingNight"]["date"].getTime() ? "true" : "false"}/>

            {/* Coffee Chats */}
            <CarouselCard date={`${daysOfWeek[events["coffeeChats"]["date"].getDay()]}, JAN ${events["coffeeChats"]["date"].getDate()}`}
                          title={events["coffeeChats"]["title"]}
                          time={events["coffeeChats"]["time"]}
                          location={events["coffeeChats"]["location"]}
                          imgsrc={assets["coffee"]}
                          inviteOnly={events["coffeeChats"]["inviteOnly"]}
                          light="true"
                          passed={today.getTime() > events["coffeeChats"]["date"].getTime() ? "true" : "false"}/>

            {/* Group Interviews */}
            <CarouselCard date={`${daysOfWeek[events["groupInterviews"]["date"].getDay()]}, JAN ${events["groupInterviews"]["date"].getDate()}`}
                          title={events["groupInterviews"]["title"]}
                          time={events["groupInterviews"]["time"]}
                          location={events["groupInterviews"]["location"]}
                          imgsrc={assets["group"]}
                          inviteOnly={events["groupInterviews"]["inviteOnly"]}
                          light="false"
                          passed={today.getTime() > events["groupInterviews"]["date"].getTime() ? "true" : "false"}/>

            {/* Technicals */}
            <CarouselCard date={`${daysOfWeek[events["technicals"]["date"].getDay()]}, JAN ${events["technicals"]["date"].getDate()}`}
                          title={events["technicals"]["title"]}
                          time={events["technicals"]["time"]}
                          location={events["technicals"]["location"]}
                          imgsrc={assets["technicals"]}
                          inviteOnly={events["technicals"]["inviteOnly"]}
                          light="true"
                          passed={today.getTime() > events["technicals"]["date"].getTime() ? "true" : "false"}/>

            {/* Individual Interviews */}
            <CarouselCard date={`${daysOfWeek[events["interviews"]["date"].getDay()]}, JAN ${events["interviews"]["date"].getDate()}`}
                          title={events["interviews"]["title"]}
                          time={events["interviews"]["time"]}
                          location={events["interviews"]["location"]}
                          imgsrc={assets["interview"]}
                          inviteOnly={events["interviews"]["inviteOnly"]}
                          light="false"
                          passed={today.getTime() > events["interviews"]["date"].getTime() ? "true" : "false"}/>

            {/* Buffer for spacing */}
            <div className="select-none px-4"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RushEvents
