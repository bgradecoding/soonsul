import { useRouter } from "next/router";
import { useEffect } from "react";
import { api } from "@/utils/api";
import { authRouter } from "@/constants/routers";
import { SNSLoginRes } from "@/interfaces/auth";
const KakaoLogin = () => {
  const router = useRouter();
  const { code } = router.query;
  const fetchKakaoLogin = async () => {
    try {
      const res = await api.get<SNSLoginRes>(authRouter.kakaoLogin, {
        code,
      });
      if (res.data.code) {
        res.data.code === "A001" ? router.push("/signup") : router.push("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (code) {
      fetchKakaoLogin();
    }
  }, [code]);

  return <></>;
};

export default KakaoLogin;
