import React from 'react';
const places_to_20 = ["First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh", "Eighth", "Ninth", "Tenth", "Eleventh", "Twelfth", "Thirteenth", "Fourteenth", "Fifteenth", "Sixteenth", "Seventeenth", "Eighteenth", "Nineteenth", "Twentieth"];
import { ref, child, get } from "firebase/database";
function weightedScoreCalc(easy, med, hard) {
  return easy+med*3+hard*10
};

class LcLeaderboard extends React.Component {
  constructor(props) {
    super(props);
    //"Steven Ewald":"stevenewald","Ford Holmen":"fholmen1","Tahira ":"tahiragrewal","Cat Tawadros":"ctawadros","Eagan Deshpande":"ikan9989","Conor Olson":"cbolson03","Mia Scarpati":"mscarpati","Andy Vu":"Andy_V_123","Kelly Meng":"kellymeng","Eli G":"Eligottlieb","Sneh Deshpande":"SnehDeshpande"
    this.state = {users:{},totalQuestions:0,totalEasy:0,totalMedium:0,totalHard:0,lcStats:[]};
    this.offsets = {}
  }

  componentDidMount() {
    this.props.firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        try {
          const dbRef = ref(this.props.database);
          const snapshot = await get(child(dbRef, "public_users"));
          const dir = snapshot.val();
          var new_users = {};
          var new_offsets = {};
          for (var user3 in dir) {
            const user2 = dir[user3];
            if (user2.leetcode && user2.leetcode.username) {
                const prof_pic = user2.pfp_large_link ? user2.pfp_large_link : user2.profile_pic_link;
              new_users[user2.name] = {uname: user2.leetcode.username, pic_link:prof_pic};
              new_offsets[user2.leetcode.username] = user2.leetcode.offsets;
            }
          }
          this.setState({ users: new_users });
          this.offsets = new_offsets;

          const urls = [];
          for (var user4 in new_users) {
            urls.push({
              user: user4,
              lcUser: new_users[user4].uname,
              profPicLink: new_users[user4].pic_link,
              url:
                "https://leetcode-stats-api.herokuapp.com/" +
                new_users[user4].uname,
            });
          }
          const requests = urls.map((url) => fetch(url.url));
          const responses = await Promise.all(requests);
          const errors = responses.filter((response) => !response.ok);

          if (errors.length > 0) {
            throw errors.map((response) => Error(response.statusText));
          }

          const json = responses.map((response, index) => ({
            user: urls[index].user,
            lcUser: urls[index].lcUser,
            profPicLink: urls[index].profPicLink,
            response: response.json(),
          }));
          const data = await Promise.all(
            json.map(async ({ user, lcUser, profPicLink, response }) => ({
              user,
              lcUser,
              profPicLink,
              response: await response,
            }))
          );
          var formattedStats = [];
          var totalQuestions = 0;
          var totalEasy = 0;
          var totalMedium = 0;
          var totalHard = 0;
          for (var indivLcUser in data) {
            const lcUser = data[indivLcUser].lcUser;
            const profPicLink = data[indivLcUser].profPicLink;
            const cUR = data[indivLcUser].response;
            const oUR = this.offsets[lcUser];
            if(!cUR || !cUR.easySolved || !oUR || !oUR.easySolved) {
                console.log("Skipping leetcode generation for " + user.name + "\n\n");
                continue;
            }
            if (lcUser in this.offsets) {
              formattedStats.push({
                lcUser: lcUser,
                name: data[indivLcUser].user,
                easySolved: cUR.easySolved - oUR.easySolved,
                mediumSolved: cUR.mediumSolved - oUR.mediumSolved,
                hardSolved: cUR.hardSolved - oUR.hardSolved,
                acceptanceRate: cUR.acceptanceRate,
                weightedScore: weightedScoreCalc(
                  cUR.easySolved - oUR.easySolved,
                  cUR.mediumSolved - oUR.mediumSolved,
                  cUR.hardSolved - oUR.hardSolved
                ),
                pictureLink:profPicLink,
              });
            } else {
              formattedStats.push({
                lcUser: lcUser,
                name: data[indivLcUser].user,
                easySolved: cUR.easySolved,
                mediumSolved: cUR.mediumSolved,
                hardSolved: cUR.hardSolved,
                acceptanceRate: cUR.acceptanceRate,
                weightedScore: weightedScoreCalc(
                  cUR.easySolved,
                  cUR.mediumSolved,
                  cUR.hardSolved
                ),
                pictureLink:profPicLink,
              });
            }
            totalQuestions = cUR.totalQuestions;
            totalEasy = cUR.totalEasy;
            totalMedium = cUR.totalMedium;
            totalHard = cUR.totalHard;
          }
          const sortedData = formattedStats.sort(
            (a, b) => b.weightedScore - a.weightedScore
          );
          this.setState({
            totalEasy: totalEasy,
            totalMedium: totalMedium,
            totalHard: totalHard,
            totalQuestions: totalQuestions,
            lcStats: sortedData,
          });
        } catch (errors) {
            console.log(errors);
          errors.forEach((error) => console.error(error));
        }
      }
    });
  }
  
  render() {
    return (
      <div className="bg-white h-screen overflow-y-scroll">
        <div className="mx-auto max-w-7xl py-12 px-6">
          <div className="space-y-12">
            <div className="space-y-5 sm:space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Leetcode Leaderboard
              </h2>
              <p className="text-xl text-gray-500">
                Add your Leetcode username to your profile to compete. Everyone
                starts at 0 and the pledge with the highest questions solved
                wins a prize, good luck!
              </p>
            </div>
            <div className="lg:col-span-2">
              <ul
                role="list"
                className="space-y-12 sm:-mt-8 sm:space-y-0 sm:divide-y sm:divide-gray-200 lg:gap-x-8 lg:space-y-0"
              >
                {this.state.lcStats
                  .slice(
                    0,
                    Math.max(
                      Math.min(5, this.state.lcStats.length),
                      Math.ceil(this.state.lcStats.length / 2)
                    )
                  )
                  .map((currUser, index) => (
                    <li key={currUser.name} className="sm:py-8">
                      <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0 max-w-3xl">
                        <div className="max-w-[240px] max-h-[240px]">
                          <div className="aspect-square overflow-hidden rounded-lg">
                            <img
                              className="rounded-lg shadow-lg object-cover"
                              src={currUser.pictureLink}
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="sm:col-span-2">
                          <div>
                            <div className="space-y-1 text-lg font-medium leading-6">
                              <h3>{currUser.name}</h3>
                              <p className="text-indigo-600">
                                {places_to_20[index]} Place
                              </p>
                            </div>
                            <div className="relative right-6 -mt-10 mb-4">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="455"
                                height="175"
                                viewBox="0 0 455 175"
                                fill="none"
                              >
                                <g transform="translate(0, 55)">
                                  <g
                                    transform="translate(400, 47.5)"
                                    className="hidden sm:block"
                                  >
                                    <circle
                                      class="acceptance-circle-rim"
                                      cx="-10"
                                      cy="8"
                                      r="60"
                                    />
                                    <circle
                                      style={{
                                        "--stroke-end-width": String(
                                          377 -
                                            (currUser.acceptanceRate / 100) *
                                              377
                                        ),
                                      }}
                                      className="acceptance-circle"
                                      cx="-10"
                                      cy="8"
                                      r="60"
                                    />
                                    <text
                                      class="acceptance-text"
                                      x="-7"
                                      y="0"
                                      alignment-baseline="central"
                                      dominant-baseline="central"
                                      text-anchor="middle"
                                    >
                                      {" "}
                                      {Math.round(
                                        currUser.acceptanceRate
                                      )}%{" "}
                                    </text>
                                    <text
                                      class="acceptance-title"
                                      x="-7"
                                      y="20"
                                      alignment-baseline="central"
                                      dominant-baseline="central"
                                      text-anchor="middle"
                                    >
                                      {" "}
                                      acceptance{" "}
                                    </text>
                                  </g>
                                  <svg x="0" y="0">
                                    <g transform="translate(0, 0)">
                                      <g
                                        class="stagger"
                                        transform="translate(25, 0)"
                                      >
                                        <text class="stat bold" y="12.5">
                                          Weighted Score:
                                        </text>
                                        <text class="stat" x="200" y="12.5">
                                          {currUser.weightedScore}
                                        </text>
                                      </g>
                                    </g>
                                    <g transform="translate(0, 25)">
                                      <g
                                        class="stagger"
                                        transform="translate(25, 0)"
                                      >
                                        <text class="stat bold" y="12.5">
                                          Total Questions Solved:
                                        </text>
                                        <text class="stat" x="200" y="12.5">
                                          {currUser.easySolved +
                                            currUser.mediumSolved +
                                            currUser.hardSolved}
                                        </text>
                                      </g>
                                    </g>
                                    <g transform="translate(0, 50)">
                                      <g
                                        class="stagger"
                                        transform="translate(25, 0)"
                                      >
                                        <text class="stat bold easy" y="12.5">
                                          Easy Questions Solved:
                                        </text>
                                        <text
                                          class="stat easy"
                                          x="200"
                                          y="12.5"
                                        >
                                          {currUser.easySolved}
                                        </text>
                                      </g>
                                    </g>
                                    <g transform="translate(0, 75)">
                                      <g
                                        class="stagger"
                                        transform="translate(25, 0)"
                                      >
                                        <text class="stat bold medium" y="12.5">
                                          Medium Questions Solved:
                                        </text>
                                        <text
                                          class="stat medium"
                                          x="200"
                                          y="12.5"
                                        >
                                          {currUser.mediumSolved}
                                        </text>
                                      </g>
                                    </g>
                                    <g transform="translate(0, 100)">
                                      <g
                                        class="stagger"
                                        transform="translate(25, 0)"
                                      >
                                        <text class="stat bold hard" y="12.5">
                                          Hard Questions Solved:
                                        </text>
                                        <text
                                          class="stat hard"
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
                            <ul role="list" className="flex space-x-5">
                              <li>
                                <a
                                  target="_blank"
                                  href={
                                    "https://leetcode.com/" + currUser.lcUser
                                  }
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
                              </li>
                            </ul>
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
