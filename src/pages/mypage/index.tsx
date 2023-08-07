import HeaderComponent from "@/components/header";
import { useRouter } from "next/router";
const Mypage: React.FC = () => {
  const router = useRouter();
  return (
    <div>
      <HeaderComponent
        title={"마이페이지"}
        share={false}
        onClick={() => router.push("/main")}
      />
    </div>
  );
};

export default Mypage;
