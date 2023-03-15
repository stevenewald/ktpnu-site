function CarouselCard(props: {
  key: string;
  date: string;
  time: string;
  title: string;
  location: string;
  imgSrc: string;
  gcalLink: string;
  inviteOnly: boolean;
  light: string;
  passed: string;
}) {

  // Background
  let dimmedBG;
  if (props.light === "false") {
    dimmedBG = {
      backgroundColor: "rgb(243 244 246)",
    };
  } else {
    dimmedBG = {
      backgroundColor: "white",
    };
  }

  // Passed Date
  let dimmedDate;
  let dimmedTitle;
  if (props.passed === "true") {
    dimmedDate = {
      color: "rgb(156 163 175)",
    };
    dimmedTitle = {
      color: "rgb(120 120 120)",
    };
  } else {
    dimmedDate = {
      color: "#667eea",
    };
    dimmedTitle = {
      color: "rgb(17 24 39)",
    };
  }

  return (
    <>
      {/* Light Themed */}
      <div
        className="h-full container inline-block w-[20rem] sm:w-96 md:w-96 lg:w-96 h-[80%] sm:h-[90%] md:h-[90%] lg:h-[90%] rounded-2xl shadow-lg transition-shadow overflow-hidden border transition"
        style={dimmedBG}
      >
        {/* Body */}
        <div className="p-6">
          {/* Titles */}
          <div className="">
            <div className="flex items-center justify-between font-semibold text-sm">
              {/* Date */}
              <div className="flex" style={dimmedDate}>
                {/* {props.gcalLink &&
                <div className='inline-block'>
                  <a href={props.gcalLink} target="_blank"><img src={assets["gcal"]} width="20px" alt="GCal"/></a>
                </div>
                }
                {!props.gcalLink &&
                  <img className="cursor-pointer" onClick={() => {Swal.fire({icon:'info',title:'Invite-only event',text:'Invitations will be extended via email'})}} src={assets["gcal"]} width="20px" alt="GCal"/>
                } */}

                {/* <p className='ml-2 inline-block'> */}
                <p className="inline-block">{props.date}</p>
              </div>

              {/* Lock Icon */}
              {props.inviteOnly && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  fill="#6366f1"
                  width="20px"
                >
                  <path d="M 25 3 C 18.363281 3 13 8.363281 13 15 L 13 20 L 9 20 C 7.300781 20 6 21.300781 6 23 L 6 47 C 6 48.699219 7.300781 50 9 50 L 41 50 C 42.699219 50 44 48.699219 44 47 L 44 23 C 44 21.300781 42.699219 20 41 20 L 37 20 L 37 15 C 37 8.363281 31.636719 3 25 3 Z M 25 5 C 30.566406 5 35 9.433594 35 15 L 35 20 L 15 20 L 15 15 C 15 9.433594 19.433594 5 25 5 Z M 25 30 C 26.699219 30 28 31.300781 28 33 C 28 33.898438 27.601563 34.6875 27 35.1875 L 27 38 C 27 39.101563 26.101563 40 25 40 C 23.898438 40 23 39.101563 23 38 L 23 35.1875 C 22.398438 34.6875 22 33.898438 22 33 C 22 31.300781 23.300781 30 25 30 Z" />
                </svg>
              )}
            </div>

            {/* Event Title */}
            <p
              className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl"
              style={dimmedTitle}
            >
              {props.title}
            </p>

            {/* Time & Location */}
            <p className="mt-1 text-md font-bold tracking-tight text-gray-400 sm:text-md">
              {props.time} @ {props.location}
            </p>
          </div>

          {/* Event Has Passed (in case of past event) */}
          {props.passed === "true" && (
            <p className="text-red-500 font-bold mt-1">Event Has Passed</p>
          )}
        </div>
        {/* BImage */}
        <div className="flex justify-center content-end h-full overflow-hidden">
          {props.passed === "false" && (
            <img className="object-contain mb-32" src={props.imgSrc} alt="" />
          )}
          {props.passed === "true" && (
            <img
              className="object-contain mb-32 grayscale"
              src={props.imgSrc}
              alt=""
            />
          )}
        </div>
      </div>
    </>
  );
}

export default CarouselCard;
