import AlicePic from "@images/Exec/alice.jpeg";
import IrisPic from "@images/Exec/iris.jpeg";
import YashPic from "@images/Exec/yash.jpeg";
import ClaraPic from "@images/Exec/clara.jpeg";
import DhruvPic from "@images/Exec/dhruv.jpeg";
import TahiraPic from "@images/Exec/tahira.jpeg";
import JoshPic from "@images/Exec/josh.jpeg";
import GavinPic from "@images/Exec/gavin.jpeg";
import CalebPic from "@images/Exec/caleb.jpeg";
import FordPic from "@images/Exec/ford.jpeg";


const people: { name: string; role: string; imageUrl: any }[] = [
  {
    name: "Alice Enger",
    role: "President",
    imageUrl: AlicePic,
  },
  {
    name: "Iris Ely",
    role: "VP of Programming",
    imageUrl: IrisPic,
  },
  {
    name: "Yash Fadia",
    role: "VP of External Affairs",
    imageUrl: YashPic,
  },
  {
    name: "Clara Asseily",
    role: "VP of Internal Affairs",
    imageUrl: ClaraPic,
  },
  {
    name: "Dhruv Saoji",
    role: "VP of Technology",
    imageUrl: DhruvPic,
  },
  {
    name: "Tahira Grewal",
    role: "VP of Technology",
    imageUrl: TahiraPic,
  },
  {
    name: "Josh Prunty",
    role: "VP of Marketing",
    imageUrl: JoshPic,
  },
  {
    name: "Gavin Chung",
    role: "VP of Recruitment",
    imageUrl: GavinPic,
  },
  {
    name: "Caleb Weldon",
    role: "VP of Recruitment",
    imageUrl: CalebPic,
  },
  {
    name: "Ford Holmen",
    role: "VP of Finance",
    imageUrl: FordPic,
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
            className="hidden sm:grid mx-auto gap-x-4 gap-y-8 grid-cols-2 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-5 md:gap-x-6 sm:max-w-2xl lg:max-w-3xl lg:gap-y-12"
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
