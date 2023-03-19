import { useEffect, useState } from "react";

import IndivProfile from "./IndivProfile";
import Directory from "./Directory";
import Loading from "./Loading";

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
const damienProfile = {
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
    Internships: "Robotics Intern at Weston Robot",
    Position: "Executive Board, VP of Member Recruitment",
  },
  social: [
    {
      name: "Instagram",
      href: "#",
      icon: (props:any) => (
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
      icon: (props:any) => (
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

//class DirectoryContainer extends React.Component<{fullPubDir:{[uid:string]:PubUserProfileType},uid:string},{directory_visible:boolean,loading:boolean,directory:{[uid:string]:PubUserProfileType},profile:PubUserProfileType,directory_size:number,changeVal:boolean,directoryLoaded:boolean}> {
function DirectoryContainer(props:{fullPubDir:{[uid:string]:UserProfileType},uid:string}) {
  const [directory_visible, setDirectoryVisible] = useState(true);
  const [loading, setLoading] = useState(true);
  const [directory, setDirectory] = useState({});
  const [profile, setProfile] = useState(damienProfile);
  const [activeProfile, setActiveProfile] = useState(props.uid);

  function toggleVisibility() {
    setDirectoryVisible(!directory_visible);
  }

  function dictFromProfile(profile:UserProfileType) {
    var newProfile:any = {};
    newProfile.name = profile.name ?? "";
    newProfile.largeProfilePic =
      profile.pfp_large_link ?? profile.profile_pic_link;
    newProfile.smallProfilePic =
      profile.pfp_thumb_link ?? profile.profile_pic_link;
    if (profile.cover_page_link) {
      newProfile.coverImageUrl =
        profile.cover_resized_link ?? profile.cover_page_link;
    }
    if (profile.leetcode) {
      newProfile.leetcode = profile?.leetcode;
    }
    if (profile.about) {
      newProfile.about = profile.about;
    }
    if (profile.resume_link) {
      newProfile.resume_link = profile.resume_link;
    }

    newProfile.fields = {};
    if (profile.year) {
      newProfile.fields["Class Standing"] = profile.year;
    }
    if (profile.major) {
      newProfile.fields["Major"] = profile.major;
    }
    if (profile.internships) {
      newProfile.fields["Relevant Internships"] = profile.internships;
    }
    if (profile.email) {
      newProfile.email = profile.email;
    }
    newProfile.fields["Role"] = profile.role;
    newProfile.social = [];
    if (profile.instagram) {
      newProfile.social.push({
        name: "Instagram",
        href: "https://instagram.com/" + profile.instagram,
        icon: (props:any) => (
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
    if (profile?.leetcode?.username) {
      newProfile.social.push({
        name: "Leetcode",
        href: "https://leetcode.com/" + profile.leetcode.username,
        icon: (props:any) => (
          <svg
            className="h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            {...props}
          >
            <path
              fill="currentColor"
              d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104a5.35 5.35 0 0 0-.125.513a5.527 5.527 0 0 0 .062 2.362a5.83 5.83 0 0 0 .349 1.017a5.938 5.938 0 0 0 1.271 1.818l4.277 4.193l.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019l-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523a2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382a1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382a1.38 1.38 0 0 0-1.38-1.382z"
            />
          </svg>
        ),
      });
    }
    if (profile.linkedin) {
      newProfile.social.push({
        name: "LinkedIn",
        href: "https://linkedin.com/in/" + profile.linkedin,
        icon: (props:any) => (
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

  /*function changeProfileHandler(profile:UserProfileType) {
    setProfile(dictFromProfile(profile));
  }*/

  /*function changeActiveHandler(id:string) {
    if (id == "none") {
      id = currProfile;
      changeProfileHandler(defaultProfile);
    }
    document
      .getElementById("mob_" + activeMobile)
      ?.classList.remove("bg-gray-100");
    document
      .getElementById("mob_" + activeMobile)
      ?.classList.add("hover:bg-gray-50");
    document.getElementById(id)?.classList.add("bg-gray-100");
    document.getElementById(id)?.classList.remove("hover:bg-gray-50");
    setActiveMobile(id.substring(4, id.length));
    if (id == currProfile) {
      document.getElementById(id)?.classList.add("currProfile");
      document
        .getElementById(id)
        ?.scrollIntoView({ block: "start", behavior: "smooth" });
    }
    toggleVisibility();
  }*/

  //runs once when the full public directory is updated to a non empty dictionary
  function processFullDirectory() {
    var newDirectory:any = {};
    const dir = props.fullPubDir;
    for (var uid in dir) {
      const profile = dir[uid];
      if (!profile.name) {
        continue;
      }
      const first_letter = profile.name.charAt(0).toUpperCase();
      if (first_letter in newDirectory) {
        newDirectory[first_letter][uid] = profile;
      } else {
        newDirectory[first_letter] = {}
        newDirectory[first_letter][uid] = profile;
      }
    }
    const ordered = Object.keys(newDirectory)
      .sort()
      .reduce((obj:any, key) => {
        obj[key] = newDirectory[key];
        return obj;
      }, {});
      setLoading(false);
      setDirectory(ordered);
    //this.props.setClick(this.changeActiveHandler);
  }

  useEffect(() => {processFullDirectory()}, [props.fullPubDir]);
  useEffect(() => {setActiveProfile(props.uid)}, [props.uid]);

    return (
      <div className="relative z-0 flex flex-1 h-screen">
        <IndivProfile
          tabs={tabs}
          directory={props.fullPubDir}
          activeProfile={activeProfile}
          //team={team}
          dir_vis={directory_visible}
          handler={toggleVisibility}
          loading={loading}
        />
        <Directory
          directory={directory}
          activeProfile={activeProfile}
          setActiveProfile={setActiveProfile}
          dir_vis={directory_visible}
          handler={toggleVisibility}
          loading={loading}
        />
        <Loading
          directory={LoadingDirectory}
          dir_vis={directory_visible}
          handler={toggleVisibility}
          loading={loading}
        />
      </div>
    );
}
export default DirectoryContainer;
