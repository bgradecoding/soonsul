const authRouter = {
  refresh: "/auth/refresh",
  signup: "/auth/signup",
  isMe: "/auth/token",
  googleLogin: "/auth/login/google",
  kakaoLogin: "/auth/login/kakao",
  naverLogin: "/auth/login/naver",
  appleLogin: "/auth/login/apple",
} as const;

export { authRouter };
