declare type NavigationType = {
  [key: string]: {
    name: string;
    icon: any;
    current: boolean;
    secondary: boolean;
    adminonly: boolean;
  };
};

declare type SideBarArgsType = {
  Logo: string;
  Navigation: NavigationType;
  ImageUrl: string;
  CurrentUserName: string;
  Admin: boolean;
  onTabClick: (tab: string) => void;
};
