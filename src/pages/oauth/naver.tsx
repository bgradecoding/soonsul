import { useRouter } from "next/router";
import { useEffect } from "react";
import { api } from "@/utils/api";
import { authRouter } from "@/constants/routers";
import { SNSLoginRes } from "@/interfaces/auth";
const NaverLogin = () => {
  const router = useRouter();
  const { code } = router.query;
  const fetchNaverLogin = async () => {
    try {
      const res = await api.get<SNSLoginRes>(authRouter.naverLogin, {
        code,
      });
      console.log(res.data.code);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (code) {
      fetchNaverLogin();
    }
  }, [code]);

  return <></>;
};

export default NaverLogin;
