export type SignupDto = {
  age: 0 | 10 | 20 | 30 | 40 | 50 | 60;
  flagAge: boolean;
  flagPrivacy: boolean;
  flagTerms: boolean;
  gender: "M" | "F" | "";
  oauthId: string;
  oauthProvider: string;
};
