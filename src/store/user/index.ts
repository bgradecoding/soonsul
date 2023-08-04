import { create } from "zustand";

interface UserStore {
  userInfo: {
    id: string;
    nickName: string;
    oauthProvider: string;
    profileImage: string;
  };
  setUserInfo: (userInfo: {
    id: string;
    nickName: string;
    oauthProvider: string;
    profileImage: string;
  }) => void;
}

const useUserStore = create<UserStore>((set) => ({
  userInfo: {
    id: "",
    nickName: "",
    oauthProvider: "",
    profileImage: "",
  },
  setUserInfo: (userInfo: {
    id: string;
    nickName: string;
    oauthProvider: string;
    profileImage: string;
  }) => set({ userInfo }),
}));

export default useUserStore;
