import { useMutation } from "react-query";
import { api } from "@/utils/api";
import { SignupDto } from "@/interfaces/signup";
import { authRouter } from "@/constants/routers";

const fetchSignup = async (signupDto: SignupDto) => {
  const { data } = await api.post(authRouter.signup, signupDto);
  return data;
};

export const usePostSignup = (callbackFn: () => void) => {
  return useMutation((data: SignupDto) => fetchSignup(data), {
    onSuccess: () => {
      callbackFn();
    },
  });
};
