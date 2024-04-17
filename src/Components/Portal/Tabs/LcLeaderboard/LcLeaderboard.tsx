import React from "react";

const places_to_20 = [
  "1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th",
  "11th", "12th", "13th", "14th", "15th", "16th", "17th", "18th", "19th", "20th",
];

function weightedScoreCalc(easy: number, med: number, hard: number): number {
  return easy * 2 + med * 5 + hard * 8;
}

class LcLeaderboard extends React.Component<
  { firebase: any; database: any, fullPubDir:any },
  { lcStats: any[] }
> {
  constructor(props: { firebase: any; database: any, fullPubDir:any }) {
    super(props);
    //"Steven Ewald":"stevenewald","Ford Holmen":"fholmen1","Tahira ":"tahiragrewal","Cat Tawadros":"ctawadros","Eagan Deshpande":"ikan9989","Conor Olson":"cbolson03","Mia Scarpati":"mscarpati","Andy Vu":"Andy_V_123","Kelly Meng":"kellymeng","Eli G":"Eligottlieb","Sneh Deshpande":"SnehDeshpande"
    this.state = {
      lcStats: [],
    };
    this.processPubDir = this.processPubDir.bind(this);
  }

  processPubDir() {
    if(this.state.lcStats.length > 0) return;
    try {
      const dir = this.props.fullPubDir;
      var lc_users: {
        [key: string]: {
          name: string;
          offsets: any;
          answers: any;
          pfp: string;
        };
      } = {};
      for (var user3 in dir) {
        const user2 = dir[user3];
        if (user2.leetcode && user2.leetcode.username) {
          if (!user2.leetcode.answers) {
            console.log(user2.leetcode + " has no answers, skipping\n");
            continue;
          } else if (!user2.leetcode.offsets) {
            console.log(user2.leetcode + " has no offsets, skipping\n");
            continue;
          }
          const prof_pic = user2.pfp_large_link
            ? user2.pfp_large_link
            : user2.profile_pic_link;
          lc_users[user2.leetcode.username] = {
            name: user2.name,
            offsets: user2.leetcode.offsets,
            answers: user2.leetcode.answers,
            pfp: prof_pic,
          };
        }
      }

      console.log("ALL LC USERS:", lc_users);

      var formattedStats = [];
      for (var lcusername in lc_users) {
        const lc_user_elem = lc_users[lcusername];
        formattedStats.push({
          lcUser: lcusername,
          name: lc_user_elem.name,
          easySolved:
            lc_user_elem.answers.easySolved -
            lc_user_elem.offsets.easySolved,
          mediumSolved:
            lc_user_elem.answers.mediumSolved -
            lc_user_elem.offsets.mediumSolved,
          hardSolved:
            lc_user_elem.answers.hardSolved -
            lc_user_elem.offsets.hardSolved,
          acceptanceRate: lc_user_elem.answers.acceptanceRate,
          weightedScore: weightedScoreCalc(
            lc_user_elem.answers.easySolved -
              lc_user_elem.offsets.easySolved,
            lc_user_elem.answers.mediumSolved -
              lc_user_elem.offsets.mediumSolved,
            lc_user_elem.answers.hardSolved -
              lc_user_elem.offsets.hardSolved
          ),
          pictureLink: lc_user_elem.pfp,
        });
      }
      const sortedData = formattedStats.sort(
        (a, b) => b.weightedScore - a.weightedScore
      );
      if(sortedData.length == 0) {
        return;
      }
      this.setState({
        lcStats: sortedData,
      });

      console.log(sortedData);
    } catch (errors) {
      console.log("Error loading lc stats");
      console.log(errors);
    }
  }

  render() {
    this.processPubDir();
    return (
      <div className="bg-white h-screen overflow-y-scroll">
        <div className="mx-auto max-w-7xl py-12 px-6">
          <div className="space-y-12">
            <div className="space-y-5 sm:space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                LeetCode Leaderboard
              </h2>
              <p className="text-xl text-gray-500">
                Welcome to the KTP LeetCode Challenge Leaderboard! See where you rank among your peers as you push the boundaries of your coding skills. Easy questions are 2 points, medium are 5 points, and hard are 8 points.
              </p>
              <p className="text-gray-500 italic">
                Note: This page is updated every 10 minutes.
              </p>
            </div>
            <div className="lg:col-span-2">
              <ul
                role="list"
                className="space-y-12 sm:-mt-8 sm:space-y-0 sm:divide-y sm:divide-gray-200 lg:gap-x-8 lg:space-y-0"
              >
                {this.state.lcStats
                  // .slice(0, Math.min(this.state.lcStats.length, 10))
                  .map((currUser, index) => (
                    <li key={currUser.name} className="sm:pt-5">
                      <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0 max-w-3xl">
                        <div className="max-w-[200px] max-h-[200px] mt-[0.335rem]">
                          <div className="aspect-square overflow-hidden rounded-lg">
                            <img
                              className="rounded-lg shadow-lg object-cover min-w-full min-h-full"
                              src={currUser.pictureLink}
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="sm:col-span-2">
                          <div>
                            <div className="space-y-1 text-lg font-medium leading-6">
                              <div className="flex space-x-4">
                                <h3>{currUser.name}</h3>
                                <a
                                  target="_blank"
                                  href={
                                    "https://leetcode.com/" + currUser.lcUser
                                  }
                                  className="mt-[.075rem] hover:text-gray-600"
                                >
                                  <svg
                                    className="h-5 w-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104a5.35 5.35 0 0 0-.125.513a5.527 5.527 0 0 0 .062 2.362a5.83 5.83 0 0 0 .349 1.017a5.938 5.938 0 0 0 1.271 1.818l4.277 4.193l.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019l-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523a2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382a1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382a1.38 1.38 0 0 0-1.38-1.382z"
                                    />
                                  </svg>
                                </a>
                              </div>
                              <p className="text-indigo-600">
                                {places_to_20[index]} Place
                              </p>
                            </div>
                            <div className="relative right-6 -mt-4 mb-4">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="455"
                                height="175"
                                viewBox="0 0 455 175"
                                fill="none"
                              >
                                <g transform="translate(0, 55)">
                                  <svg x="0" y="0">
                                    <g transform="translate(0, 0)">
                                      <g
                                        className="stagger"
                                        transform="translate(25, 0)"
                                      >
                                        <text className="stat bold" y="12.5">
                                          Weighted Score:
                                        </text>
                                        <text className="stat" x="200" y="12.5">
                                          {currUser.weightedScore}
                                        </text>
                                      </g>
                                    </g>
                                    <g transform="translate(0, 25)">
                                      <g
                                        className="stagger"
                                        transform="translate(25, 0)"
                                      >
                                        <text className="stat bold" y="12.5">
                                          Total Questions Solved:
                                        </text>
                                        <text className="stat" x="200" y="12.5">
                                          {currUser.easySolved +
                                            currUser.mediumSolved +
                                            currUser.hardSolved}
                                        </text>
                                      </g>
                                    </g>
                                    <g transform="translate(0, 50)">
                                      <g
                                        className="stagger"
                                        transform="translate(25, 0)"
                                      >
                                        <text
                                          className="stat bold easy"
                                          y="12.5"
                                        >
                                          Easy Questions Solved:
                                        </text>
                                        <text
                                          className="stat easy"
                                          x="200"
                                          y="12.5"
                                        >
                                          {currUser.easySolved}
                                        </text>
                                      </g>
                                    </g>
                                    <g transform="translate(0, 75)">
                                      <g
                                        className="stagger"
                                        transform="translate(25, 0)"
                                      >
                                        <text
                                          className="stat bold medium"
                                          y="12.5"
                                        >
                                          Medium Questions Solved:
                                        </text>
                                        <text
                                          className="stat medium"
                                          x="200"
                                          y="12.5"
                                        >
                                          {currUser.mediumSolved}
                                        </text>
                                      </g>
                                    </g>
                                    <g transform="translate(0, 100)">
                                      <g
                                        className="stagger"
                                        transform="translate(25, 0)"
                                      >
                                        <text
                                          className="stat bold hard"
                                          y="12.5"
                                        >
                                          Hard Questions Solved:
                                        </text>
                                        <text
                                          className="stat hard"
                                          x="200"
                                          y="12.5"
                                        >
                                          {currUser.hardSolved}
                                        </text>
                                      </g>
                                    </g>
                                  </svg>
                                </g>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LcLeaderboard;
