import { useEffect, useState, useContext } from "react";
import { ActiveProfileContext } from "@portal/Framework/ActiveProfileContext";

import IndivProfile from "@tabs/Directory/IndivProfile";
import Directory from "@tabs/Directory/Directory";
import Loading from "@tabs/Directory/Loading";
import LoadingIcon from "@images/Misc/loading.png";

const LoadingDirectory = {
  A: [
    {
      imageUrl: LoadingIcon,
    },
    {
      imageUrl: LoadingIcon,
    },
    {
      imageUrl: LoadingIcon,
    },
    {
      imageUrl: LoadingIcon,
    },
    {
      imageUrl: LoadingIcon,
    },
    {
      imageUrl: LoadingIcon,
    },
    {
      imageUrl: LoadingIcon,
    },
    {
      imageUrl: LoadingIcon,
    },
    {
      imageUrl: LoadingIcon,
    },
  ],
};

const tabs = [
  { name: "Profile", href: "#", current: true },
  { name: "Calendar", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
];

export default function DirectoryContainer(props: {
  fullPubDir: { [uid: string]: UserProfileType };
  uid: string;
}) {
  const [directory_visible, setDirectoryVisible] = useState(true);
  const [directory, setDirectory] = useState({});
  const { activeProfile, setActiveProfile }: any =
    useContext(ActiveProfileContext);

  function toggleVisibility() {
    setDirectoryVisible(!directory_visible);
  }

  //runs once when the full public directory is updated to a non empty dictionary
  function processFullDirectory() {
    if (Object.keys(props.fullPubDir).length == 0) {
      return;
    }
    var newDirectory: any = {};
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
        newDirectory[first_letter] = {};
        newDirectory[first_letter][uid] = profile;
      }
    }
    const ordered = Object.keys(newDirectory)
      .sort()
      .reduce((obj: any, key) => {
        obj[key] = newDirectory[key];
        return obj;
      }, {});
    setDirectory(ordered);
  }

  useEffect(() => {
    processFullDirectory();
  }, [props.fullPubDir]);
  
  useEffect(() => {
    setActiveProfile(props.uid);
  }, [props.uid]);

  return (
    <div className="relative z-0 flex flex-1 h-screen">
      <IndivProfile
        tabs={tabs}
        directory={props.fullPubDir}
        activeProfile={activeProfile}
        //team={team}
        dir_vis={directory_visible}
        handler={toggleVisibility}
        loading={Object.keys(directory).length == 0}
      />
      <Directory
        directory={directory}
        activeProfile={activeProfile}
        setActiveProfile={setActiveProfile}
        dir_vis={directory_visible}
        handler={toggleVisibility}
        loading={Object.keys(directory).length == 0}
      />
      <Loading
        directory={LoadingDirectory}
        dir_vis={directory_visible}
        handler={toggleVisibility}
        loading={Object.keys(directory).length == 0}
      />
    </div>
  );
}
