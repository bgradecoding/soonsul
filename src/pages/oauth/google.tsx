import { useRouter } from "next/router";
import { useEffect } from "react";
import { api } from "@/utils/api";
import { authRouter } from "@/constants/routers";
import { SNSLoginRes } from "@/interfaces/auth";

const GoogleLogin = () => {
  const router = useRouter();
  const { code } = router.query;

  const fetchGoogleLogin = async () => {
    try {
      const res = await api.get<SNSLoginRes>(authRouter.googleLogin, {
        code,
      });
      if (res.data.code) {
        res.data.code === "A001"
          ? router.push(
              `/signup?oauthId=${res.data.data.oauthId}&oauthProvider=${res.data.data.oauthProvider}`
            )
          : router.push("/main");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (code) {
      fetchGoogleLogin();
    }
  }, [code]);

  return <></>;
};

export default GoogleLogin;
