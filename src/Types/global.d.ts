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

declare type UserProfileType = {
  about?: string;
  allowed?: boolean;
  email_viewable?: boolean;
  internships?: string;
  internships_viewable?: boolean;
  cover_resized_link?: string;
  phone?: string;
  signed_up?: boolean;
  standing_viewable?: boolean;
  announcement_level?: number;
  cover_page_link?: string;
  email?: string;
  instagram?: string;
  leetcode?: { username?: string; offsets?: any; answers?: any };
  linkedin?: string;
  major?: string;
  name?: string;
  pfp_large_link?: string;
  pfp_thumb_link?: string;
  profile_pic_link?: string;
  resume_link?: string;
  role?: string;
  signed_up?: boolean;
  year?: freshman;
};
