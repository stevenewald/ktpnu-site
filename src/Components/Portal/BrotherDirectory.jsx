import React from "react";

import IndivProfile from "./IndivProfile";
import Directory from "./Directory";
import Loading from "./Loading";

import Swal from "sweetalert2";

import { ref, child, get } from "firebase/database";

/*const directory = {
  A: [
    {
      id: 1,
      name: "Alexis Robles",
      role: "VP of Technology",
      imageUrl:
        "https://media.licdn.com/dms/image/C4E03AQHxKbf9gRhDYw/profile-displayphoto-shrink_100_100/0/1660923581630?e=1677110400&v=beta&t=WFQuedtnE9aUVQ_m1-AVqpGX2xNMmHfa-tIBuqWJ9AI",
    },
    {
      id: 3,
      name: "A Freshman",
      role: "Pledge",
      imageUrl:
        "https://www.seekpng.com/png/detail/41-410093_circled-user-icon-user-profile-icon-png.png",
    },
  ],
  D: [
    {
      id: 4,
      name: "Damien Koh",
      role: "VP of Recruitment",
      imageUrl:
        "https://media.licdn.com/dms/image/C5603AQGjHa8RFpDKhA/profile-displayphoto-shrink_400_400/0/1656946309926?e=1677110400&v=beta&t=mSIRjcaPvxGM6SNV6HUxntnDc-tfJGJsKe3zvtARVfU",
      active: true,
    },
  ],
  E: [
    {
      id: 5,
      name: "Eagan Notokusumo",
      role: "VP of Finance",
      imageUrl:
        "https://media.licdn.com/dms/image/C4D03AQEX-pJelYP9lQ/profile-displayphoto-shrink_400_400/0/1642469910535?e=1677110400&v=beta&t=xO4xs2sjT6Owexmbp2-Wg7mgAFk8WyC3eKhCC0HQixQ",
    },
  ],
  J: [
    {
      id: 6,
      name: "Julie Park",
      role: "VP of Marketing",
      imageUrl:
        "https://media.licdn.com/dms/image/D5603AQHdZPGTHWZKJQ/profile-displayphoto-shrink_400_400/0/1669337453128?e=1677110400&v=beta&t=AmhLbaajCtLz8OaWrFpGFzZcgHuk-J43gRZMLMbiSbY",
    },
  ],
  N: [
    {
      id: 7,
      name: "Nam Nguyen",
      role: "VP of Internal Affairs",
      imageUrl:
        "https://media.licdn.com/dms/image/C5603AQEtz1wN1PeAmw/profile-displayphoto-shrink_400_400/0/1624822282607?e=1677110400&v=beta&t=IaigaQP4cMDmA0QquIeT8UzH21zT9Eaow7krp38JWtk",
    },
  ],
  S: [
    {
      id: 8,
      name: "Samar Saleem",
      role: "President/Founder",
      imageUrl:
        "https://media.licdn.com/dms/image/C4E03AQEhnMuPtE0eGw/profile-displayphoto-shrink_400_400/0/1657907779939?e=1677110400&v=beta&t=7CxrhEz1WD-lLP4oGe3Xjl6WngS6c24H3yqfESR87ig",
    },
    {
      id: 9,
      name: "Sneh Deshpande",
      role: "VP of Internal Affairs",
      imageUrl:
        "https://media.licdn.com/dms/image/C4D03AQEVH1jm84ax0A/profile-displayphoto-shrink_400_400/0/1649042616875?e=1677110400&v=beta&t=VxBCPGOWUAlXGvk0bSi8n1flSEy6IBRccQhKVGtkYO0",
    },
    {
      id: 10,
      name: "Steve Ewald",
      role: "VP of Technology",
      imageUrl:
        "https://media.licdn.com/dms/image/C4D03AQHPxYjOagRJig/profile-displayphoto-shrink_400_400/0/1649132175326?e=1677110400&v=beta&t=4_IxWqZY2o5GECcPwGyIfVQX0w8tX5mp1kFUvZPyCjQ",
    },
  ],
};*/

