import { useRouter } from "next/router";
import { useEffect } from "react";
import { api } from "@/utils/api";
import { authRouter } from "@/constants/routers";
import { SNSLoginRes } from "@/interfaces/auth";
const AppleLogin = () => {
  const router = useRouter();
  const { code } = router.query;
  const fetchAppleLogin = async () => {
    try {
      const res = await api.get<SNSLoginRes>(authRouter.appleLogin, {
        code,
      });
      console.log(res.data.code);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (code) {
      fetchAppleLogin();
    }
  }, [code]);

  return <></>;
};

export default AppleLogin;
