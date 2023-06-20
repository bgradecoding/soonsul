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
      console.log(res.data.code);
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
