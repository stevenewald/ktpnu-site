import SamarPic from "@images/Exec/samar.jpeg";
import SnehPic from "@images/Exec/sneh.jpeg";
import EaganPic from "@images/Exec/eagan.jpeg";
import StevePic from "@images/Exec/steve.jpeg";
import AlexisPic from "@images/Exec/alexis.jpeg";
import DamienPic from "@images/Exec/damien.jpeg";
import DaphnePic from "@images/Exec/daphne.jpeg";
import SimonPic from "@images/Exec/simon.jpeg";

const people: { name: string; role: string; imageUrl: any }[] = [
  {
    name: "Samar Saleem",
    role: "President/Founder",
    imageUrl: SamarPic,
  },
  {
    name: "Damien Koh",
    role: "VP of Programming",
    imageUrl: DamienPic,
  },
  {
    name: "Sneh Deshpande",
    role: "VP of External Affairs",
    imageUrl: SnehPic,
  },
  {
    name: "Eagan Notokusumo",
    role: "VP of Internal Affairs",
    imageUrl: EaganPic,
  },
  {
    name: "Steve Ewald",
    role: "VP of Technology",
    imageUrl: StevePic,
  },
  {
    name: "Alexis Robles",
    role: "VP of Technology",
    imageUrl: AlexisPic,
  },
  {
    name: "Daphne Zuckerman",
    role: "VP of Marketing",
    imageUrl: DaphnePic,
  },
  {
    name: "Simon Hedin",
    role: "VP of Recruitment",
    imageUrl: SimonPic,
  }
];

function Team() {
  return (
    <div id="team" className="overflow-hidden bg-gray-50">
      <div className="mx-auto max-w-7xl py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-8 sm:space-y-12">
          <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Our Team
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
                      <p className="text-indigo-600">{person.role}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          {/* Laptop/tablet team layout */}
          <ul
            role="list"
            className="hidden sm:grid mx-auto gap-x-4 gap-y-8 grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 md:gap-x-6 sm:max-w-2xl lg:max-w-3xl lg:gap-y-12"
          >
            {people.map((person) => (
              <li>
                <div className="space-y-4">
                  <img
                    className="mx-auto h-20 w-20 rounded-full lg:h-24 lg:w-24"
                    src={person.imageUrl}
                    alt=""
                  />
                  <div className="space-y-2">
                    <div className="text-center lg:whitespace-nowrap text-xs font-medium lg:text-sm">
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
