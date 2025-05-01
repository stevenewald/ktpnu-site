import ZacariaPic from "@images/Exec/zacaria.jpeg";
import NicolePic from "@images/Exec/nicole.jpeg";
import RohanPic from "@images/Exec/rohan.jpeg";
import NaavyaPic from "@images/Exec/naavya.jpeg";
import CarolinePic from "@images/Exec/caroline.jpeg";
import JohnPic from "@images/Exec/john.jpeg";
import DrewPic from "@images/Exec/drew.jpeg";
import GavinPic from "@images/Exec/gavin.jpeg";
import JordanPic from "@images/Exec/jordan.jpeg";
import NicoPic from "@images/Exec/nico.jpeg";
import MoPic from "@images/Exec/mo.jpeg";
import SujeePic from "@images/Exec/sujee.jpeg";
import JaimiePic from "@images/Exec/jaimie.jpeg";
import AiliPic from "@images/Exec/aili.jpeg";

const people: { name: string; role: string; imageUrl: any }[] = [
  {
    name: "Zacaria Nouri",
    role: "President",
    imageUrl: ZacariaPic,
  },
  {
    name: "Nicole Liu",
    role: "VP of Programming",
    imageUrl: NicolePic,
  },
  {
    name: "Rohan Badani",
    role: "VP of External Affairs",
    imageUrl: RohanPic,
  },
  {
    name: "Naavya Sheth",
    role: "VP of Internal Affairs",
    imageUrl: NaavyaPic,
  },
  {
    name: "Caroline Guerra",
    role: "VP of Technology",
    imageUrl: CarolinePic,
  },
  {
    name: "John Hileman",
    role: "VP of Technology",
    imageUrl: JohnPic,
  },
  {
    name: "Drew Guardiola",
    role: "VP of Marketing",
    imageUrl: DrewPic,
  },
  {
    name: "Gavin Chung",
    role: "VP of Recruitment",
    imageUrl: GavinPic,
  },
  {
    name: "Jordan Chu",
    role: "VP of Recruitment",
    imageUrl: JordanPic,
  },
  {
    name: "Nico Biabani",
    role: "VP of Finance",
    imageUrl: NicoPic,
  },
  {
    name: "Mo Alamin",
    role: "VP of Member Experience",
    imageUrl: MoPic,
  },
  {
    name: "Sujee Rubio",
    role: "VP of DEI",
    imageUrl: SujeePic,
  },
  {
    name: "Jaimie Hong",
    role: "VP of Pledge Experience",
    imageUrl: JaimiePic,
  },
  {
    name: "Ai-li Baird",
    role: "VP of Community",
    imageUrl: AiliPic,
  }
];

function Team() {
  return (
    <div id="team" className="overflow-hidden bg-gray-50">
      <div className="mx-auto max-w-7xl py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-8 sm:space-y-12">
          <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              KTP Exec
            </h2>
            <p className="text-xl text-gray-600">
              Our leadership team is committed to supporting an inclusive,
              supportive experience.
            </p>
          </div>
          {/* Mobile team layout */}
          <ul
            role="list"
            className="sm:hidden mx-auto grid grid-cols-3 gap-x-4 gap-y-8 sm:grid-cols-6 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-6"
          >
            {people.map((person) => (
              <li key={person.name}>
                <div className="space-y-4">
                  <img
                    className="mx-auto h-20 w-20 rounded-full lg:h-24 lg:w-24"
                    src={person.imageUrl}
                    alt=""
                  />
                  <div className="space-y-2">
                    <div className="text-xs font-medium lg:text-sm">
                      <h3>{person.name}</h3>
                      <p className="text-indigo-600 text-center">{person.role}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          {/* Laptop/tablet team layout */}
          <ul
            role="list"
            className="hidden sm:grid mx-auto gap-x-4 gap-y-8 grid-cols-2 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-5 md:gap-x-15 sm:max-w-2xl lg:max-w-3xl lg:gap-y-12"
          >
            {people.map((person) => (
              <li key={person.name}>
                <div className="space-y-4">
                  <img
                    className="mx-auto h-20 w-20 rounded-full lg:h-24 lg:w-24"
                    src={person.imageUrl}
                    alt=""
                  />
                  <div className="space-y-2">
                    <div className="text-center text-xs font-medium lg:text-sm">
                      <h3>{person.name}</h3>
                      <p className="text-indigo-600">{person.role}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Team;