const LoadingDirectory = {
  A: [
    {
      imageUrl: "https://cdn-icons-png.flaticon.com/512/5509/5509456.png",
    },
    {
      imageUrl: "https://cdn-icons-png.flaticon.com/512/5509/5509456.png",
    },
    {
      imageUrl: "https://cdn-icons-png.flaticon.com/512/5509/5509456.png",
    },
    {
      imageUrl: "https://cdn-icons-png.flaticon.com/512/5509/5509456.png",
    },
    {
      imageUrl: "https://cdn-icons-png.flaticon.com/512/5509/5509456.png",
    },
    {
      imageUrl: "https://cdn-icons-png.flaticon.com/512/5509/5509456.png",
    },
    {
      imageUrl: "https://cdn-icons-png.flaticon.com/512/5509/5509456.png",
    },
    {
      imageUrl: "https://cdn-icons-png.flaticon.com/512/5509/5509456.png",
    },
    {
      imageUrl: "https://cdn-icons-png.flaticon.com/512/5509/5509456.png",
    },
  ],
};

const tabs = [
  { name: "Profile", href: "#", current: true },
  { name: "Calendar", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
];
const profile = {
  name: "Damien Koh",
  email: "",
  imageUrl:
    "https://media.licdn.com/dms/image/C5603AQGjHa8RFpDKhA/profile-displayphoto-shrink_400_400/0/1656946309926?e=1677110400&v=beta&t=mSIRjcaPvxGM6SNV6HUxntnDc-tfJGJsKe3zvtARVfU",
  coverImageUrl:
    "https://media.licdn.com/dms/image/C4E16AQGFJSoP2FlSpQ/profile-displaybackgroundimage-shrink_350_1400/0/1620110492095?e=1677110400&v=beta&t=Mm3tilVD1hw3S7qtnXVRNhSuS4CkTmqTrrxFPM_TlPU",
  about: `
        <p>I am currently enrolled as a sophomore in the McCormick School of Engineering at Northwestern University. Through Northwestern's BSMS Program, I am currently pursuing a Bachelor's degree in Computer Engineering along with a Master's in Mechanical Engineering Specializing in Robotics and Control. I am interested in control systems, computer vision, and machine learning, but am still constantly exploring different Robotics subfields of potential interest.</p>
      `,
  fields: {
    "Class Standing": "Sophomore",
    Major: "Computer Engineering",
    "Notable internships": "Robotics Intern at Weston Robot",
    Position: "Executive Board, VP of Member Recruitment",
  },
  social: [
    {
      name: "Instagram",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

const team = [
  {
    name: "Josh Brice",
    role: "VP of Member Recruitment",
    imageUrl:
      "https://media.licdn.com/dms/image/C5603AQE7b12wJDGvtg/profile-displayphoto-shrink_400_400/0/1648564209595?e=1677110400&v=beta&t=SFPXEed0FNCB9CXnbu-cNba95eiJ9SPVht1gWpSDyM4",
  },
];

class BrotherDirectory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      directory_visible: true,
      loading: true,
      directory: {},
      profile: profile,
      directory_size: 0,
      changeVal: true,
    };
    this.toggleVisibility = this.toggleVisibility.bind(this);
    this.changeProfileHandler = this.changeProfileHandler.bind(this);
    this.changeActiveHandler = this.changeActiveHandler.bind(this);
    this.activeMobile = "1";
    this.currProfile = "mob_1";
    this.defaultProfile = {};
  }

  toggleVisibility() {
    this.setState({ directory_visible: !this.state.directory_visible });
  }

  dictFromProfile(profile) {
    var newProfile = {};
    newProfile.name = profile.name;
    newProfile.imageUrl = profile.profile_pic_link;
    if (profile.cover_page_link) {
      newProfile.coverImageUrl = profile.cover_page_link;
    }
    if (profile.about) {
      newProfile.about = profile.about;
    }
    newProfile.fields = {};
    if (profile.year) {
      newProfile.fields["Class Standing"] = profile.year;
    }
    if (profile.major) {
      newProfile.fields["Major"] = profile.major;
    }
    if (profile.internships) {
      newProfile.fields["Notable Internships"] = profile.internships;
    }
    if (profile.email) {
      newProfile.email = profile.email;
    }
    newProfile.fields["Role"] = "Executive";
    newProfile.social = [];
    if (profile.instagram) {
      newProfile.social.push({
        name: "Instagram",
        href: "https://instagram.com/" + profile.instagram,
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
              clipRule="evenodd"
            />
          </svg>
        ),
      });
    }
    if (profile.linkedin) {
      newProfile.social.push({
        name: "LinkedIn",
        href: "https://linkedin.com/in/" + profile.linkedin,
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 -1.3 28 28" {...props}>
            <path
              fillRule="evenodd"
              d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
              clipRule="evenodd"
            />
          </svg>
        ),
      });
    }
    return newProfile;
  }

  changeProfileHandler(profile) {
    this.setState({ profile: this.dictFromProfile(profile) });
  }

  changeActiveHandler(id) {
    if(id=="none") {
      id=this.currProfile;
      this.changeProfileHandler(this.defaultProfile);
    }
    document
      .getElementById("mob_" + this.activeMobile)
      .classList.remove("bg-gray-100");
    document
      .getElementById("mob_" + this.activeMobile)
      .classList.add("hover:bg-gray-50");
    document.getElementById(id).classList.add("bg-gray-100");
    document.getElementById(id).classList.remove("hover:bg-gray-50");
    this.activeMobile = id.substring(4, id.length);
  }

  componentDidMount() {
    this.props.firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        let timerInterval;
        Swal.fire({
          title: "You are signed out. Redirecting to login...",
          icon: "info",
          timer: 2000,
          timerProgressBar: true,
          willClose: () => {
            clearInterval(timerInterval);
          },
        }).then((result) => {
          window.location.href = "/signup";
        });
      } else {
        const dbRef = ref(this.props.database);
        get(child(dbRef, "public_users")).then((snapshot) => {
          var newDirectory = {};
          const dir = snapshot.val();
          var amount = 0;
          for (var item in dir) {
            const profile = dir[item];
            if(!profile.name) {
              continue;
            }
            amount += 1;
            //alert(JSON.stringify(dir[item]));
            const first_letter = profile.name.charAt(0).toUpperCase();
            console.log(profile.name);
            var user_dict = {};
            user_dict["name"] = profile.name;
            user_dict["role"] = "Executive";
            user_dict["imageUrl"] = profile.profile_pic_link;
            user_dict["fullProfile"] = profile;
            user_dict["handler"] = this.changeProfileHandler;
            user_dict["id"] = String(amount);
            if (item === user.uid) {
              user_dict.email = profile.email;
              user_dict.active = true;
              this.activeMobile = String(amount);
              this.currProfile = "mob_"+String(amount);
              this.setState({ profile: this.dictFromProfile(profile) });
              this.defaultProfile = profile;
            }
            if (first_letter in newDirectory) {
              newDirectory[first_letter].push(user_dict);
            } else {
              newDirectory[first_letter] = [user_dict];
            }
          }
          const ordered = Object.keys(newDirectory).sort().reduce(
            (obj, key) => { 
              obj[key] = newDirectory[key]; 
              return obj;
            }, 
            {}
          );
          this.setState({
            directory: ordered,
            loading: false,
            directory_size: amount,
          });
          this.props.setClick(this.changeActiveHandler);
        });
      }
    });
  }

  render() {
    return (
      <div className="relative z-0 flex flex-1 overflow-hidden">
        <IndivProfile
          tabs={tabs}
          profile={this.state.profile}
          team={team}
          dir_vis={this.state.directory_visible}
          handler={this.toggleVisibility}
          loading={this.state.loading}
        />
        <Directory
          directory={this.state.directory}
          dir_vis={this.state.directory_visible}
          handler={this.toggleVisibility}
          loading={this.state.loading}
          directory_size={this.state.directory_size}
          changeActiveHandler={this.changeActiveHandler}
        />
        <Loading
          directory={LoadingDirectory}
          dir_vis={this.state.directory_visible}
          handler={this.toggleVisibility}
          loading={this.state.loading}
        />
      </div>
    );
  }
}
export default BrotherDirectory;
