import i18n from "@/utils/i18next";

export const KAKAO_AUTH_URL = "https://kauth.kakao.com/oauth/authorize";
export const KAKAO_AUTH_CLIENT_ID = "6f1bf601d05a1a7865a14c8a7815f77a";
export const KAKAO_AUTH_REDIRECT_URI = "https://soonsul.vercel.app/oauth/kakao";
//export const KAKAO_AUTH_REDIRECT_URI = "http://localhost:3001/oauth/kakao";
export const NAVER_AUTH_URL = "https://nid.naver.com/oauth2.0/authorize";
export const NAVER_AUTH_CLIENT_ID = "ihxW45DrOs_EYtX35Oh8";
export const NAVER_AUTH_REDIRECT_URI = "https://soonsul.vercel.app/oauth/naver";
export const NAVER_AUTH_STATE = "hLiDdL2uhPtsftcU";
export const GOOGLE_AUTH_URL = "https://accounts.google.com/o/oauth2/auth";
export const GOOGLE_AUTH_CLIENT_ID =
  "482680316124-2r3davr8p8qleekiidmf0j495dvu4jcp.apps.googleusercontent.com";
export const GOOGLE_AUTH_REDIRECT_URI =
  "https://soonsul.vercel.app/oauth/google";
export const GOOGLE_AUTH_SCOPE =
  "https://www.googleapis.com/auth/userinfo.email";

export const TERMS_LABEL: {
  required: boolean;
  label: string;
  link: string;
}[] = [
  {
    required: true,
    label: i18n.t(`signup.terms.label1`),
    link: "",
  },
  {
    required: true,
    label: i18n.t(`signup.terms.label2`),
    link: "https://candy-pipe-112.notion.site/d517d2c8655548bc8d526ad50beb7ec1",
  },
  {
    required: true,
    label: i18n.t(`signup.terms.label3`),
    link:
      "https://candy-pipe-112.notion.site/73803f4fd51c48848489a9800b140016?pvs=4",
  },
];

export const SHOT_STATUS = {
  READY: "READY",
  SHOOTING: "SHOOTING",
  DONE: "DONE",
  FAIL: "FAIL",
};
