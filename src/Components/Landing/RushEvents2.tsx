const timeline = [
  {
    name: "Networking Night",
    description:
      "Engage in a memorable evening where KTP members forge lasting connections in the tech world.",
    date: "April 7",
    dateTime: "2025-04-07",
  },
  {
    name: "Coffee Chats",
    description:
      "Dive into casual conversations about tech innovations, career insights, and shared experiences over coffee.",
    date: "April 8",
    dateTime: "2025-04-08",
  },
  {
    name: "Social",
    description:
      "Join us for our social to connect with members and discover what KTP is all about.",
    date: "April 9",
    dateTime: "2025-04-09",
  },
  {
    name: "Group Interviews",
    description:
      "Showcase your skills and team dynamics in our collaborative group interviews for prospective members.",
    date: "April 10",
    dateTime: "2025-04-10",
  },
  {
    name: "Individual Interviews",
    description:
      "Engage in a focused one-on-one session to explore your potential and alignment with KTP's vision.",
    date: "April 11",
    dateTime: "2025-04-11",
  },
];

export default function RushEvents2() {
  return (
    <div id="rushevents2" className="bg-white space-y-16 pb-24 pt-12 sm:pb-32 sm:pt-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Join us for rush
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          We're excited to meet you! Apply when applications open.
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {timeline.map((item) => (
            <div key={item.name}>
              <time
                dateTime={item.dateTime}
                className="flex items-center text-sm font-semibold leading-6 text-indigo-600"
              >
                <svg
                  viewBox="0 0 4 4"
                  className="mr-4 h-1 w-1 flex-none"
                  aria-hidden="true"
                >
                  <circle cx={2} cy={2} r={2} fill="currentColor" />
                </svg>
                {item.date}
                <div
                  className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                  aria-hidden="true"
                />
              </time>
              <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                {item.name}
              </p>
              <p className="mt-1 text-base leading-7 text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
